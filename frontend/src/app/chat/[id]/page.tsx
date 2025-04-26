import ChatBase from "@/components/chat/ChatBase";
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

  const users:Array<GroupChatUserType> = await fetchChatUsers(params.id);

  return (
    <div>
      <ChatBase group={group} users={users} />
    </div>
  );
};

export default Chat;
