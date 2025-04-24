"use client";
import React, { Suspense, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "../common/UserAvatar";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const LogoutModel = dynamic(() => import("../auth/LogoutModel"));

const ProfileMenu = ({ name, image }: { name: string; image?: string }) => {
  const [logoutOpen, setLogoutOpen] = useState(false);

  return (
    <>
      {logoutOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          <LogoutModel open={logoutOpen} setOpen={setLogoutOpen} />
        </Suspense>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="outline-none focus:ring-2 focus:ring-[#c2451e]/50 rounded-full transition-transform duration-200 hover:scale-105">
            <UserAvatar name={name} image={image} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-[#fff0d6] border border-[#c2451e]/20 shadow-md rounded-lg animate-in fade-in zoom-in-95 duration-150">
          <DropdownMenuLabel className="text-[#3d1f00] font-bold">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#c2451e]"></div>
              My Account
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-[#c2451e]/20" />
          <DropdownMenuItem className="text-[#3d1f00] hover:bg-[#c2451e]/10 focus:bg-[#c2451e]/15 cursor-pointer transition duration-150">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => setLogoutOpen(true)}
            className="text-[#a73a18] hover:bg-[#a73a18]/5 focus:bg-[#a73a18]/10 cursor-pointer transition duration-150"
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ProfileMenu;
