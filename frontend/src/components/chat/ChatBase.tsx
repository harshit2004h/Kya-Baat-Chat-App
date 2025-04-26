"use client";
import React, { useState } from "react";
import ChatSidebar from "./ChatSidebar";
import ChatNav from "./ChatNav";
import ChatUserDialog from "./ChatUserDialog";

const ChatBase = ({
  group,
  users,
}: {
  group: ChatGroupType;
  users: Array<GroupChatUserType> | [];
}) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <ChatSidebar users={users} />
      <div className="w-full md:w-4/5 bg-gradient-to-b from-gray-50 to-white">
        {open ? (
          <ChatUserDialog open={open} setOpen={setOpen} group={group} />
        ) : (
          <ChatNav chatGroup={group} users={users} />
        )}
      </div>
    </div>
  );
};

export default ChatBase;
