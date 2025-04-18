"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import LoginModel from "../auth/LoginModel";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";

export default function Navbar({ user }: { user?: CustomUser }) {
  return (
    <nav className="flex justify-between items-center bg-white shadow-sm">
      <h1 className="text-xl md:text-2xl font-extrabold pl-3 flex items-center">
        <Image src={"/Logo.png"} alt="Logo" width={80} height={50} />
        Kya Baat
      </h1>
      <div className="flex items-center space-x-2 md:space-x-6 text-gray-700 p-6">
        <Link href="/">Home</Link>
        <Link href="#features">Features</Link>
        {!user ? (
          <LoginModel />
        ) : (
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
