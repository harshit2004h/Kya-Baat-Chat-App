"use client";
import React, { useEffect, useState } from "react";
import ChatSidebar from "./ChatSidebar";
import ChatNav from "./ChatNav";
import ChatUserDialog from "./ChatUserDialog";
import Chats from "./Chats";
import DesiDecoration from "@/components/ui/DesiDecoration";

const ChatBase = ({
  group,
  users,
  oldMessages,
}: {
  group: ChatGroupType;
  users: Array<GroupChatUserType> | [];
  oldMessages: Array<MessageType> | [];
}) => {
  const [open, setOpen] = useState(true);
  const [chatUser, setChatUser] = useState<GroupChatUserType>();

  useEffect(() => {
    const data = localStorage.getItem(group.id as string);

    if (data) {
      const jsonData = JSON.parse(data);
      setChatUser(jsonData);
    }
  }, [group.id]);

  return (
    <div className="flex h-screen relative overflow-hidden">
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 pointer-events-none opacity-40 z-10">
        <DesiDecoration type="corner" className="text-[#c2451e]" />
      </div>
      <div className="absolute top-0 right-0 pointer-events-none rotate-90 opacity-40 z-10">
        <DesiDecoration type="corner" className="text-[#a73a18]" />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none -rotate-90 opacity-40 z-10">
        <DesiDecoration type="corner" className="text-[#c2451e]" />
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none rotate-180 opacity-40 z-10">
        <DesiDecoration type="corner" className="text-[#a73a18]" />
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-opacity-5 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm0 4c-7.732 0-14-6.268-14-14s6.268-14 14-14 14 6.268 14 14-6.268 14-14 14zm0-28c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20zm0 4c-13.255 0-24-10.745-24-24S16.745-24 30-24 54-13.255 54 0 43.255 24 30 24zm0-48c16.569 0 30-13.431 30-30s-13.431-30-30-30-30 13.431-30 30 13.431 30 30 30zm0 4c-18.778 0-34-15.222-34-34s15.222-34 34-34 34 15.222 34 34-15.222 34-34 34z' fill='%23c2451e' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          backgroundSize: "100px 100px"
        }}></div>
      </div>
      
      <ChatSidebar users={users} />
      <div className="w-full md:w-4/5 bg-[#fff8e8]/80 backdrop-blur-sm flex flex-col h-full border-l border-[#c2451e]/10 relative">
        {open ? (
          <ChatUserDialog open={open} setOpen={setOpen} group={group} />
        ) : (
          <div className="flex-none z-20">
            <ChatNav chatGroup={group} users={users} user={chatUser} />
          </div>
        )}

        <div className="flex-1 relative">
          <Chats group={group} chatUser={chatUser} oldMessages={oldMessages} />
        </div>
      </div>
    </div>
  );
};

export default ChatBase;
