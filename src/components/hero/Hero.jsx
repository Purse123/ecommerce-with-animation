import React from 'react'
import InfiniteScroll from './infiniteScroll/InfiniteScroll';
import video from "/medium.mp4"

const Hero = () => {
  return (
    <div className='hero h-screen w-full'>
      <div className="h-[calc(100vh-150px)] w-full bg-white overflow-hidden">
        <video autoPlay muted loop className='object-cover h-full w-full pointer-events-none z-50' src={video} >
          video not supported
        </video>
      </div>

      <InfiniteScroll/>
    </div>
  )
}

export default Hero;