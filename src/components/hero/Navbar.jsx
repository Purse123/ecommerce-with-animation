import React from 'react'
import right from '../../../public/right.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Navbar flex justify-between items-center px-28 h-20 border-b-w-0.5 border-slate-300 bg-transparent'>
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
              transform: 'rotate(90deg)'
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
      <div className="contact flex gap-5 h-full items-center">
        <h2>9810130063</h2>
        <button className='border-w-0.5 border-orange-1 px-3 py-2 rounded-3xl'>CONTACT US</button>
      </div>
    </div>
  )
}

export default Navbar