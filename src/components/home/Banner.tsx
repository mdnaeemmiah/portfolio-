'use client';

import Image from 'next/image';
import img from "../../assets/images/photo_2023-09-14_16-42-04 (2).jpg"
import Link from 'next/link';

export default function Banner() {
  return (
    <section className="w-full bg-gray-100 py-12 px-6 md:px-16 flex flex-col md:flex-row items-center gap-8 md:gap-16">
      {/* Left Side - Profile Info */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm">
        <Image 
          src={img} 
          alt="Profile Picture" 
          width={150} 
          height={150} 
          className="rounded-full border-4 border-blue-500 shadow-lg"
        />
        <h1 className="text-3xl text-teal-600 font-bold mt-4">Naeem</h1>
        <p className="text-lg text-gray-600">Software Engineer</p>
      </div>
      
      {/* Right Side - About Info */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl font-semibold text-gray-800">Welcome to My Portfolio</h2>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          I am a passionate software engineer skilled in web development, specializing in modern technologies such as
          React.js, Next.js, TypeScript, and more. I love building efficient and scalable applications.
        </p>
        <div className="mt-5 space-y-4">
          <Link href='/contact-us'>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-[#C51963] hover:scale-105 transform transition duration-300">
              Contact Me
            </button>
          </Link>
          <Link href='/resume'>
            <button className="bg-blue-600 ml-5 text-white py-2 px-4 rounded-md font-semibold hover:bg-[#C51963] hover:scale-105 transform transition duration-300">
              Resume 
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
