"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const carouselData = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?w=1200&auto=format&fit=crop&q=60",
    projectName: "Business Name",
    title: "Slide 1",
    description: "This is the description for Slide 1.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&auto=format&fit=crop&q=60",
    projectName: "Business Name",
    title: "Slide 2",
    description: "This is the description for Slide 2.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&auto=format&fit=crop&q=60",
    projectName: "Business Name",
    title: "Slide 3",
    description: "This is the description for Slide 3.",
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
        Welcome to the Carousel Example
      </h1>
      <div className="carousel-container">
        <Slider {...settings}>
          {carouselData.map((item, index) => (
            <div key={index} className="carousel-slide">
              {/* Business Name */}
              <h2 className="text-center text-lg font-semibold text-blue-600 mb-2">
                {item.projectName}
              </h2>

              {/* Slide Image */}
              <Image
                src={item.image}
                alt={item.title}
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
