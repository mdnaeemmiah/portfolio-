'use client';

import Image from 'next/image';
import pic1 from "@/assets/images/pic1.png"
import pic2 from "@/assets/images/pic13.jpg"
import pic3 from "@/assets/images/pic14.png"
import pic4 from "@/assets/images/pic6.png"
import pic5 from "@/assets/images/pic7.jpg"

const products = [
  {
    id: 1,
    name: 'Product One',
    title: 'Awesome Item',
    description: 'This is a great product that you will love.',
    image: pic1,
  },
  {
    id: 2,
    name: 'Product Two',
    title: 'Fantastic Item',
    description: 'This is another great product worth buying.',
    image: pic2,
  },
  {
    id: 3,
    name: 'Product Three',
    title: 'Superb Item',
    description: 'An amazing product with excellent features.',
    image: pic3,
  },
  {
    id: 4,
    name: 'Product One',
    title: 'Awesome Item',
    description: 'This is a great product that you will love.',
    image: pic4,
  },
  {
    id: 5,
    name: 'Product Two',
    title: 'Fantastic Item',
    description: 'This is another great product worth buying.',
    image: pic5,
  },
  {
    id: 6,
    name: 'Product Three',
    title: 'Superb Item',
    description: 'An amazing product with excellent features.',
    image: pic1,
  },
];

export default function Cart() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">I am familir with Technology</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
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
    </div>
  );
}
