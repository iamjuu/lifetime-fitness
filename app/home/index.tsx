"use client";
import {
  Catogory1,
  Catogory2,
  Catogory3,
  Catogory4,
  Hero,
  Tool1,
  Tool2,
  Tool3,
  Tool4,
  Tool5,
} from "@/public";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { PrimaryButton, SecondaryButton } from "@/components/button";
import  Footer  from "@/components/footer";
// Category data array
const categoryData = [
  {
    id: 1,
    title: "Weight Loss",
    description:
      "Transform your body with our comprehensive weight loss programs. Our expert trainers will guide you through personalized nutrition plans and effective workout routines designed to help you achieve sustainable results.",
    image: Catogory1,
  },
  {
    id: 2,
    title: "Muscle Building",
    description:
      "Build strength and muscle mass with our specialized training programs. From beginners to advanced athletes, we provide progressive resistance training and nutrition guidance to maximize your gains.",
    image: Catogory2,
  },
  {
    id: 3,
    title: "Cardio Fitness",
    description:
      "Improve your cardiovascular health and endurance with our dynamic cardio programs. High-intensity interval training, cycling, and running sessions to boost your stamina and overall fitness.",
    image: Catogory3,
  },
  {
    id: 4,
    title: "Flexibility & Yoga",
    description:
      "Enhance your flexibility, balance, and mental well-being with our yoga and stretching classes. Perfect for stress relief, injury prevention, and improving overall body mobility.",
    image: Catogory4,
  },
];

// Pricing plans data
const pricingPlans = [
  {
    id: 1,
    title: "BEGINNER PLAN",
    description:
      "Start Your Fitness Journey With Our Beginner Plan. Build A Strong Foundation With Basic Workouts And Essential Nutrition Guidance.",
    features: [
      "Access To All Of Our Exercise Videos",
      "Progress Tracking",
      "Supportive Online Community",
      "Personalized Workout Plans",
      "Basic Nutrition Guidance",
      "Access To Group Fitness Classes",
    ],
    monthlyPrice: 49,
    yearlyPrice: 39,
    borderColor: "border-orange-500",
    buttonColor: "bg-orange-500 hover:bg-orange-600",
    popular: false,
  },
  {
    id: 2,
    title: "PRO PLAN",
    description:
      "Our Pro Plan Offers Advanced Workouts And Personalized Nutrition Coaching To Help You Reach Your Goals Faster. Sign Up Right Now!",
    features: [
      "Access To All Of Our Exercise Videos",
      "Progress Tracking",
      "Supportive Online Community",
      "Advanced, Personalized Workout Plans",
      "Comprehensive Nutrition Coaching",
      "Access To Advanced Workout Programs",
      "Body Composition Analysis",
    ],
    monthlyPrice: 99,
    yearlyPrice: 79,
    borderColor: "border-orange-500",
    buttonColor: "bg-orange-500 hover:bg-orange-600",
    popular: false,
  },
  {
    id: 3,
    title: "CUSTOM PLAN",
    description:
      "Experience A Fully Tailored Fitness Experience With Our Custom Plan. Work One-On-One With A Dedicated Trainer To Achieve Your Goals.",
    features: [
      "Access To All Of Our Exercise Videos",
      "Progress Tracking",
      "Supportive Online Community",
      "Fully Customized Workout And Nutrition Plan",
      "Weekly Check-Ins With Your Trainer",
      "Access To All Platform Features",
      "Exclusive Gear Discounts",
    ],
    monthlyPrice: 149,
    yearlyPrice: 119,
    borderColor: "border-red-500",
    buttonColor: "bg-red-500 hover:bg-red-600",
    popular: true,
  },
];

