import React from 'react';
import { TfiHandPointRight } from 'react-icons/tfi';

const Home = () => {
  return (
    <div name='home'className='w-full h-screen bg-[#fdfcfb]'>
       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
       <p className='text-[#e40f0f]'>Hello, my name is </p>
       <h1 className='text-4xl sm:text-7xl font-bold text-[#0e0c0c]'>Jiovani Rivera</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#e40f0f]'>Full Stack Developer.</h2>
          <p className='text-[#000000] py-4 max-w-[700px]'> Welcome! Glad you made it here please check me out!
            
          </p>
          <div>
            <button className='text-black group border-2  px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600'>
              View Work
            <span className='group-hover:rotate-90 duration-300'>
              <TfiHandPointRight className='ml-3' />
            </span>
           </button>
          </div>
      </div>
    </div>
  );
};


export default Home;