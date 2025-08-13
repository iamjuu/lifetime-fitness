"use client";
import { Catogory1, Catogory2, Catogory3, Catogory4, Hero } from "@/public";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { PrimaryButton, SecondaryButton } from "@/components/button";

// Category data array
const categoryData = [
  {
    id: 1,
    title: "Weight Loss",
    description: "Transform your body with our comprehensive weight loss programs. Our expert trainers will guide you through personalized nutrition plans and effective workout routines designed to help you achieve sustainable results.",
    image: Catogory1,
  },
  {
    id: 2,
    title: "Muscle Building",
    description: "Build strength and muscle mass with our specialized training programs. From beginners to advanced athletes, we provide progressive resistance training and nutrition guidance to maximize your gains.",
    image: Catogory2,
  },
  {
    id: 3,
    title: "Cardio Fitness",
    description: "Improve your cardiovascular health and endurance with our dynamic cardio programs. High-intensity interval training, cycling, and running sessions to boost your stamina and overall fitness.",
    image: Catogory3,
  },
  {
    id: 4,
    title: "Flexibility & Yoga",
    description: "Enhance your flexibility, balance, and mental well-being with our yoga and stretching classes. Perfect for stress relief, injury prevention, and improving overall body mobility.",
    image: Catogory4,
  },
];

const index = () => {
  const [displayYears, setDisplayYears] = useState(0);
  const [displaySatisfaction, setDisplaySatisfaction] = useState(0);
  const [displayMembers, setDisplayMembers] = useState(100);
  const [displaySupport, setDisplaySupport] = useState(1);

  // Use refs to track current values across intervals
  const yearsRef = useRef(0);
  const satisfactionRef = useRef(0);
  const membersRef = useRef(100);
  const supportRef = useRef(1);

  useEffect(() => {
    const targetValue = 5;
    const stepMs = 80;

    const timerId = setInterval(() => {
      if (yearsRef.current < targetValue) {
        yearsRef.current += 1;
        setDisplayYears(yearsRef.current);
      } else {
        clearInterval(timerId);
      }
    }, stepMs);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    const targetValue = 96;
    const stepMs = 15;

    const timerId = setInterval(() => {
      if (satisfactionRef.current < targetValue) {
        satisfactionRef.current += 1;
        setDisplaySatisfaction(satisfactionRef.current);
      } else {
        clearInterval(timerId);
      }
    }, stepMs);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    const targetValue = 800;
    const stepMs = 20;
    const stepAmount = 25;

    const timerId = setInterval(() => {
      if (membersRef.current < targetValue) {
        membersRef.current = Math.min(
          targetValue,
          membersRef.current + stepAmount
        );
        setDisplayMembers(membersRef.current);
      } else {
        clearInterval(timerId);
      }
    }, stepMs);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    const targetValue = 7;
    const stepMs = 200;

    const timerId = setInterval(() => {
      if (supportRef.current < targetValue) {
        supportRef.current += 1;
        setDisplaySupport(supportRef.current);
      } else {
        clearInterval(timerId);
      }
    }, stepMs);

    return () => clearInterval(timerId);
  }, []);
  return (
    <div>
      <div className="w-full items-center justify-center flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="w-full lg:w-[50%] flex flex-col gap-5 text-center lg:text-left">
          <div className="flex flex-col gap-5 items-center lg:items-start">
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
              Achieve Your
            </h1>
            <h1 className="text-[var(--secondary-color)] text-4xl sm:text-5xl lg:text-7xl font-medium">
              Fitness Goals
            </h1>
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
              With FitMaker
            </h1>
          </div>

          <div className="text-center lg:text-left mb-8">
            <p className="text-white text-base sm:text-lg leading-relaxed">
              Join The Fitmaker Community And Transform Your Fitness Journey.
              Our Expert Coaches And Personalized Programs Are Designed To Help
              You Achieve Your Goals And Exceed Your Expectations. Ready To Make
              A Change?
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <PrimaryButton>Start Your Journey</PrimaryButton>
            <SecondaryButton>Explore Programs</SecondaryButton>
          </div>
        </div>
        <div className="w-full lg:w-[50%] flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
          <Image
            alt="hero"
            src={Hero}
            width={500}
            height={500}
            className="w-full max-w-md lg:max-w-none"
          />
        </div>
      </div>

      {/* counter  */}
      <div className="w-full py-3 md:py-6">
        <div className="w-full rounded-md bg-[rgba(255,255,255,0.03)]/10 backdrop-blur-[2px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(217,10,20,0.25)]">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-5 text-center sm:text-left">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#D90A14]">
                {displaySatisfaction}%
              </span>
              <div className="flex flex-col gap-2">
                <p className="text-white font-semibold">Client Satisfaction</p>
                <p className="text-xs text-gray-400">
                  Our Members Love Their Results
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-5 text-center sm:text-left">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#D90A14]">
                +{displayYears}
              </span>
              <div className="flex flex-col gap-2">
                <p className="text-white font-semibold">Years Of Experience</p>
                <p className="text-xs text-gray-400">
                  Proven Track Record Of Transforming
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-5 text-center sm:text-left">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#D90A14]">
                +{displayMembers}
              </span>
              <div className="flex flex-col gap-2">
                <p className="text-white font-semibold">Active Members</p>
                <p className="text-xs text-gray-400">
                  Join Our Thriving Fitness Community
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-5 text-center sm:text-left">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#D90A14]">
                24/{displaySupport}
              </span>
              <div className="flex flex-col gap-2">
                <p className="text-white text-[20px] font-semibold">
                  Support Available
                </p>
                <p className="text-xs text-gray-400">
                  Expert Assistance When You Need It
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* services  */}
      <div className="w-full py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto items-center justify-center flex flex-col gap-4 sm:gap-6 lg:gap-8 text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 items-center justify-center">
            <span>Our</span>
            <span className="text-[var(--secondary-color)]">Services</span>
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-4">
            Discover Our Comprehensive Fitness Programs Tailored To Your Needs.
            From Personal Training To Group Classes, We Offer A Wide Range Of
            Options To Help You Achieve Your Goals.
          </p>
        </div>

        <div className="py-10 ">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {categoryData.map((category) => (
                <div
                  key={category.id}
                  className="w-full h-64 rounded-lg border border-[var(--secondary-color)] px-3 pt-10 pb-3 relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundImage: `url(${category.image.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* Overlay that appears on hover */}
                  <div className="absolute inset-0 bg-black/10 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm group-hover:backdrop-blur-md transition-all duration-300"></div>

                  {/* Content that slides up from bottom on hover */}
                  <div className="w-full flex-col h-full flex justify-end relative z-10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h1 className="text-[var(--secondary-color)] text-center text-[22px] font-bold mb-2">
                      {category.title}
                    </h1>
                    <p className="text-white text-center text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
