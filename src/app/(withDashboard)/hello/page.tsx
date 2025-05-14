"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const data = {
    labels: [
      "HTML", "CSS", "JavaScript", "Node.js", "React.js",
      "Next.js", "Express.js", "CORS", "MongoDB", "TypeScript", "Redux"
    ],
    datasets: [
      {
        label: "Importance Level",
        data: [10, 9, 10, 8, 9, 9, 8, 7, 8, 9, 8],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "white"
        }
      },
      title: {
        display: true,
        text: "Importance of Web Development Technologies",
        color: "white"
      },
      tooltip: {
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: (context: { raw: any }) => `Importance: ${context.raw}`
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: "white"
        },
        grid: {
          color: "rgba(255,255,255,0.1)"
        }
      },
      y: {
        ticks: {
          color: "white"
        },
        grid: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }
  };

  return (
    <div className="text-white p-4 bg-gray-900 rounded-xl">
      <h2 className="text-xl text-center mb-4">Web Development Technologies Importance</h2>
      <Line data={data} options={options} />
    </div>
  );
}

export default App;
