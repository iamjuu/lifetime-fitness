import { Hero } from '@/public'
import Image from 'next/image'
import React from 'react'
import { PrimaryButton, SecondaryButton } from '@/components/button'

const index = () => {
  return (
    <div className='w-full items-center justify-center flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8 py-8 lg:py-12'>
   <div className='w-full lg:w-[50%] flex flex-col gap-5 text-center lg:text-left'>
      <div className='flex flex-col gap-5 items-center lg:items-start'>
       <h1 className='text-white text-2xl sm:text-3xl lg:text-4xl font-bold'>
        Achieve Your
       </h1>
       <h1 className='text-[var(--secondary-color)] text-4xl sm:text-5xl lg:text-7xl font-medium'>
        Fitness Goals
       </h1>
       <h1 className='text-white text-2xl sm:text-3xl lg:text-4xl font-bold'>
        With FitMaker
       </h1>
      </div>
      
      <div className='text-center lg:text-left mb-8'>
        <p className='text-white text-base sm:text-lg leading-relaxed'>
          Join The Fitmaker Community And Transform Your Fitness Journey. Our Expert Coaches And Personalized Programs Are Designed To Help You Achieve Your Goals And Exceed Your Expectations. Ready To Make A Change?
        </p>
      </div>
      
      <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
        <PrimaryButton>
          Start Your Journey
        </PrimaryButton>
        <SecondaryButton>
          Explore Programs
        </SecondaryButton>
      </div>
   </div>
   <div  className='w-full lg:w-[50%] flex items-center justify-center lg:justify-end mt-8 lg:mt-0'>

    <Image 
    alt='hero'
    src={Hero}
    width={500}
    height={500}
    className='w-full max-w-md lg:max-w-none'
    />
   </div>
    </div>
  )
}

export default index
