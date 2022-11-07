import React from 'react'
// import coverImage from '../assets/cover/coverImage.png';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#060607] text-red-600'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-white-800'>
                            About
                        </p>
                    </div>
                    <div></div>
                    </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                      <div className='sm:text-right text-4xl font-bold'>
                        <p>Hello. I'm Jiovani, Please take a look around</p>
                        </div>
                        <div>
                           <p>My name is Jiovani Rivera. I am a creative artist who specializes in a wide variety of art.
                                Im a self driven and motivated to succeed in anything I set my mind to.
                                Ive explored the world of coding and found a passion for it due to the wide variety of opportunities in the field.</p>
                        </div>
                    </div>
                </div>
        </div>
        
    );
};

export default About;
