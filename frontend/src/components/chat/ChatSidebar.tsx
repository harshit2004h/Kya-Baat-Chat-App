import React from "react";
import DesiDecoration from "@/components/ui/DesiDecoration";

export default function ChatSidebar({
  users,
}: {
  users: Array<GroupChatUserType> | [];
}) {
  return (
    <div className="hidden md:block h-screen overflow-y-auto w-1/5 bg-[#fff0d6]/90 px-4 border-r-2 border-[#c2451e]/20">
      <div className="sticky top-0 z-10 pt-4 pb-2 bg-[#fff0d6]/90">
        <h1 className="text-2xl font-bold text-[#3d1f00] flex items-center">
          <span className="h-3 w-3 rounded-full bg-[#c2451e] mr-2"></span>
          Users
        </h1>
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#c2451e]/30 to-transparent mt-2"></div>
      </div>
      
      <div className="py-4 space-y-3">
        {users.length > 0 ? (
          users.map((item, index) => (
            <div key={index} className="bg-white/80 rounded-lg p-3 border border-[#c2451e]/10 shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#c2451e] to-[#a73a18] flex items-center justify-center text-white font-bold">
                  {item.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-bold text-[#3d1f00]">{item.name}</p>
                  <div className="flex items-center text-xs text-[#804000]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c2451e] mr-1.5"></span>
                    <span>Joined {new Date(item.createdAt).toDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 bg-white/50 rounded-lg text-[#804000] italic border border-[#c2451e]/10">
            <p>No users have joined yet</p>
          </div>
        )}
      </div>
      
      <div className="absolute bottom-0 left-0 w-1/5">
        <DesiDecoration type="border" className="w-full transform rotate-180" />
      </div>
    </div>
  );
}
