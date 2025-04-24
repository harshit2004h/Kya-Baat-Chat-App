"use client";

import React from "react";
import { motion } from "framer-motion";

interface DesiDecorationProps {
  type?: "border" | "corner" | "divider";
  className?: string;
}

const DesiDecoration: React.FC<DesiDecorationProps> = ({ 
  type = "border", 
  className = "" 
}) => {
  if (type === "border") {
    return (
      <div className={`overflow-hidden ${className}`}>
        <motion.div 
          className="w-full h-4 bg-repeat-x"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='8' viewBox='0 0 40 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0L10 4L20 0L30 4L40 0V8H0V0Z' fill='%23c2451e' fill-opacity='0.2'/%3E%3C/svg%3E")` 
          }}
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    );
  }
  
  if (type === "corner") {
    return (
      <motion.div 
        className={`w-16 h-16 ${className}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      />
    );
  }
  
  if (type === "divider") {
    return (
      <div className={`flex items-center w-full my-4 ${className}`}>
        <div className="flex-grow h-px bg-[#de6e3b]"></div>
        <motion.div 
          className="mx-2 text-[#a73a18]"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          ✽
        </motion.div>
        <div className="flex-grow h-px bg-[#de6e3b]"></div>
      </div>
    );
  }
  
  return null;
};

export default DesiDecoration;
