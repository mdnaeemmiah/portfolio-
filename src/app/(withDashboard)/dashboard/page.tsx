// "use client"
// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// // Registering the necessary chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// function App() {
//   const data = {
//     labels: [
//       'HTML', 'CSS', 'JavaScript', 'Node.js', 'React.js', 
//       'Next.js', 'Express.js', 'CORS', 'MongoDB', 'TypeScript', 'Redux'
//     ],
//     datasets: [
//       {
//         label: 'Importance Level',
//         data: [10, 9, 10, 8, 9, 9, 8, 7, 8, 9, 8], // Adjust these numbers as per your evaluation
//         fill: false,
//         borderColor: 'rgba(75,192,192,1)',
//         tension: 0.1
//       }
//     ]
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       title: {
//         display: true,
//         text: 'Importance of Web Development Technologies'
//       },
//       tooltip: {
//         callbacks: {
//           // eslint-disable-next-line @typescript-eslint/no-explicit-any
//           label: (context: { raw: any }) => {
//             return `Importance: ${context.raw}`;
//           }
//         }
//       }
//     }
//   };

//   return (
//     <div>
//       <h2 className='text-xl text-center'>Web Development Technologies Importance</h2>
//       <Line data={data} options={options} />
//     </div>
//   );
// }

// export default App;



import React from 'react';

const page = () => {
  return (
    <div>
      <h2>dashorard</h2>
    </div>
  );
};

export default page;