"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";

const LoginModel = () => {
  const handleLogin = () => {
    signIn("google", {
      callbackUrl: "/dashboard",
      redirect: true,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-[#c2451e] to-[#a73a18] text-white hover:from-[#a73a18] hover:to-[#c2451e] transition duration-200 shadow-md">
          Get Started
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#fff0d6] text-[#3d1f00] shadow-lg rounded-xl border-2 border-[#c2451e]/20 animate-in fade-in-50 zoom-in-95 duration-200 max-w-sm">
        <div className="h-1 absolute top-0 left-0 right-0 bg-gradient-to-r from-[#c2451e] to-[#a73a18] rounded-t-xl opacity-80"></div>
        
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#c2451e]">
            Welcome to Kya Baat
          </DialogTitle>
          <DialogDescription className="text-[#804000]">
            A smart, secure, and traditional messaging platform designed to make every conversation meaningful.
          </DialogDescription>
        </DialogHeader>
        
        <div className="my-2 w-full h-px bg-gradient-to-r from-transparent via-[#c2451e]/20 to-transparent"></div>
        
        <div className="flex justify-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="outline"
              onClick={handleLogin}
              className="mt-4 flex items-center gap-3 border-[#c2451e]/30 bg-white/80 hover:bg-[#c2451e]/5 text-[#3d1f00] py-6 px-6 transition-all duration-200 rounded-xl"
            >
              <Image
                src="/images/google.png"
                alt="google"
                width={25}
                height={25}
              />
              Continue with Google
            </Button>
          </motion.div>
        </div>
        
        <div className="h-1 absolute bottom-0 left-0 right-0 bg-gradient-to-l from-[#c2451e] to-[#a73a18] rounded-b-xl opacity-80"></div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModel;
