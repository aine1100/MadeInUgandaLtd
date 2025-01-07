import { FC } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement, // Required for Doughnut chart
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const SalesChart: FC = () => {
  // Data for the Line chart
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales Income',
        data: [700, 5500, 6000, 5000, 6500, 750, 80, 900, 850, 700, 600, 950],
        borderColor: "#228B22",
        backgroundColor: 'rgba(52, 152, 219, 0.2)',
        fill: true,
        tension: 0.4,
        pointBorderColor: '#3498db',
        pointBackgroundColor: '#fff',
        pointRadius: 0,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.raw}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Amount Paid ($)',
        },
        grid: {
          display: false,
        },
      },
      x: {
        title: {
          display: true,
          text: 'Months',
        },
        grid: {
          display: false,
        },
      },
    },
  };

  // Data for the Doughnut chart
  const doughnutData = {
    labels: ['Fresh', 'Non-Fresh ', 'Handcrafted ', 'Exported '],
    datasets: [
      {
        data: [3000, 5000, 4000, 2000], // Replace with your data
        backgroundColor: ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6'],
        hoverBackgroundColor: ['#2980b9', '#c0392b', '#27ae60', '#f39c12', '#8e44ad'],
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'right' as const, // Place legend to the right of the chart
      },
    },
  };

  return (
    <div className=" w-full rounded-lg p-6 flex justify-between">
      <div className='flex flex-col justify-between rounded-lg border-[1.5px] border-gray-100 bg-white hover:shadow-md p-10'>
      <h3 className="text-lg font-semibold mb-4">Sales Summary</h3>
      <div className="h-[300px] py-2 flex justify-between gap-6">
        <Line data={lineData} options={lineOptions} />
          
        
      </div>
      </div>
      <div className='flex flex-col justify-between rounded-lg border-[1.5px] border-gray-100 bg-white hover:shadow-md p-10 '>
          <h3 className="text-lg font-semibold ">Products Summary</h3>
          <Doughnut data={doughnutData} options={doughnutOptions}  />
          </div>
        
    </div>
  );
};

export default SalesChart;
