import React from "react";
import Image from "next/image";
import ProfileMenu from "../auth/ProfileMenu";

const DashNav = ({ name, image }: { name: string; image?: string }) => {
  return (
    <nav className="relative bg-[#fff0d6] z-10">
      {/* Top decorative border */}
      <div className="h-1 w-full bg-gradient-to-r from-[#c2451e] to-[#a73a18] opacity-80"></div>
      
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-3">
        <h1 className="text-xl md:text-2xl font-extrabold flex items-center text-[#3d1f00]">
          <div className="relative mr-2">
            <Image 
              src={"/Logo.png"} 
              alt="Logo" 
              width={60} 
              height={50} 
              className="transition-transform hover:scale-105"
            />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#c2451e] rounded-full opacity-75 animate-pulse"></div>
          </div>
          <span className="bg-gradient-to-r from-[#3d1f00] to-[#804000] inline-block text-transparent bg-clip-text">
            Kya Baat
          </span>
        </h1>
        
        <div className="flex items-center space-x-2 md:space-x-6 text-[#3d1f00]">
          <div className="hidden md:flex items-center space-x-1">
            <span className="h-2 w-2 rounded-full bg-[#c2451e] animate-pulse"></span>
            <span className="text-sm text-[#804000]">Live</span>
          </div>
          <ProfileMenu name={name} image={image} />
        </div>
      </div>
      
      {/* Clear visible separator */}
      <div className="border-b-2 border-[#c2451e]/30 w-full"></div>
    </nav>
  );
};

export default DashNav;
