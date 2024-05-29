import React, { useEffect, useState } from 'react'
import right from '/right.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [hover, setHover] = useState(false);

  const bgChange = () => {
    if (window.scrollY >= 500) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }
  useEffect(() => {

  window.addEventListener('scroll', bgChange);
    return () => {
      window.removeEventListener('scroll', bgChange);
    };
  }, [])

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={
        hover ? 
          'Navbar flex justify-between items-center px-28 h-20 border-b-w-0.5 border-slate-300 bg-white text-black transition-colors duration-500 ease-in-out fixed w-full top-0 left-0' :
          (navbar ?
            'Navbar flex justify-between items-center px-28 h-20 border-b-w-0.5 border-slate-300 bg-white text-black transition-colors duration-500 ease-in-out sticky top-0 left-0' :
            'Navbar w-full flex justify-between items-center px-28 h-20 border-b-w-0.5 border-slate-300 fixed top-0 left-0 bg-transparent transition-colors duration-500 ease-in-out'
          )
    }>
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