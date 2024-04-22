// Dashboard.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const Dashboard = () => {
  // Fetch user profile data or generate mock data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Profile Trends',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div style={{width: '600px', height: '400px'}}>
        <Line data={data} />
      </div>
    </div>
  );
}

export default Dashboard;
