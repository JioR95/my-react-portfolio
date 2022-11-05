import React,{useState} from 'react'
import {FaBars, FaTimes, FaFacebook } from 'react-icons/fa'
import Logo from '../assets/My logo-1.png'

const NavBar = () => {
    const [nav, setNav]=useState(false)
    const handleclick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#070808] text-red-600 '>
        <div>
            <img src={Logo} alt="Logo" style={{ width: '100px'}} />
        </div>

        {/*menu */}
        
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About Me</li>
                <li>Portfolio</li>
                <li>Contact Me</li>
            </ul>

        {/*hamburger*/}


        <div onClick={handleclick} className='md:hidden z-10'>
           {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/*mobilemenu*/}
        
       
        <ul className={!nav ?'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl '>Home</li>
                <li className='py-6 text-4xl '>About Me</li>
                <li className='py-6 text-4xl '>Portfolio</li>
                <li className='py-6 text-4xl '>Contact Me</li>
            </ul>

            {/*socialicons*/}

            <div className='flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center '>
                        <a className ='flex justify-between items-center'href='/'>
                            Linkedin <FaFacebook size={30}/>
                        </a>
                    </li>
                </ul>

            </div>
    </div>
  )
}

export default NavBar