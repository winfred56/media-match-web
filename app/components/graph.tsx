import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface Props {
    data: { [key: string]: number } | null;
}

const RequestsPerMonthChart: React.FC<Props> = ({ data }) => {
    if (!data) return null;

    const labels = Object.keys(data);
    const values = Object.values(data);

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Requests Per Month',
                data: values,
                borderColor: '#5550FF',
                backgroundColor: 'rgba(30,81,211,0.2)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Total Requests Per Month',
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default RequestsPerMonthChart;