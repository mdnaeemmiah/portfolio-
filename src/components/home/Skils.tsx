"use client";


import Image from "next/image";

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

const skills = [
  { id: 1, name: "HTML", title: "Building Blocks of Web", description: "The foundation of web structure and content.", image: pic1 },
  { id: 2, name: "CSS", title: "Styling the Web", description: "Enhance user experience with beautiful designs.", image: pic2 },
  { id: 3, name: "REDUX", title: "State Management", description: "Manage application state efficiently.", image: pic3 },
  { id: 4, name: "C", title: "Powerful Programming", description: "A versatile and efficient programming language.", image: pic4 },
  { id: 5, name: "EXPRESS", title: "Backend Framework", description: "Minimalist web framework for Node.js.", image: pic5 },
  { id: 6, name: "TYPESCRIPT", title: "Typed JavaScript", description: "Enhance JS with static typing and better tooling.", image: pic6 },
  { id: 7, name: "NODE.Js", title: "JavaScript Runtime", description: "Run JavaScript on the server-side.", image: pic7 },
  { id: 8, name: "REACT", title: "Component-Based UI", description: "Build dynamic user interfaces efficiently.", image: pic8 },
  { id: 9, name: "NEXT.Js", title: "Server-Side Rendering", description: "Optimized React framework for production.", image: pic9 },
  { id: 10, name: "NEXT AUTH", title: "Authentication Simplified", description: "Secure and easy authentication for Next.js.", image: pic10 },
  { id: 11, name: "FIREBASE", title: "Backend as a Service", description: "Realtime database and authentication solution.", image: pic11 },
  { id: 12, name: "CORS", title: "Cross-Origin Requests", description: "Secure communication between different origins.", image: pic12 },
  { id: 13, name: ".ENV", title: "Environment Variables", description: "Manage sensitive configuration data.", image: pic13 },
  { id: 14, name: "NETLIFY", title: "Deploy with Ease", description: "Hosting platform for modern web applications.", image: pic14 },
  { id: 15, name: "VERCEL", title: "Frontend Deployment", description: "Optimized hosting for Next.js applications.", image: pic15 },
  { id: 16, name: "VISUAL CODE", title: "Code Editor", description: "A powerful editor for coding efficiently.", image: pic16 },
  { id: 17, name: "CLOUDINARY", title: "Image Management", description: "Store, optimize, and deliver media assets.", image: pic17 },
  { id: 18, name: "PAYMENT", title: "Online Transactions", description: "Secure and seamless online payment solutions.", image: pic18 },
  { id: 19, name: "SHURJOPAY", title: "Payment Gateway", description: "A reliable payment gateway for transactions.", image: pic19 },
  { id: 20, name: "EXPRESS", title: "Fast Backend Framework", description: "A powerful web framework for Node.js.", image: pic20 },
];

const Skils = () => {
  return (
    <div className="w-full  py-8 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Explore My Skills</h2>
      <div className="w-72 h-1 bg-green-500 mx-auto mb-6"></div>

      {/* Scrolling skills */}
      <div className="overflow-hidden w-full relative">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {[...skills, ...skills].map((skill) => (
            <div
              key={skill.id}
              className="w-64 h-64  shadow-lg rounded-xl p-4 flex flex-col items-center justify-center 
                         transition transform hover:scale-105"
            >
              <Image src={skill.image} alt={skill.name} width={80} height={80} className="rounded-md" />
              <h3 className="text-lg font-bold mt-2 text-gray-800">{skill.name}</h3>
              <p className="text-sm text-gray-600">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skils;
