import React from 'react'
import transition from '../../transition'
import Hero from '../hero/Hero';

const Home = () => {
  return (
    <>
      <Hero />
      <div className='h-screen'></div>
    </>
  )
}

export default transition(Home);