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
    <section className="section mt-10 relative overflow-hidden rounded-[32px] border border-white/60 bg-white/70 px-6  shadow-[0_30px_70px_-40px_rgba(15,23,42,0.5)] sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-[#f2c6a0]/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-60 w-60 rounded-full bg-[#bcd7e6]/40 blur-3xl" />

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Left Side - Profile Info */}
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <div className="rounded-full border border-white/70 bg-white/80 p-2 shadow-lg">
            <Image
              src={img}
              alt="Profile"
              width={180}
              height={180}
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <p className="section-kicker">Software Engineer</p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Designing calm, scalable digital experiences.
            </h1>
            <div className="mt-3 flex items-center justify-center gap-2 text-lg font-semibold text-[#c27a52] lg:justify-start">
              <span>I am</span>
              <span className="min-h-[1.5rem] font-mono">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - About Info */}
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-3xl font-semibold sm:text-4xl">Welcome to my portfolio</h2>
          <p className="text-base leading-relaxed text-slate-600">
            I craft modern web products with React, Next.js, TypeScript, and clean UX
            patterns. My focus is on thoughtful interfaces, performance, and clear
            storytelling for brands and startups.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link
              href="https://drive.google.com/file/d/1j1Np_EbpoxvySvgkHcJCCSOfSUzxbmuX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              <Eye size={18} className="transition-transform duration-300 group-hover:rotate-6" />
              Preview Resume
            </Link>
            <a
              href="https://drive.google.com/uc?export=download&id=1j1Np_EbpoxvySvgkHcJCCSOfSUzxbmuX"
              download
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/70 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300"
            >
              <DownloadIcon size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              Download CV
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em] text-slate-500">
            <span>UI Engineering</span>
            <span>Product Design</span>
            <span>Full Stack</span>
          </div>
        </div>
      </div>
    </section>
  );
}
