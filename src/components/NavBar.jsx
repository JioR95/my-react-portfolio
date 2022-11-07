import React, {useState} from 'react';
import {FaBars, FaTimes, FaLinkedin} from 'react-icons/fa';
import { TfiEmail, TfiGithub,} from "react-icons/tfi";
import Logo from '../assets/My logo-1.png';
import {Link} from 'react-scroll';

const NavBar = () => {
    const [nav, setNav]=useState(false)
    const handleClick = () => setNav(!nav)
    
  return (
    <div className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#040404] text-red-600 '>
        <div>
            <img src={Logo} alt="Logo" style={{ width: '100px'}} />
        </div>

        {/*menu */}
        
            <ul className='hidden md:flex bg-[#09090977] hover:text-red-500'>
                <li>
                <Link onClick={handleClick} to="Home" smooth={true} duration={500}>
                    Home
                </Link>
                </li>
                <li>
                <Link onClick={handleClick} to="About" smooth={true} duration={500}>
                    About
                </Link>
                </li>
                <li>
                <Link onClick={handleClick} to="Projects" smooth={true} duration={500}>
                    Projects
                </Link>
                </li>
                <li>
                <Link onClick={handleClick} to="Contact" smooth={true} duration={500}>
                    Contact
                </Link>
                </li>
            </ul>

        {/*hamburger*/}


        <div onClick={handleClick} className='md:hidden z-10'>
           {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/*mobilemenu*/}
        
       
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#090909] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl '>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                </Link>
                </li>
                <li className='py-6 text-4xl '>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About 
                </Link>
                </li>
                <li className='py-6 text-4xl '>
                <Link onClick={handleClick} to="project" smooth={true} duration={500}>
                    Projects
                </Link>
                </li>
                <li className='py-6 text-4xl '>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact 
                </Link>
                </li>
            </ul>

            {/*socialicons*/}

            <div className='hidden md:flex fixed flex-col bottom-[35%] left-0'>
                <ul>
                    <li className='w-[165px] h-[55px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#c00c0c] '>
                        <a className ='flex justify-between items-center w-full text-gray-200'
                            href='/'>
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[165px] h-[55px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#5e5e7077] '>
                        <a className ='flex justify-between items-center w-full text-gray-200'
                            href='/'>
                            Github <TfiGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[165px] h-[55px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#5e5e7077] '>
                        <a className ='flex justify-between items-center w-full text-gray-200'
                            href='/'>
                             Email <TfiEmail size={30}/>
                        </a>
                    </li>
                </ul>

            </div>
    </div>
  );
};

export default NavBar;