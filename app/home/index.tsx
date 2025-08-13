import { Hero } from '@/public'
import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <div className='w-full items-center justify-center flex'>
   <div className='w-[50%] flex flex-col gap-5'>
      <div className='flex flex-col gap-5 items-center '>
       <h1 className='text-white text-4xl font-bold'>
        Achieve Your
       </h1>
       <h1 className='text-[var(--secondary-color)] text-7xl font-medium'>
        Fitness Goals
       </h1>
       <h1 className='text-white text-4xl font-bold'>
        With FitMaker
       </h1>
      </div>
      
      <div className='text-left mb-8'>
        <p className='text-white text-lg leading-relaxed'>
          Join The Fitmaker Community And Transform Your Fitness Journey. Our Expert Coaches And Personalized Programs Are Designed To Help You Achieve Your Goals And Exceed Your Expectations. Ready To Make A Change?
        </p>
      </div>
      
      <div className='flex gap-4'>
        <button className='bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors'>
          Start Your Journey
        </button>
        <button className='bg-transparent border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-colors'>
          Explore Programs
        </button>
      </div>
   </div>
   <div  className='w-[50%] flex items-center  justify-end'>

    <Image 
    alt='hero'
    src={Hero}
    width={500}
    height={500}
    />
   </div>
    </div>
  )
}

export default index
