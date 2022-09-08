import React from 'react';
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
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const chartNumbers = [];
Array.from({ length: 7 }).forEach(() => {
  chartNumbers.push(faker.datatype.number({min: 300000, max: 3000000}));
});

export const data = {
  labels,
  datasets: [
    {
      label: 'KES',
      data: chartNumbers,
      borderColor: '#fab411',
      backgroundColor: '#fab411',
    }
  ],
};

const LineChart = () =>{
    return (
    <Line options={options} data={data} />
    );
};

export default LineChart;