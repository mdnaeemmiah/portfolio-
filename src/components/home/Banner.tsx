// 
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import img from '../../assets/images/photo_2023-09-14_16-42-04 (2).jpg';
import { DownloadIcon, Eye } from "lucide-react";


const titles = [
  "Naeem",
  "Web Developer",
  "MERN Stack Developer",
  "Software Engineer",
];

export default function Banner() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentTitle.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentTitle.length) {
        // Wait before starting to delete
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTitleIndex]);

  return (
    <section className="w-full dark:bg-gray-900 py-12 px-6 md:px-16 flex flex-col md:flex-row items-center gap-8 md:gap-16">
      {/* Left Side - Profile Info */}
      <div className="flex  flex-col items-center md:items-start text-center md:text-left max-w-sm">
        <Image
          src={img}
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full border-4 border-blue-500 shadow-lg"
        />
        <h1 className="text-3xl font-bold mt-4">I am</h1>
        <h2 className="text-xl w-32 text-[#C51963] min-h-[1.5rem] font-mono whitespace-nowrap">
          {displayText}
          <span className="animate-pulse">|</span>
        </h2>
      </div>

      {/* Right Side - About Info */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl font-semibold">Welcome to My Portfolio</h2>
        <p className="mt-4 text-lg leading-relaxed">
          I am a passionate software engineer skilled in web development,
          specializing in modern technologies such as React.js, Next.js,
          TypeScript, and more. I love building efficient and scalable
          applications.
        </p>
        <div className="mt-5 flex gap-4 justify-center md:justify-start">
          <Link href="/contact-us">
            <button className="text-white py-2 px-4 rounded-md font-semibold bg-[#C51963] hover:bg-[#C51963]/90 hover:scale-105 transform transition duration-300">
              Contact Me
            </button>
          </Link>
          <Link href="/resume">
            <button className="text-white py-2 px-4 rounded-md font-semibold bg-[#C51963] hover:bg-[#C51963]/90 hover:scale-105 transform transition duration-300">
              Resume
            </button>
          </Link>
           {/* Preview Resume */}
            <Link
              href="https://docs.google.com/document/d/1u5UZBHIecxEikRcAQWfTK8_rSAovM9d5/edit?usp=drive_link&ouid=107296665174850575619&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-yellow-700 via-orange-600 to-red-500 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Eye
                size={20}
                className="transition-transform duration-300 group-hover:rotate-6"
              />
              <span className="font-medium">Preview Resume</span>
            </Link>

            {/* Download Resume */}
            <a
              href="https://docs.google.com/document/d/1u5UZBHIecxEikRcAQWfTK8_rSAovM9d5/edit?usp=drive_link&ouid=107296665174850575619&rtpof=true&sd=true"
              download
              className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <DownloadIcon
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
              <span className="font-medium">Download Resume</span>
            </a>
        </div>
      </div>
    </section>
  );
}
