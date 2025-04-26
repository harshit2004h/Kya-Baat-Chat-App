import ChatBase from "@/components/chat/ChatBase";
import { fetchChats } from "@/fetch/chatsFetch";
import { fetchChatUsers, fetchGroupChat } from "@/fetch/groupFetch";
import { notFound } from "next/navigation";
import React from "react";

// Mark the component as async to meet Next.js App Router requirements for dynamic routes
const Chat = async ({ params }: { params: { id: string } }) => {
  if (params.id.length != 36) {
    return notFound();
  }

  const group: ChatGroupType | null = await fetchGroupChat(params.id);

  if (group === null) {
    return notFound();
  }

  const users: Array<GroupChatUserType> | [] = await fetchChatUsers(params.id);
  const chats: Array<MessageType> | [] = await fetchChats(params.id);

  return (
    <div className="bg-[#fff0d6] absolute inset-0 m-0 p-0 overflow-hidden">
      <ChatBase group={group} users={users} oldMessages={chats} />
    </div>
  );
};

export default Chat;
