"use client";
import React from "react";
import ChatSidebar from "./ChatSidebar";
import ChatNav from "./ChatNav";

const ChatBase = ({
  group,
  users,
}: {
  group: ChatGroupType;
  users: Array<GroupChatUserType> | [];
}) => {
  return (
    <div className="flex">
      <ChatSidebar users={users} />
      <div className="w-full md:w-4/5 bg-gradient-to-b from-gray-50 to-white">
        <ChatNav chatGroup={group} users={users}/>
      </div>
    </div>
  );
};

export default ChatBase;
  