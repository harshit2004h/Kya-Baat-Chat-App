"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import { scrollToSection } from "@/utils/scrollUtils";
import LoginModel from "../auth/LoginModel";

export default function Navbar({ user }: { user?: CustomUser }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 flex items-center"
          >
            <Link href="/" className="flex items-center">
              <div className="relative">
                <Image
                  src="/Logo.png"
                  width={50}
                  height={40}
                  alt="Kya Baat Logo"
                  className="transition-transform hover:scale-105"
                />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#c2451e] rounded-full opacity-75 animate-pulse"></div>
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-[#3d1f00] to-[#804000] inline-block text-transparent bg-clip-text">
                Kya Baat
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {user ? (
                <Link href="/dashboard">
                  <Button className="bg-gradient-to-r from-[#c2451e] to-[#a73a18] text-white hover:from-[#a73a18] hover:to-[#c2451e] px-6">
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <div className="flex space-x-4">
                  <LoginModel />
                </div>
              )}
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#3d1f00]"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 shadow-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-3 space-y-2">
              <a
                href="#features"
                onClick={(e) => handleNavClick(e, "features")}
                className="block px-3 py-2 text-[#3d1f00] hover:bg-[#c2451e]/10 rounded-md"
              >
                Features
              </a>
              <a
                href="#testimonials"
                onClick={(e) => handleNavClick(e, "testimonials")}
                className="block px-3 py-2 text-[#3d1f00] hover:bg-[#c2451e]/10 rounded-md"
              >
                Testimonials
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
                className="block px-3 py-2 text-[#3d1f00] hover:bg-[#c2451e]/10 rounded-md"
              >
                About
              </a>

              {user ? (
                <div className="px-3 py-2">
                  <Link href="/dashboard" className="block w-full">
                    <Button className="w-full bg-gradient-to-r from-[#c2451e] to-[#a73a18] text-white hover:from-[#a73a18] hover:to-[#c2451e]">
                      Dashboard
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col space-y-2 p-3">
                  <Link href="/login" className="w-full">
                    <Button
                      variant="outline"
                      className="border-[#c2451e] text-[#c2451e] hover:bg-[#c2451e]/10 w-full"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/register" className="w-full">
                    <Button className="bg-gradient-to-r from-[#c2451e] to-[#a73a18] text-white hover:from-[#a73a18] hover:to-[#c2451e] w-full">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
