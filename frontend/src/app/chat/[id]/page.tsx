import NotFound from "@/app/not-found";
import ChatBase from "@/components/chat/ChatBase";
import { fetchChats } from "@/fetch/chatsFetch";
import { fetchChatGroup, fetchChatGroupUsers } from "@/fetch/groupFetch";
import React from "react";

export default async function chat({ params }: { params: { id: string } }) {
  if (params.id.length !== 36) {
    return NotFound();
  }

  const group: ChatGroupType | null = await fetchChatGroup(params.id);
  if (group === null) {
    return NotFound();
  }

  const users: Array<GroupChatUserType> | [] = await fetchChatGroupUsers(
    params.id
  );
  const chats: Array<MessageType> | [] = await fetchChats(params.id);

  return (
    <div>
      <ChatBase users={users} group={group} oldMessages={chats} />
    </div>
  );
}
