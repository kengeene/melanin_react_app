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
import { faker } from '@faker-js/faker';

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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const chartNumbers = [];
Array.from({ length: 12 }).forEach(() => {
  chartNumbers.push(faker.datatype.number({min: 300000, max: 3000000}));
});

export const data = {
  labels,
  datasets: [
    {
      label: 'KES',
      data: chartNumbers.map(x => x),
      backgroundColor: '#ffab00',
      pointHoverBackgroundColor: '#000000'
    }
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
}

export default BarChart;
