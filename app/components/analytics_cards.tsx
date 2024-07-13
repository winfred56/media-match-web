'use client'
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {apiEndpoint} from "@/app/components/api_endpoint";

interface AnalyticsCards {
  totalRequestsPerMonth: { [key: string]: number } | null;
  overallTotalRequests: number | null;
  findRequestsToday: any[] | null;
  findRequestsLastWeek: any[] | null;
  addRequestsThisWeek: any[] | null;
  failedRequests: any[] | null;
  averageWeeklyRequests: number | null;
  topMatchedAudios: { file_name: string, count: number }[] | null;
  topMatchedVideos: { file_name: string, count: number }[] | null;
}

const Analytics_cards: React.FC = () => {
  const [data, setData] = useState<AnalyticsCards>({
    totalRequestsPerMonth: null,
    overallTotalRequests: null,
    findRequestsToday: null,
    findRequestsLastWeek: null,
    addRequestsThisWeek: null,
    failedRequests: null,
    averageWeeklyRequests: null,
    topMatchedAudios: null,
    topMatchedVideos: null,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({
    totalRequestsPerMonth: null,
    overallTotalRequests: null,
    findRequestsToday: null,
    findRequestsLastWeek: null,
    addRequestsThisWeek: null,
    failedRequests: null,
    averageWeeklyRequests: null,
    topMatchedAudios: null,
    topMatchedVideos: null,
  });

  useEffect(() => {
    const fetchData = async () => {

      const endpoints = [
        { key: 'totalRequestsPerMonth', url: `${apiEndpoint}/analytics/requests-per-month/` },
        { key: 'overallTotalRequests', url: `${apiEndpoint}/analytics/total-requests-current-year/` },
        { key: 'findRequestsToday', url: `${apiEndpoint}/analytics/find-requests-today/` },
        { key: 'findRequestsLastWeek', url: `${apiEndpoint}/analytics/find-requests-last-week/` },
        { key: 'addRequestsThisWeek', url: `${apiEndpoint}/analytics/add-requests-this-week/` },
        { key: 'failedRequests', url: `${apiEndpoint}/analytics/failed-requests/` },
        { key: 'averageWeeklyRequests', url: `${apiEndpoint}/analytics/average-requests-per-week/` },
        { key: 'topMatchedAudios', url: `${apiEndpoint}/analytics/top-matched-audios/` },
        { key: 'topMatchedVideos', url: `${apiEndpoint}/analytics/top-matched-videos/` },
      ];

      const results = await Promise.all(
        endpoints.map(async ({ key, url }) => {
          try {
            const response = await axios.get(url);
            return { key, data: response.data, error: null };
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

      const newErrors = results.reduce((acc, { key, error }) => {
        acc[key] = error;
        return acc;
      }, {} as { [key: string]: string | null });

      setData(newData);
      setErrors(newErrors);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
      <div className={`w-full`}>
        <div className={`grid grid-cols-1 xl:grid-cols-3 gap-8 justify-between pt-12`}>
          <div className={`px-12 py-8 rounded-2xl bg-[#f8f8f8] drop-shadow-xl`}>
            <p className={`py-4 text-`}>Daily requests</p>
            <div className={`flex flex-col items-center justify-center`}>
              <p className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center justify-center flex-col`}>13</p>
            </div>
          </div>
          <div className={`px-12 py-8 rounded-2xl bg-[#f8f8f8] drop-shadow-xl`}>
            <p className={`py-4 text-`}>Daily requests</p>
            <div className={`flex flex-col items-center justify-center`}>
              <p className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center justify-center flex-col`}>13</p>
            </div>
          </div>
          <div className={`px-12 py-8 rounded-2xl bg-[#f8f8f8] drop-shadow-xl`}>
            <p className={`py-4 text-`}>Daily requests</p>
            <div className={`flex flex-col items-center justify-center`}>
              <p className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center justify-center flex-col`}>13</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Analytics_cards;