const index = () => {
  const [displayYears, setDisplayYears] = useState(0);
  const [displaySatisfaction, setDisplaySatisfaction] = useState(0);
  const [displayMembers, setDisplayMembers] = useState(100);
  const [displaySupport, setDisplaySupport] = useState(1);
  const [isYearly, setIsYearly] = useState(false);

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

  // tools data
  const toolsData = [
    {
      id: 1,
      image: Tool1,
    },
    {
      id: 2,
      image: Tool2,
    },
    {
      id: 3,
      image: Tool3,
    },
    {
      id: 4,
      image: Tool4,
    },
    {
      id: 5,
      image: Tool5,
    },
  ];

  return (
 
    <div>
      <div className="w-full items-center justify-center z-0 flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="w-full lg:w-[50%] flex flex-col gap-5 text-center lg:text-left">
          <div className="flex flex-col z-[-1] gap-5 items-center lg:items-start">
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold" data-aos="fade-right" data-aos-delay="100">
              Achieve Your
            </h1>
            <h1 className="text-[var(--secondary-color)] text-4xl sm:text-5xl lg:text-7xl font-medium" data-aos="fade-right" data-aos-delay="200">
              Fitness Goals
            </h1>
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold" data-aos="fade-right" data-aos-delay="300">
              With FitMaker
            </h1>
          </div>

          <div className="text-center  z-[-1] lg:text-left mb-8" data-aos="fade-up" data-aos-delay="400">
            <p className="text-white text-base sm:text-lg  z-[-1] leading-relaxed">
              Join The Fitmaker Community And Transform Your Fitness Journey.
              Our Expert Coaches And Personalized Programs Are Designed To Help
              You Achieve Your Goals And Exceed Your Expectations. Ready To Make
              A Change?
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="500">
            <PrimaryButton>Start Your Journey</PrimaryButton>
            <SecondaryButton>Explore Programs</SecondaryButton>
          </div>
        </div>
        <div className="w-full lg:w-[50%] flex items-center justify-center lg:justify-end mt-8 lg:mt-0" data-aos="fade-left" data-aos-delay="300">
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
      <div className="w-full py-3 md:py-6" data-aos="fade-up" data-aos-delay="200">
        <div className="w-full rounded-md bg-[rgba(255,255,255,0.03)]/10 backdrop-blur-[2px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(217,10,20,0.25)]">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-5 text-center sm:text-left" data-aos="zoom-in" data-aos-delay="300">
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

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-5 text-center sm:text-left" data-aos="zoom-in" data-aos-delay="400">
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

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-5 text-center sm:text-left" data-aos="zoom-in" data-aos-delay="500">
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

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-5 text-center sm:text-left" data-aos="zoom-in" data-aos-delay="600">
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
      <div className="w-full py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-delay="200">
        <div className="w-full max-w-6xl mx-auto items-center justify-center flex flex-col gap-4 sm:gap-6 lg:gap-8 text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 items-center justify-center" data-aos="fade-up" data-aos-delay="300">
            <span>Our</span>
            <span className="text-[var(--secondary-color)]">Services</span>
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-4" data-aos="fade-up" data-aos-delay="400">
            Discover Our Comprehensive Fitness Programs Tailored To Your Needs.
            From Personal Training To Group Classes, We Offer A Wide Range Of
            Options To Help You Achieve Your Goals.
          </p>
        </div>

        <div className="py-10 ">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {categoryData.map((category, index) => (
                <div
                  key={category.id}
                  className="w-full h-64 rounded-lg border border-[var(--secondary-color)] px-3 pt-10 pb-3 relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--secondary-color)]"
                  data-aos="fade-up"
                  data-aos-delay={500 + (index * 100)}
                  style={{
                    backgroundImage: `url(${category.image.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* Overlay that appears on hover */}
                  <div className="absolute inset-0 bg-black/10 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm group-hover:backdrop-blur-xm transition-all duration-300"></div>

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

      {/* plan  */}
      <div className="w-full py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-delay="200">
        <div className="w-full mx-auto items-center justify-center flex flex-col gap-4 sm:gap-6 lg:gap-8 text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 items-center justify-center" data-aos="fade-up" data-aos-delay="300">
            <span>Our</span>
            <span className="text-[var(--secondary-color)]">Plans</span>
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-4" data-aos="fade-up" data-aos-delay="400">
            Select The Plan That Suits You Best And Start Your Fitness Journey
            Today.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="w-full flex items-center justify-center mb-8" data-aos="fade-up" data-aos-delay="500">
          <div className="bg-gray-800 flex gap-3 px-2 py-2 rounded-full">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 text-[14px] rounded-[50px] transition-all duration-300 ${
                !isYearly
                  ? "bg-[var(--secondary-color)] text-white font-semibold"
                  : "text-white hover:text-[var(--secondary-color)]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 text-[14px] rounded-[50px] transition-all duration-300 ${
                isYearly
                  ? "bg-[var(--secondary-color)] text-white font-semibold"
                  : "text-white hover:text-[var(--secondary-color)]"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 group">
              {pricingPlans.map((plan, index) => (
                <div
                  key={plan.id}
                  className={`relative bg-gray-800 rounded-lg border-2 ${
                    plan.borderColor
                  } p-6 transition-all duration-300 hover:scale-105 flex flex-col h-full group-hover:blur-sm hover:blur-none hover:scale-110 ${
                    plan.popular ? "ring-2 ring-red-500 ring-opacity-50" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={600 + (index * 100)}
                >
                  {/* Blue overlay with 10% opacity */}
                  <div className="absolute inset-0 bg-blue-100/10 rounded-lg pointer-events-none"></div>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-white text-2xl font-bold mb-4">
                      {plan.title}
                    </h3>

                    <div className="mb-4">
                      <h4 className="text-gray-300 text-sm font-semibold mb-2">
                        Description
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6 flex-grow">
                    <h4 className="text-gray-300 text-sm font-semibold mb-3">
                      Features
                    </h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-amber-300 mr-2 mt-1">•</span>
                          <span className="text-gray-400 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-white text-3xl font-bold mb-2">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}/USDT
                    </div>
                    {isYearly && (
                      <div className="text-[var(--secondary-color)] text-sm font-semibold">
                        Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12} per
                        year!
                      </div>
                    )}
                  </div>

                  <button
                    className={`w-full ${plan.buttonColor} text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 mt-auto`}
                  >
                    Choose This Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* tools  */}
      <div className="w-full py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-delay="200">
        <div className="w-full max-w-6xl mx-auto items-center justify-center flex flex-col gap-4 sm:gap-6 lg:gap-8 text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 items-center justify-center" data-aos="fade-up" data-aos-delay="300">
            <span>Our</span>
            <span className="text-[var(--secondary-color)]">Services</span>
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-4" data-aos="fade-up" data-aos-delay="400">
            Discover Our Comprehensive Fitness Programs Tailored To Your Needs.
            From Personal Training To Group Classes, We Offer A Wide Range Of
            Options To Help You Achieve Your Goals.
          </p>
        </div>

        <div className="py-10 w-full ">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {toolsData.map((image, index) => (
                <div key={image.id} className="lg:h-32 lg:w-60 " data-aos="zoom-in" data-aos-delay={500 + (index * 100)}>
                  <div className="w-full flex items-center justify-center  transition-all duration-300 hover:shadow-lg hover:shadow-[var(--secondary-color)] hover:scale-105">
                    <Image
                      src={image.image}
                      alt="tool"
                      width={300}
                      height={100}
                    />
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
