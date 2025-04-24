"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import DesiDecoration from "@/components/ui/DesiDecoration";

const reviews = [
  {
    id: 1,
    name: "Rahul Verma",
    role: "Software Developer",
    avatar: "/user1.png",
    rating: 5,
    review: "Kya Baat has completely changed how our team communicates. The interface is intuitive and the desi touch makes it feel so unique!"
  },
  {
    id: 2,
    name: "Vikram Singh",
    role: "Marketing Manager",
    avatar: "/user2.png",
    rating: 5,
    review: "I love the traditional theme combined with modern functionality. It's perfect for staying connected with my family across different cities."
  },
  {
    id: 3,
    name: "Ajay Kumar",
    role: "Student",
    avatar: "/user1.png",
    rating: 4,
    review: "Using Kya Baat for our college projects has been so much fun. The passcode feature ensures only our team can access our conversations."
  },
  {
    id: 4,
    name: "Nitin Patel",
    role: "Business Owner",
    avatar: "/user2.png",
    rating: 5,
    review: "As someone who values both tradition and innovation, this app speaks to me. The design is beautiful and the performance is top-notch."
  }
];

export default function UserReviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };
  
  return (
    <section id="testimonials" className="py-24 px-6 bg-[#fff0d6]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#3d1f00]">
            What Our <span className="text-[#c2451e]">Users</span> Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#c2451e] to-[#a73a18] mx-auto mb-6"></div>
          <p className="text-[#804000] max-w-2xl mx-auto text-lg">
            Hear from people who use Kya Baat to stay connected.
          </p>
        </motion.div>

        {/* Desktop Reviews Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-white/80 rounded-xl p-6 shadow-md border border-[#c2451e]/10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-[#c2451e]/20">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#3d1f00]">{review.name}</h3>
                  <p className="text-sm text-[#804000]">{review.role}</p>
                </div>
                <div className="ml-auto flex">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-[#c2451e] text-[#c2451e]" />
                  ))}
                </div>
              </div>
              
              <p className="text-[#804000] italic">&quot;{review.review}&quot;</p>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile Review Carousel */}
        <div className="md:hidden max-w-sm mx-auto">
          <div className="relative">
            <motion.div 
              className="bg-white/80 rounded-xl p-6 shadow-md border border-[#c2451e]/10"
              key={reviews[activeIndex].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-[#c2451e]/20">
                  <Image
                    src={reviews[activeIndex].avatar}
                    alt={reviews[activeIndex].name}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#3d1f00]">{reviews[activeIndex].name}</h3>
                  <p className="text-sm text-[#804000]">{reviews[activeIndex].role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {Array.from({ length: reviews[activeIndex].rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#c2451e] text-[#c2451e]" />
                ))}
              </div>
              
              <p className="text-[#804000] italic">&quot;{reviews[activeIndex].review}&quot;</p>
            </motion.div>
            
            <button 
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center text-[#3d1f00] border border-[#c2451e]/20"
            >
              ←
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center text-[#3d1f00] border border-[#c2451e]/20"
            >
              →
            </button>
          </div>
          
          <div className="flex justify-center space-x-2 mt-4">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  activeIndex === index ? "bg-[#c2451e]" : "bg-[#c2451e]/30"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-20">
        <DesiDecoration type="divider" />
      </div>
    </section>
  );
}
