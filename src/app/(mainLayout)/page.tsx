
import Banner from '@/components/home/Banner';
import Cart from '@/components/home/Cart';
import Carousal from '@/components/home/carousal';
import React from 'react';

const HomePage = () => {

 
  return (
    <div className='text-center  mt-28 '>
      <Banner></Banner>
      <Cart></Cart>
      <Carousal></Carousal>
    </div>
  );
};

export default HomePage;