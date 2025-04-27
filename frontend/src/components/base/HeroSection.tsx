"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DesiDecoration from "@/components/ui/DesiDecoration";
import LoginModel from "../auth/LoginModel";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";

export default function HeroSection({ user }: { user?: CustomUser }) {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            className="lg:w-5/12 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-block mb-4"
            >
              <span className="bg-[#c2451e]/10 text-[#c2451e] px-4 py-1 rounded-full text-sm font-medium">
                Traditional बातचीत, Modern Design
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#3d1f00]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Connect With <span className="text-[#c2451e]">Kya Baat</span> Chat
              App
            </motion.h1>

            <motion.p
              className="text-[#804000] text-lg mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              Experience the warmth of traditional Indian conversations in a
              modern chat app. Create group chats, share moments, and stay
              connected with your loved ones.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {user ? (
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#c2451e] to-[#a73a18] text-white hover:from-[#a73a18] hover:to-[#c2451e] shadow-lg px-8 transition-all duration-200"
                  >
                    Get Started
                  </Button>
                </Link>
              ) : (
                <div className="flex space-x-4">
                  <LoginModel />
                </div>
              )}
              <Link
                href="https://github.com/harshit2004h/Kya-Baat-Chat-App"
                rel="noopenernoreferrer"
                target="_blank"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#c2451e] text-[#3d1f00] hover:bg-[#c2451e]/10 transition-all duration-200"
                >
                  <Image
                    src="/images/Github.png"
                    alt="Github"
                    height={90}
                    width={90}
                  />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="lg:w-7/12 relative mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative px-4 md:px-6">
              {/* Decorative elements positioned to avoid overlapping */}
              <motion.div
                className="absolute top-0 left-0 w-16 h-16 text-[#c2451e] -translate-y-1/2 -translate-x-1/4"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100C77.6 100 100 77.6 50 0ZM50 90C27.9 90 10 72.1 10 50C10 27.9 27.9 10 50 10C72.1 10 90 27.9 90 50C90 72.1 72.1 90 50 90Z"
                    fill="currentColor"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M80 50C80 66.5685 66.5685 80 50 80C33.4315 80 20 66.5685 20 50"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl p-2 sm:p-3 shadow-xl overflow-hidden border border-[#c2451e]/20 relative z-10"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/images/conversation.svg"
                  alt="Kya Baat Chat Preview"
                  width={800}
                  height={500}
                  className="rounded-xl"
                  priority
                />
              </motion.div>

              <motion.div
                className="absolute bottom-0 right-0 w-16 h-16 text-[#a73a18] translate-y-1/2 translate-x-1/4"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100C77.6 100 100 77.6 50 0ZM50 90C27.9 90 10 72.1 10 50C10 27.9 27.9 10 50 10C72.1 10 90 27.9 90 50C90 72.1 72.1 90 50 90Z"
                    fill="currentColor"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M20 50C20 33.4315 33.4315 20 50 20C66.5685 20 80 33.4315 80 50"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <DesiDecoration type="divider" />
      </div>
    </section>
  );
}
