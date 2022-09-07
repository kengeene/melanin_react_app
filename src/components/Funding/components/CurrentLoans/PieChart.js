import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Loan Balance', 'Amount Repaid'],
  datasets: [
    {
      label: 'Loan Amounts',
      data: [1900000, 2100000],
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
