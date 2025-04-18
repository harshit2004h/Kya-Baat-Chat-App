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
        <Button>Getting Start</Button>
      </DialogTrigger>
      <DialogContent className="bg-white text-black shadow-lg rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Welcome to Kya Baat</DialogTitle>
          <DialogDescription>
            Kya Baat - A smart, secure, and seamless messaging platform designed
            to make every conversation meaningful.
          </DialogDescription>
        </DialogHeader>
        <Button
          variant="outline"
          onClick={handleLogin}
          className="mt-4 flex items-center gap-2 border-gray-300"
        >
          <Image
            src={"/images/google.png"}
            alt="google"
            width={25}
            height={25}
          />
          Continue with Google
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModel;
