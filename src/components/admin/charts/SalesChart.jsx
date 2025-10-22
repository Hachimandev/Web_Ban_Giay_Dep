// @ts-nocheck
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const data = {
    labels,
    datasets: [
        {
            label: 'Doanh thu (triệu VNĐ)',
            data: [150, 240, 200, 320, 300, 400, 350, 410, 380, 450, 430, 480],
            borderColor: '#F97316',
            backgroundColor: 'rgba(249, 115, 22, 0.2)',
            fill: false,
            tension: 0.3,
            pointBackgroundColor: '#F97316',
            pointBorderColor: '#fff',
            pointHoverRadius: 7,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
            align: 'end',
        },
        title: {
            display: true,
            text: 'Doanh thu theo tháng',
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
    scales: {
        y: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Doanh thu (triệu VNĐ)',
            },
        },
    },
};

const SalesChart = () => {
    return (
        <div style={{ height: '350px' }}>
            <Line options={options} data={data} />
        </div>
    );
};

export default SalesChart;