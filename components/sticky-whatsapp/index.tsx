"use client"

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Whatapp } from '@/public';
import Image from 'next/image';
const StickyWhatsApp = () => {
  const handleWhatsAppClick = () => {
    // Open WhatsApp with the phone number
    window.open('https://wa.me/971566922585', '_blank');
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="  text-white p-4 rounded-full shadow-lg hover:shadow-xl  transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
        aria-label="Contact us on WhatsApp"
      >
        {/* <FontAwesomeIcon 
        color='green'
          icon={faWhatsapp} 
   
          className="group-hover:animate-pulse  text-[50px]" 
        /> */}
        <Image src={Whatapp} alt="whatapp" width={50} height={50} />
        
        {/* Tooltip */}
        {/* <div className="absolute right-full mr-3 top-1/3 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with us on WhatsApp
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div> */}
      </button>
    </div>
  );
};

export default StickyWhatsApp;
