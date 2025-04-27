"use client"; // Add this line at the top to make the component a client component

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchChats } from "@/fetch/chatsFetch";
import { fetchChatUsers, fetchGroupChat } from "@/fetch/groupFetch";
import { notFound } from "next/navigation";
import ChatBase from "@/components/chat/ChatBase";

const Chat = () => {
  const { id } = useParams(); // Getting the `id` from URL params
  const [group, setGroup] = useState(null);
  const [users, setUsers] = useState(null);
  const [chats, setChats] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // Check if `id` is an array, and take the first element if so
      const chatId = Array.isArray(id) ? id[0] : id;

      if (!chatId || chatId.length !== 36) {
        setError(true);
        return;
      }

      try {
        const groupData = await fetchGroupChat(chatId);
        if (!groupData) {
          setError(true);
          return;
        }

        const usersData = await fetchChatUsers(chatId);
        const chatsData = await fetchChats(chatId);

        setGroup(groupData);
        setUsers(usersData);
        setChats(chatsData);
      } catch (e) {
        setError(true);
      }
    };

    fetchData();
  }, [id]); // Trigger re-fetch whenever `id` changes

  if (error) {
    return notFound(); // If there's an error, return a "not found" page
  }

  return (
    <div className="bg-[#fff0d6] absolute inset-0 m-0 p-0 overflow-hidden">
      {group && users && chats ? (
        <ChatBase group={group} users={users} oldMessages={chats} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Chat;
