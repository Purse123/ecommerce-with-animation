import React, { useState } from 'react'
import right from '../../../public/right.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const bgChange = () => {
    if (window.scrollY >= 500) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', bgChange);

  return (
    <div
    className={navbar? 'Navbar flex justify-between items-center px-28 h-20 border-b-w-0.5 border-slate-300  sticky top-0 left-0 bg-white text-black' : 'Navbar w-full flex justify-between items-center px-28 h-20 border-b-w-0.5 border-slate-300 fixed top-0 left-0 bg-transparent'}
    >
      <h1 className='text-3xl'>
        <Link to={"/"}>
          PIERᑕE
        </Link>
      </h1>
      <div className="linker h-full">
        <ul className='flex gap-5 justify-around h-full'>
          <li>
            <Link 
            className='h-full px-2 flex items-center gap-2 cursor-pointer'
            to={"/services"}>
              Services <img src={right} style={{
              height: '15px',
              transform: 'rotate(90deg)',
              }} />
            </Link>
          </li>
          <li>
            <Link 
            className='h-full px-2 flex items-center cursor-pointer' 
            to={"/case-studies"}>
              Case Studies
            </Link>
          </li>
          <li>
            <Link 
            className='h-full px-2 flex items-center cursor-pointer' 
            to={"/about-us"}>
              About Us
            </Link>
          </li>
          <li>
            <Link 
            className='h-full px-2 flex items-center cursor-pointer'
            to={"/blog"}>
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div className="contact flex gap-5 h-full items-center tracking-wide">
        <h2>+977 9810130063</h2>
        <button className={navbar?'border-w-0.5 bg-orange-1 px-3 py-2 rounded-3xl' :'border-w-0.5 border-orange-1 px-3 py-2 rounded-3xl'}>CONTACT US</button>
      </div>
    </div>
  )
}

export default Navbar