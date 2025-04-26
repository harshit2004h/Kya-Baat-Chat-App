import React from "react";
import MobileChatSidebar from "./MobileChatSidebar";

export default function ChatNav({
  chatGroup,
  users,
  user,
}: {
  chatGroup: ChatGroupType;
  users: Array<GroupChatUserType> | [];
  user?: GroupChatUserType;
}) {
  return (
    <nav className="w-full h-[70px] flex justify-between items-center px-6 py-3 border-b border-[#c2451e]/20 bg-[#fff0d6]/95">
      <div className="h-1 absolute top-0 left-0 right-0 bg-gradient-to-r from-[#c2451e] to-[#a73a18] opacity-80"></div>
      
      <div className="flex space-x-4 items-center">
        <div className="md:hidden">
          <MobileChatSidebar users={users} />
        </div>

        <h1 className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#c2451e] to-[#a73a18] flex items-center justify-center text-white font-bold mr-3">
            {chatGroup.title.charAt(0).toUpperCase()}
          </div>
          <div>
            <span className="text-xl font-bold text-[#3d1f00]">
              {chatGroup.title}
            </span>
            <div className="flex items-center text-xs text-[#804000]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c2451e] mr-1.5 animate-pulse"></span>
              <span>{users.length} {users.length === 1 ? 'member' : 'members'}</span>
            </div>
          </div>
        </h1>
      </div>
      
      {user?.name && (
        <div className="flex items-center bg-[#fff8e8] px-3 py-1 rounded-full border border-[#c2451e]/20 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-[#c2451e] animate-pulse mr-2"></span>
          <span className="text-[#804000] font-medium text-sm">{user.name}</span>
        </div>
      )}
    </nav>
  );
}
