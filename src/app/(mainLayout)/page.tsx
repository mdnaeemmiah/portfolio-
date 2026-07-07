
import About from '@/components/home/About';
import Banner from '@/components/home/Banner';
import Blog from '@/components/home/Blog';
// import Cart from '@/components/home/Cart';
import Skils from '@/components/home/Skils';
import Carousal from '@/components/home/carousal';
import React from 'react';

const HomePage = () => {

 
  return (
    <div className="space-y-24 pb-24">
      <Banner />
      <Skils />
      <About />
      <Carousal />
      <Blog />
    </div>
  );
};

export default HomePage;