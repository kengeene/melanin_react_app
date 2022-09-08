import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(ArcElement, Tooltip, Legend);

const chartNumbers = [];
Array.from({ length: 2 }).forEach(() => {
  chartNumbers.push(faker.datatype.number({min: 300000, max: 3000000}));
});

export const data = {
  labels: ['Loan Balance', 'Amount Repaid'],
  datasets: [
    {
      label: 'Loan Amounts',
      data: chartNumbers,
      backgroundColor: [
        '#e4e4e4',
        '#ffab00',
      ],
      borderColor: [
        '#e4e4e4',
        '#ffab00',
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return <Pie data={data} />;
};

export default PieChart;
