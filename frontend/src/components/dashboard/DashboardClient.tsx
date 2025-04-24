"use client";

import React from "react";
import { motion } from "framer-motion";
import DesiDecoration from "@/components/ui/DesiDecoration";
import GroupChatCard from "@/components/groupChat/GroupChatCard";
import CreateChat from "@/components/groupChat/CreateChat";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";

interface DashboardClientProps {
  name: string;
  groups: Array<ChatGroupType> | [];
  user: CustomUser;
}

export default function DashboardClient({ name, groups, user }: DashboardClientProps) {
  return (
    <div className="flex-1 bg-[#fff0d6] text-[#3d1f00] font-serif relative">
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 pointer-events-none opacity-50">
        <DesiDecoration type="corner" />
      </div>
      <div className="absolute top-0 right-0 pointer-events-none rotate-90 opacity-50">
        <DesiDecoration type="corner" />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none -rotate-90 opacity-50">
        <DesiDecoration type="corner" />
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none rotate-180 opacity-50">
        <DesiDecoration type="corner" />
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 py-10 w-full">
        {/* Greeting and Create Button */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-between pb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center sm:text-left">
            <h1 className="desi-heading text-4xl font-bold text-[#c2451e]">
              नमस्ते, {name.split(" ", 1)}
            </h1>
            <p className="text-[#804000] text-base mt-2">
              Here&apos;s a list of your group chats. Let&apos;s keep the conversation
              going!
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <CreateChat user={user} />
          </div>
        </motion.div>

        <DesiDecoration type="divider" />

        {/* Group Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-8">
          {groups.length > 0 ? (
            groups.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="transform transition-all duration-300"
              >
                <GroupChatCard group={item} user={user} />
              </motion.div>
            ))
          ) : (
            <motion.div 
              className="col-span-full text-center py-10 bg-white/70 rounded-xl border-2 border-[#de6e3b]/40 shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <DesiDecoration type="border" className="absolute -top-10 w-full opacity-70" />
                <p className="text-xl text-[#c2451e] font-semibold">
                  No groups created yet.
                </p>
                <p className="text-sm text-[#8b3f00] mt-1">
                  Start a new group and spark a conversation!
                </p>
                <DesiDecoration type="border" className="absolute -bottom-10 w-full transform rotate-180 opacity-70" />
              </div>
            </motion.div>
          )}
        </div>
      </main>
      
    </div>
  );
}
