"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import DesiDecoration from "@/components/ui/DesiDecoration";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <section id="about" className="py-24 px-6 bg-[#fff0d6]" ref={ref}>
      <div className="container mx-auto px-4 max-w-5xl bg-white/60 rounded-2xl shadow-lg p-8 border border-[#c2451e]/10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#3d1f00]">
            About <span className="text-[#c2451e]">Kya Baat</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#c2451e] to-[#a73a18] mx-auto mb-6"></div>
          <p className="text-[#804000] max-w-2xl mx-auto text-lg">
            The story behind our mission to connect people through
            conversations.
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#c2451e]/10 rounded-lg transform rotate-3"></div>
              <div className="relative bg-white/80 p-2 rounded-lg shadow-md border border-[#c2451e]/20">
                <Image
                  src="/images/about.png"
                  alt="About Kya Baat"
                  width={600}
                  height={400}
                  className="rounded-md"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://placehold.co/600x400/fff0d6/c2451e?text=Kya+Baat";
                  }}
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#3d1f00]">
              Our Story
            </h3>
            <p className="text-[#804000] mb-6">
              Founded in 2023, Kya Baat aims to bring the warmth of traditional
              Indian conversations to the digital world. We created not just
              another messaging app, but a space where cultural expressions can
              thrive.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-[#3d1f00]">
              Our Mission
            </h3>
            <p className="text-[#804000] mb-6">
              We believe communication should reflect our cultural identity. Kya
              Baat preserves the essence of Indian conversations - the warmth,
              expressions, and community spirit that makes our interactions
              unique.
            </p>
            <div className="flex gap-4 flex-wrap">
              <div className="bg-white/80 rounded-lg p-4 flex items-center justify-center w-32">
                <div className="text-center">
                  <div className="text-[#c2451e] font-bold text-2xl">5M+</div>
                  <div className="text-[#804000] text-sm">Users</div>
                </div>
              </div>
              <div className="bg-white/80 rounded-lg p-4 flex items-center justify-center w-32">
                <div className="text-center">
                  <div className="text-[#c2451e] font-bold text-2xl">250K+</div>
                  <div className="text-[#804000] text-sm">Groups</div>
                </div>
              </div>
              <div className="bg-white/80 rounded-lg p-4 flex items-center justify-center w-32">
                <div className="text-center">
                  <div className="text-[#c2451e] font-bold text-2xl">40+</div>
                  <div className="text-[#804000] text-sm">Countries</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-12 pt-8 border-t border-[#c2451e]/10 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-center text-[#3d1f00]">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white/80 p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold text-[#c2451e] mb-2">
                Cultural Expression
              </h4>
              <p className="text-[#804000] text-sm">
                Celebrating the diversity and richness of Indian expressions in
                every conversation.
              </p>
            </div>
            <div className="bg-white/80 p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold text-[#c2451e] mb-2">
                Community Connection
              </h4>
              <p className="text-[#804000] text-sm">
                Building bridges between people regardless of distance or
                background.
              </p>
            </div>
            <div className="bg-white/80 p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold text-[#c2451e] mb-2">
                Innovation with Heritage
              </h4>
              <p className="text-[#804000] text-sm">
                Blending traditional values with modern technology for a unique
                experience.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mt-16">
        <DesiDecoration type="divider" />
      </div>
    </section>
  );
}
