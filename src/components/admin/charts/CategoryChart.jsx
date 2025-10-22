// @ts-nocheck
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Giày thể thao', 'Giày công sở', 'Giày cao gót', 'Dép sandal'],
    datasets: [
        {
            label: '% Đơn hàng',
            data: [45.0, 25.0, 20.0, 10.0],
            backgroundColor: [
                '#F97316',
                '#0F172A',
                '#3B82F6',
                '#6B7280',
            ],
            borderColor: [
                '#fff',
            ],
            borderWidth: 2,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Đơn hàng theo danh mục',
            align: 'start',
            font: {
                size: 18,
                weight: 'bold',
            },
            padding: {
                bottom: 20,
            }
        },
    },
};

const CategoryChart = () => {
    return (
        <div style={{ height: '350px' }}>
            <Pie data={data} options={options} />
        </div>
    );
};

export default CategoryChart;