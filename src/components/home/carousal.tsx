"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import img1 from '@/assets/images/pict1.jpg';
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
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4">
        Welcome to Our Project Showcase
      </h1>
      <div className="carousel-container">
        <Slider {...settings}>
          {carouselData.map((item, index) => (
            <div key={index} className="carousel-slide">
              {/* Project Name */}
              <h2 className="text-center text-xl font-semibold text-blue-600 mb-2">
                {item.projectName}
              </h2>

              {/* Slide Image */}
              <Image
                src={item.image}
                alt={item.projectName}
                className="carousel-image w-full h-[500px] object-cover"
                width={1200}
                height={500}
              />

              {/* Slide Title */}
              <h3 className="carousel-title">{item.title}</h3>

              {/* Slide Description */}
              <p className="carousel-description">{item.description}</p>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .carousel-container {
          width: 100%;
          max-width: 1200px;
          margin: auto;
          padding: 20px;
        }

        .carousel-slide {
          text-align: center;
        }

        .carousel-image {
          border-radius: 8px;
        }

        .carousel-title {
          font-size: 24px;
          margin-top: 10px;
          font-weight: bold;
        }

        .carousel-description {
          font-size: 16px;
          margin-top: 5px;
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default Carousal;
