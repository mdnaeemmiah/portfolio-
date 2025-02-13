'use client';

import Image from 'next/image';
import pic1 from "@/assets/images/pic1.png"
import pic2 from "@/assets/images/pic13.jpg"
import pic3 from "@/assets/images/pic14.png"
import pic4 from "@/assets/images/pic6.png"
import pic5 from "@/assets/images/pic7.jpg"
import pic6 from "@/assets/images/pic6.png"
import pic7 from "@/assets/images/pic7.jpg"
import pic8 from "@/assets/images/pic8.png"
import pic9 from "@/assets/images/pic9.png"
import pic10 from "@/assets/images/pic10.jpg"
import pic11 from "@/assets/images/pic11.jpg"
import pic12 from "@/assets/images/pic12.png"
import pic13 from "@/assets/images/pic13.jpg"
import pic14 from "@/assets/images/pic14.png"
import pic15 from "@/assets/images/pic15.jpg"
import pic16 from "@/assets/images/pic16.jpg"
import pic17 from "@/assets/images/pic17.jpg"
import pic18 from "@/assets/images/pic19.png"
import pic19 from "@/assets/images/pic20.png"
import pic20 from "@/assets/images/pic21.jpg"
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Pet Bed Large',
    title: 'Comfortable Sleeping Space',
    description: 'A large and cozy bed for your pet to rest and relax in comfort.',
    image: pic1,
  },
  {
    id: 2,
    name: 'Pet Carrier',
    title: 'Travel Friendly',
    description: 'Perfect for safe and easy transportation of your pet on trips.',
    image: pic2,
  },
  {
    id: 3,
    name: 'Pet Food Bowl',
    title: 'Durable and Easy to Clean',
    description: 'A non-slip, easy-to-clean bowl for your pet’s food or water.',
    image: pic3,
  },
  {
    id: 4,
    name: 'Dog Leash',
    title: 'Perfect for Walks',
    description: 'A strong and comfortable leash for daily walks with your dog.',
    image: pic4,
  },
  {
    id: 5,
    name: 'Cat Toy',
    title: 'Interactive Fun',
    description: 'Engage your cat with this fun, interactive toy to keep them active.',
    image: pic5,
  },
  {
    id: 6,
    name: 'Dog Collar',
    title: 'Stylish and Secure',
    description: 'A comfortable and stylish collar for your dog’s daily wear.',
    image: pic6,
  },
  {
    id: 7,
    name: 'Pet Shampoo',
    title: 'Gentle and Effective',
    description: 'A gentle shampoo to keep your pet clean and smelling fresh.',
    image: pic7,
  },
  {
    id: 8,
    name: 'Pet Bed Small',
    title: 'Cozy Resting Spot',
    description: 'A small, soft bed designed for smaller pets to enjoy a restful nap.',
    image: pic8,
  },
  {
    id: 9,
    name: 'Pet Carrier Small',
    title: 'Compact and Travel Ready',
    description: 'A small, convenient carrier for easy travel with your smaller pet.',
    image: pic9,
  },
  {
    id: 10,
    name: 'Pet Sweater',
    title: 'Cozy and Warm',
    description: 'Keep your pet warm and stylish during chilly weather.',
    image: pic10,
  },
  {
    id: 11,
    name: 'Pet Brush',
    title: 'For Healthy Fur',
    description: 'A gentle brush to keep your pet’s coat healthy and shiny.',
    image: pic11,
  },
  {
    id: 12,
    name: 'Cat Scratching Post',
    title: 'Essential for Cats',
    description: 'A sturdy scratching post to keep your cat’s claws healthy and sharp.',
    image: pic12,
  },
  {
    id: 13,
    name: 'Pet Towel',
    title: 'Quick Drying',
    description: 'A soft, quick-drying towel to keep your pet dry after a bath.',
    image: pic13,
  },
  {
    id: 14,
    name: 'Pet Water Bottle',
    title: 'Hydration on the Go',
    description: 'A portable water bottle to keep your pet hydrated during outdoor activities.',
    image: pic14,
  },
  {
    id: 15,
    name: 'Pet Harness',
    title: 'Comfortable Fit',
    description: 'A comfortable and adjustable harness for outdoor walks.',
    image: pic15,
  },
  {
    id: 16,
    name: 'Pet Toothbrush',
    title: 'For Dental Health',
    description: 'A gentle toothbrush for maintaining your pet’s dental hygiene.',
    image: pic16,
  },
  {
    id: 17,
    name: 'Cat Food Bowl',
    title: 'Non-Slip Design',
    description: 'A sturdy and non-slip food bowl designed for your cat’s meals.',
    image: pic17,
  },
  {
    id: 18,
    name: 'Pet Treats',
    title: 'Healthy & Tasty',
    description: 'Delicious and nutritious treats to reward your pet.',
    image: pic18,
  },
  {
    id: 19,
    name: 'Pet Blanket',
    title: 'Soft and Snuggly',
    description: 'A cozy blanket to keep your pet warm and comfortable.',
    image: pic19,
  },
  {
    id: 20,
    name: 'Pet Playpen',
    title: 'Safe and Secure',
    description: 'A portable playpen for your pet to play safely indoors or outdoors.',
    image: pic20,
  },
];

export default function Cart() {
  const [showAll, setShowAll] = React.useState(false);

  const handleSeeMoreClick = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Pet Care Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.slice(0, showAll ? products.length : 6).map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={150}
              height={150}
              className="rounded-lg"
            />
            <h3 className="text-lg font-semibold text-teal-600 mt-2">{product.name}</h3>
            <p className="text-sm text-gray-500 font-medium">{product.title}</p>
            <p className="text-gray-700 mt-1 text-center">{product.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          onClick={handleSeeMoreClick}
          className="bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-[#C51963] hover:scale-105 transform transition duration-300"
        >
          {showAll ? 'See Less' : 'See More'}
        </button>
      </div>
    </div>
  );
}
