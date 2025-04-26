"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function MobileChatSidebar({
  users,
}: {
  users: Array<GroupChatUserType> | [];
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-[#a73a18] bg-[#fff0d6]/80 hover:bg-[#c2451e]/10 p-2 rounded-full transition-colors duration-200 border border-[#c2451e]/30 shadow-sm">
          <HamburgerMenuIcon className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-[#fff0d6] border-r-2 border-[#c2451e]/20 z-50">
        <div className="h-1 absolute top-0 left-0 right-0 bg-gradient-to-r from-[#c2451e] to-[#a73a18] opacity-80"></div>
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-[#3d1f00] border-b-2 border-[#c2451e]/20 pb-2">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-[#c2451e] mr-2"></div>
              Users
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-3 overflow-y-auto max-h-[calc(100vh-200px)]">
          {users.length > 0 ? users.map((item, index) => (
            <div key={index} className="bg-white/90 rounded-lg p-3 border border-[#c2451e]/10 shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#c2451e] to-[#a73a18] flex items-center justify-center text-white font-bold">
                  {item.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-bold text-[#3d1f00]"> {item.name}</p>
                  <p className="text-xs text-[#804000]">
                    Joined: <span className="text-[#a73a18]">{new Date(item.createdAt).toDateString()}</span>
                  </p>
                </div>
              </div>
            </div>
          )) : (
            <div className="text-center py-8 text-[#804000] italic bg-white/50 rounded-lg border border-[#c2451e]/10">
              <p>No users have joined yet</p>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
