'use client';

import Image from 'next/image';
import pic1 from "@/assets/images/pic1.png";
import pic2 from "@/assets/images/pic2.jpg";
import pic3 from "@/assets/images/pic5.jpg";
import pic4 from "@/assets/images/pic6.png";
import pic5 from "@/assets/images/pic7.jpg";
import pic6 from "@/assets/images/pic4.png";
import pic7 from "@/assets/images/pic7.jpg";
import pic8 from "@/assets/images/pic8.png";
import pic9 from "@/assets/images/pic9.png";
import pic10 from "@/assets/images/pic10.jpg";
import pic11 from "@/assets/images/pic11.jpg";
import pic12 from "@/assets/images/pic12.png";
import pic13 from "@/assets/images/pic13.jpg";
import pic14 from "@/assets/images/pic14.png";
import pic15 from "@/assets/images/pic15.jpg";
import pic16 from "@/assets/images/pic16.jpg";
import pic17 from "@/assets/images/pic17.jpg";
import pic18 from "@/assets/images/pic19.png";
import pic19 from "@/assets/images/pic20.png";
import pic20 from "@/assets/images/pic21.jpg";
import React from 'react';

const products = [
  { id: 1, name: 'HTML', title: 'Building Blocks of Web', description: 'The foundation of web structure and content.', image: pic1 },
  { id: 2, name: 'CSS', title: 'Styling the Web', description: 'Enhance user experience with beautiful designs.', image: pic2 },
  { id: 3, name: 'REDUX', title: 'State Management', description: 'Manage application state efficiently.', image: pic3 },
  { id: 4, name: 'C', title: 'Powerful Programming', description: 'A versatile and efficient programming language.', image: pic4 },
  { id: 5, name: 'EXPRESS', title: 'Backend Framework', description: 'Minimalist web framework for Node.js.', image: pic5 },
  { id: 6, name: 'TYPESCRIPT', title: 'Typed JavaScript', description: 'Enhance JS with static typing and better tooling.', image: pic6 },
  { id: 7, name: 'NODE.Js', title: 'JavaScript Runtime', description: 'Run JavaScript on the server-side.', image: pic7 },
  { id: 8, name: 'REACT', title: 'Component-Based UI', description: 'Build dynamic user interfaces efficiently.', image: pic8 },
  { id: 9, name: 'NEXT.Js', title: 'Server-Side Rendering', description: 'Optimized React framework for production.', image: pic9 },
  { id: 10, name: 'NEXT AUTH', title: 'Authentication Simplified', description: 'Secure and easy authentication for Next.js.', image: pic10 },
  { id: 11, name: 'FIREBASE', title: 'Backend as a Service', description: 'Realtime database and authentication solution.', image: pic11 },
  { id: 12, name: 'CORS', title: 'Cross-Origin Requests', description: 'Secure communication between different origins.', image: pic12 },
  { id: 13, name: '.ENV', title: 'Environment Variables', description: 'Manage sensitive configuration data.', image: pic13 },
  { id: 14, name: 'NETLIFY', title: 'Deploy with Ease', description: 'Hosting platform for modern web applications.', image: pic14 },
  { id: 15, name: 'VERCEL', title: 'Frontend Deployment', description: 'Optimized hosting for Next.js applications.', image: pic15 },
  { id: 16, name: 'VISUAL CODE', title: 'Code Editor', description: 'A powerful editor for coding efficiently.', image: pic16 },
  { id: 17, name: 'CLOUDINARY', title: 'Image Management', description: 'Store, optimize, and deliver media assets.', image: pic17 },
  { id: 18, name: 'PAYMENT', title: 'Online Transactions', description: 'Secure and seamless online payment solutions.', image: pic18 },
  { id: 19, name: 'SHURJOPAY', title: 'Payment Gateway', description: 'A reliable payment gateway for transactions.', image: pic19 },
  { id: 20, name: 'EXPRESS', title: 'Fast Backend Framework', description: 'A powerful web framework for Node.js.', image: pic20 },
];

export default function Cart() {
  const [showAll, setShowAll] = React.useState(false);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Technology Stack</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, showAll ? products.length : 6).map((product) => (
          <div key={product.id} className=" shadow-lg rounded-lg p-4 flex flex-col items-center">
            <Image src={product.image} alt={product.name} width={150} height={150} className="rounded-lg" />
            <h3 className="text-lg font-semibold  mt-2">{product.name}</h3>
            <p className="text-sm  font-medium">{product.title}</p>
            <p className="mt-1 text-center">{product.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button onClick={() => setShowAll(!showAll)} className="text-white py-2 px-4 rounded-md font-semibold bg-[#C51963] hover:bg-[#C51963]/90 hover:scale-105 transform transition duration-300">
          {showAll ? 'See Less' : 'See More'}
        </button>
      </div>
    </div>
  );
}
