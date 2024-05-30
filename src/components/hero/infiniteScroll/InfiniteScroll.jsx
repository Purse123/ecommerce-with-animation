import React from 'react'
import { logos } from './data'

function InfiniteScroll() {
  return (
    <div className=' h-40 w-full whitespace-nowrap bg-white relative overflow-hidden mask flex items-center justify-center'>
      <div className="absolute flex">
        <section className='flex animate-sliding'>
          { 
            logos.map(({id, logoImg, logoName}) => (
              <div key={id} className="h-52 w-60 flex items-center justify-center">
                <img src={logoImg} alt={logoName} key={id} />
              </div>
            ))
          }
        </section>
        <section className='flex animate-sliding'>
          { 
            logos.map(({id, logoImg, logoName}) => (
              <div key={id} className="h-52 w-60 flex items-center justify-center">
                <img src={logoImg} alt={logoName} key={id} />
              </div>
            ))
          }
        </section>
      </div>
    </div>
  )
}

export default InfiniteScroll