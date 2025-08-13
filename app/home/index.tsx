"use client"
import { Hero } from '@/public'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { PrimaryButton, SecondaryButton } from '@/components/button'

const index = () => {
  const [displayYears, setDisplayYears] = useState(0)
  const [displaySatisfaction, setDisplaySatisfaction] = useState(0)
  const [displayMembers, setDisplayMembers] = useState(100)
  const [displaySupport, setDisplaySupport] = useState(1)

  useEffect(() => {
    let currentValue = 0
    let countingUp = true
    const maxValue = 10
    const finalValue = 5
    const stepMs = 80

    const timerId = setInterval(() => {
      if (countingUp) {
        if (currentValue < maxValue) {
          currentValue += 1
          setDisplayYears(currentValue)
        } else {
          countingUp = false
        }
      } else {
        if (currentValue > finalValue) {
          currentValue -= 1
          setDisplayYears(currentValue)
        } else {
          clearInterval(timerId)
        }
      }
    }, stepMs)

    return () => clearInterval(timerId)
  }, [])

  useEffect(() => {
    let currentValue = 0
    let countingUp = true
    const maxValue = 100
    const finalValue = 96
    const stepMs = 15

    const timerId = setInterval(() => {
      if (countingUp) {
        if (currentValue < maxValue) {
          currentValue += 1
          setDisplaySatisfaction(currentValue)
        } else {
          countingUp = false
        }
      } else {
        if (currentValue > finalValue) {
          currentValue -= 1
          setDisplaySatisfaction(currentValue)
        } else {
          clearInterval(timerId)
        }
      }
    }, stepMs)

    return () => clearInterval(timerId)
  }, [])

  useEffect(() => {
    let currentValue = 100
    let countingUp = true
    const maxValue = 1000
    const finalValue = 800
    const stepMs = 20
    const stepAmount = 25

    const timerId = setInterval(() => {
      if (countingUp) {
        if (currentValue < maxValue) {
          currentValue = Math.min(maxValue, currentValue + stepAmount)
          setDisplayMembers(currentValue)
        } else {
          countingUp = false
        }
      } else {
        if (currentValue > finalValue) {
          currentValue = Math.max(finalValue, currentValue - stepAmount)
          setDisplayMembers(currentValue)
        } else {
          clearInterval(timerId)
        }
      }
    }, stepMs)

    return () => clearInterval(timerId)
  }, [])

  useEffect(() => {
    let currentValue = 1
    const maxValue = 7
    const stepMs = 200

    const timerId = setInterval(() => {
      if (currentValue < maxValue) {
        currentValue += 1
        setDisplaySupport(currentValue)
      } else {
        clearInterval(timerId)
      }
    }, stepMs)

    return () => clearInterval(timerId)
  }, [])
  return (

    <div>
    
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

<div className='w-full py-6'>
  <div className='w-full rounded-md bg-[rgba(255,255,255,0.03)]/10 backdrop-blur-[2px]'>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(217,10,20,0.25)]'>
      <div className='flex flex-col sm:flex-row items-center sm:items-start gap-3 p-5 text-center sm:text-left'>
        <span className='text-3xl sm:text-4xl font-extrabold text-[#D90A14]'>{displaySatisfaction}%</span>
        <div className='flex flex-col gap-2'>
          <p className='text-white font-semibold'>Client Satisfaction</p>
          <p className='text-xs text-gray-400'>Our Members Love Their Results</p>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row items-center sm:items-start gap-3 p-5 text-center sm:text-left'>
        <span className='text-3xl sm:text-4xl font-extrabold text-[#D90A14]'>+{displayYears}</span>
        <div className='flex flex-col gap-2'>
          <p className='text-white font-semibold'>Years Of Experience</p>
          <p className='text-xs text-gray-400'>Proven Track Record Of Transforming</p>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row items-center sm:items-start gap-3 p-5 text-center sm:text-left'>
        <span className='text-3xl sm:text-4xl font-extrabold text-[#D90A14]'>+{displayMembers}</span>
        <div className='flex flex-col gap-2'>
          <p className='text-white font-semibold'>Active Members</p>
          <p className='text-xs text-gray-400'>Join Our Thriving Fitness Community</p>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row items-center sm:items-start gap-3 p-5 text-center sm:text-left'>
        <span className='text-3xl sm:text-4xl font-extrabold text-[#D90A14]'>24/{displaySupport}</span>
        <div className='flex flex-col gap-2'>
          <p className='text-white text-[20px] font-semibold'>Support Available</p>
          <p className='text-xs text-gray-400'>Expert Assistance When You Need It</p>
        </div>
      </div>
    </div>
  </div>
</div>




    </div>
  )
}

export default index
