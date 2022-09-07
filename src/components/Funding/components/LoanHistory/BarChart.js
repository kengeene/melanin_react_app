import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    }
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Devember'];

const Data = [50, 80 ,90, 30, 12, 56, 80, 50, 80 ,90, 50, 80];

export const data = {
  labels,
  datasets: [
    {
      label: 'KES',
      data: Data.map(x => x),
      backgroundColor: '#ffab00',
      pointHoverBackgroundColor: '#000000'
    }
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
}

export default BarChart;
