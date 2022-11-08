import React from 'react';
import {FaLinkedin} from 'react-icons/fa';
import { TfiEmail, TfiGithub,} from "react-icons/tfi";

const Footer = () => {
  return (
    <div>
        <footer className='bg-black text-white text-center'>
        <div>
            <h3 className='font-bold text-xl border-b-2 border-[#d92323] inline-block '>JioR95</h3>
            </div>
            <div className=' flex px-4 md:flex justify-center  text-center'>
                <FaLinkedin />
                <TfiEmail />
                <TfiGithub />
            </div> 
        </footer>
    </div>
  );
};

export default Footer;