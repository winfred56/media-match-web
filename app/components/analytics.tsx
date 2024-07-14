'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiEndpoint } from "@/app/components/api_endpoint";
import RequestsPerMonthChart from "@/app/components/graph";
import {CircularProgress} from "@mui/material";

interface TopMatchedItem {
    id: number;
    file_name: string;
    source: string;
    duration_seconds: number;
}

interface AnalyticsCards {
    totalRequestsPerMonth: { [key: string]: number } | null;
    overallTotalRequests: { total_requests: number } | null;
    findRequestsToday: { find_requests_today: number[] } | null;
    averageWeeklyRequests: { average_requests_per_week: number } | null;
    failedRequests: { failed_requests: any[] } | null;
    topMatchedAudios: TopMatchedItem[] | null;
    topMatchedVideos: TopMatchedItem[] | null;
}


const AnalyticsDashboard: React.FC = () => {
    const [data, setData] = useState<AnalyticsCards>({
        totalRequestsPerMonth: null,
        overallTotalRequests: null,
        findRequestsToday: null,
        averageWeeklyRequests: null,
        failedRequests: null,
        topMatchedAudios: null,
        topMatchedVideos: null,
    });
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            const endpoints = [
                { key: 'totalRequestsPerMonth', url: `${apiEndpoint}/analytics/requests-per-month/` },
                { key: 'overallTotalRequests', url: `${apiEndpoint}/analytics/total-requests-current-year/` },
                { key: 'findRequestsToday', url: `${apiEndpoint}/analytics/find-requests-today/` },
                { key: 'averageWeeklyRequests', url: `${apiEndpoint}/analytics/average-requests-per-week/` },
                { key: 'failedRequests', url: `${apiEndpoint}/analytics/failed-requests/` },
                { key: 'topMatchedAudios', url: `${apiEndpoint}/analytics/top-matched-audios/` },
                { key: 'topMatchedVideos', url: `${apiEndpoint}/analytics/top-matched-videos/` },
            ];

            try {
                const results = await Promise.all(
                    endpoints.map(async ({ key, url }) => {
                        try {
                            const response = await axios.get(url);
                            console.log(`Response for ${key}:`, response.data); // Log the response

                            // Access the nested array if needed
                            let data = response.data;
                            if (key === 'topMatchedAudios' || key === 'topMatchedVideos') {
                                data = response.data[`top_matched_${key === 'topMatchedAudios' ? 'audios' : 'videos'}`];
                            }

                            return { key, data, error: null };
                        } catch (error) {
                            console.error(`Error fetching data for ${key}:`, error);
                            return { key, data: null, error: 'Error fetching data' };
                        }
                    })
                );

                const newData = results.reduce((acc, { key, data }) => {
                    acc[key as keyof AnalyticsCards] = data;
                    return acc;
                }, {} as AnalyticsCards);

                setData(newData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };


        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <CircularProgress />
            </div>
        );
    }

    const renderCard = (title: string, value: number | string | null) => (
        <div className='px-12 py-8 rounded-2xl bg-[#f8f8f8] drop-shadow-xl'>
            <p className='py-4'>{title}</p>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center justify-center flex-col'>{value}</p>
            </div>
        </div>
    );

    const renderList = (items: TopMatchedItem[] | null, type: string) => {
        if (!Array.isArray(items)) return null;
        const colors = ['bg-amber-100', 'bg-green-100', 'bg-blue-100'];
        return (
            <div className='flex flex-col items-start bg-[#f8f8f8] drop-shadow-md p-8 rounded-lg'>
                <h3>Top 3 most matched {type}</h3>
                {items.slice(0, 3).map((item, index) => (
                    <div key={item.id} className='flex items-center justify-center my-4 gap-4'>
                        <div className={`w-11 h-10 ${colors[index]} flex items-center justify-center rounded-lg`}>
                            <h1>{index + 1}</h1>
                        </div>
                        <div className='flex flex-col items-start justify-start'>
                            <p>{item.file_name}</p>
                            <p className='text-sm text-gray-500'>{item.duration_seconds} seconds</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    };


    const totalRequestsPerMonth = data.totalRequestsPerMonth
        ? Object.values(data.totalRequestsPerMonth).reduce((a, b) => a + b, 0)
        : 'N/A';

    const overallTotalRequests = data.overallTotalRequests ? data.overallTotalRequests.total_requests : 'N/A';
    const findRequestsToday = data.findRequestsToday ? data.findRequestsToday.find_requests_today.length : 'N/A';
    const averageWeeklyRequests = data.averageWeeklyRequests ? (Math.round(data.averageWeeklyRequests.average_requests_per_week * 100) / 100).toFixed(2) : 'N/A';
    const failedRequests = data.failedRequests ? data.failedRequests.failed_requests.length : 'N/A';

    return (
        <div className='w-full xl:mb-20'>
            <RequestsPerMonthChart data={data.totalRequestsPerMonth}/>
            <div className='grid grid-cols-1 xl:grid-cols-4 gap-4 justify-between pt-12'>
                {/*{renderCard('Total Requests Per Month', totalRequestsPerMonth)}*/}
                {renderCard('Overall Total Requests', overallTotalRequests)}
                {renderCard('Requests Today', findRequestsToday)}
                {renderCard('Weekly Requests', averageWeeklyRequests)}
                {renderCard('Failed Requests', failedRequests)}
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-4 justify-between my-8'>
                {renderList(data.topMatchedAudios, 'songs')}
                {renderList(data.topMatchedVideos, 'videos')}
            </div>

        </div>
    );
};

export default AnalyticsDashboard;
