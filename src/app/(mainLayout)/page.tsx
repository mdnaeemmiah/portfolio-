
import Banner from '@/components/home/Banner';
import Blog from '@/components/home/Blog';
// import Cart from '@/components/home/Cart';
import Skils from '@/components/home/Skils';
import Carousal from '@/components/home/carousal';
import React from 'react';

const HomePage = () => {

 
  return (
    <div className='text-center  mt-28 '>
      <Banner></Banner>
      <Skils></Skils>
      {/* <Cart></Cart> */}
      <Carousal></Carousal>
      <Blog></Blog>
    </div>
  );
};

export default HomePage;