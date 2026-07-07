"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import img1 from '@/assets/images/library-interior-interior-design-books-wallpaper-preview.jpg';
import img2 from '@/assets/images/pict2.jpg';
import img3 from '@/assets/images/pict3.jpg';
import img4 from '@/assets/images/img5.avif';

const carouselData = [
  {
    image: img1,
    projectName: "Library Management",
    title: "Manage Library Resources Efficiently",
    description: "A comprehensive library management system for organizing books, students, and staff.",
  },
  {
    image: img2,
    projectName: "Hospital Management",
    title: "Streamline Hospital Operations",
    description: "A hospital management system to manage patient records, appointments, and staff schedules.",
  },
  {
    image: img3,
    projectName: "School Management",
    title: "Efficient School Administration",
    description: "A school management system that helps manage students, teachers, and administrative tasks.",
  },
  {
    image: img4,
    projectName: "Car Management",
    title: "Manage Fleet of Vehicles",
    description: "A comprehensive system for managing a fleet of cars, including tracking, maintenance, and rental.",
  },
];

const Carousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <section className="section">
      <div className="text-center">
        <p className="section-kicker">Highlights</p>
        <h1 className="section-title mt-3">A quick look at flagship builds.</h1>
      </div>
      <div className="mx-auto mt-10 w-full max-w-5xl">
        <Slider {...settings}>
          {carouselData.map((item, index) => (
            <div key={index} className="px-2">
              <div className="glass-card overflow-hidden p-6 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-[#c27a52]">
                  {item.projectName}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                <Image
                  src={item.image}
                  alt={item.projectName}
                  className="mt-6 h-[420px] w-full rounded-2xl object-cover"
                  width={1200}
                  height={500}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousal;
