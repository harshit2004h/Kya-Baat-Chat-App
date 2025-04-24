"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Twitter, Instagram } from "lucide-react";
import { scrollToSection } from "@/utils/scrollUtils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <footer className="bg-[#3d1f00] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }} // Faster animation
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/Logo.png"
                width={40}
                height={32}
                alt="Kya Baat Logo"
                className="mr-2"
              />
              <span className="text-xl font-bold text-[#fff0d6]">Kya Baat</span>
            </Link>
            <p className="text-[#fff0d6]/80 max-w-md">
              Connecting people through conversations that matter. Experience
              the warmth of traditional Indian chat with modern features.
            </p>

            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com"
                className="text-[#fff0d6]/80 hover:text-[#fff0d6]"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-[#fff0d6]/80 hover:text-[#fff0d6]"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="text-[#fff0d6]/80 hover:text-[#fff0d6]"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }} // Faster animation and reduced delay
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[#c2451e]">
              Site Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  onClick={(e) => handleNavClick(e, "features")}
                  className="text-[#fff0d6]/80 hover:text-[#fff0d6] transition"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => handleNavClick(e, "testimonials")}
                  className="text-[#fff0d6]/80 hover:text-[#fff0d6] transition"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, "about")}
                  className="text-[#fff0d6]/80 hover:text-[#fff0d6] transition"
                >
                  About Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }} // Faster animation and reduced delay
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[#c2451e]">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/help"
                  className="text-[#fff0d6]/80 hover:text-[#fff0d6] transition"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-[#fff0d6]/80 hover:text-[#fff0d6] transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[#fff0d6]/80 hover:text-[#fff0d6] transition"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#fff0d6]/80 hover:text-[#fff0d6] transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Decorative element */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c2451e]/50 to-transparent mb-6"></div>

        {/* Copyright */}
        <div className="text-center text-[#fff0d6]/70 text-sm">
          <p>© {currentYear} Kya Baat Chat App. All rights reserved.</p>
          <p className="mt-2">Made with ♥ in India</p>
        </div>
      </div>
    </footer>
  );
}
