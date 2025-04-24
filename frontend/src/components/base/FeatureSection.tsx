"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, UserPlus, LockIcon, Zap } from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Group Chats",
    description: "Create private group chats with your friends, family, and colleagues."
  },
  {
    icon: <UserPlus className="h-6 w-6" />,
    title: "Easy Sharing",
    description: "Share chat links effortlessly with anyone you want to join."
  },
  {
    icon: <LockIcon className="h-6 w-6" />,
    title: "Secure Passcodes",
    description: "Keep your conversations private with custom passcodes."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Real-time Messaging",
    description: "Experience seamless real-time conversations with no delay."
  }
];

export default function FeatureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <section id="features" className="py-24 px-6 bg-[#fff0d6]" ref={ref}>
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#3d1f00]">
            <span className="text-[#c2451e]">Features</span> You'll Love
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#c2451e] to-[#a73a18] mx-auto mb-6"></div>
          <p className="text-[#804000] max-w-2xl mx-auto text-lg">
            Discover what makes Kya Baat the perfect platform for your conversations.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/80 rounded-xl p-6 shadow-md border border-[#c2451e]/10 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.06 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-[#c2451e]/10 rounded-full flex items-center justify-center text-[#c2451e] mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#3d1f00]">{feature.title}</h3>
              <p className="text-[#804000]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        {/* Preview Screenshots */}
        <motion.div 
          className="mt-24 relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-[#c2451e]/5 rounded-2xl transform -skew-y-2"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div 
                key={item}
                className="bg-white rounded-xl overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.4 + (0.12 * index) }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="h-48 bg-gradient-to-r from-[#c2451e]/20 to-[#a73a18]/20 flex items-center justify-center text-[#c2451e]">
                  <span className="text-lg font-semibold">Screenshot {item}</span>
                </div>
                <div className="p-5">
                  <h4 className="text-[#3d1f00] font-medium">Feature Preview {item}</h4>
                  <p className="text-sm text-[#804000] mt-2">Description of the feature in action.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
