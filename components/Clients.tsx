import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'
import Image from 'next/image';


const Clients = () => {
  return (
    <div className='py-20' id="testimonials">
        <h1 className='heading'>
            Témoignages de {''}
            <span className='text-purple'> clients satisfaits</span>
        </h1>
        <div className='flex flex-col items-center max-lg:mt-10'>
          <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
            <InfiniteMovingCards 
            items={testimonials} 
            direction='right'
            speed='slow'
            />
            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10'>
              {companies.map(({id,img, name}) => {
                return(
                  <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                    <Image 
                    src={img}
                    alt={name}
                    className='md:w-10 w-5'
                    width={40} 
                    height={40}
                    />
                  </div>
                )
                })}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Clients