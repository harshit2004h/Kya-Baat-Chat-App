/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useRef, useState } from "react";
import { getSocket } from "@/lib/socket.config";
import { v4 as uuidv4 } from "uuid";

export default function Chats({
  group,
  oldMessages,
  chatUser,
}: {
  group: ChatGroupType;
  oldMessages: Array<MessageType> | [];
  chatUser?: GroupChatUserType;
}) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<MessageType>>(oldMessages);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // convert 0 to 12
    return `${hours}:${minutes} ${ampm}`;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const socket = useMemo(() => {
    const socket = getSocket();
    socket.auth = {
      room: group.id,
    };
    return socket.connect();
  }, []);

  useEffect(() => {
    socket.on("message", (data: MessageType) => {
      console.log("The message is", data);
      setMessages((prevMessages) => [...prevMessages, data]);
      scrollToBottom();
    });

    return () => {
      socket.close();
    };
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const payload: MessageType = {
      id: uuidv4(),
      message: message,
      name: chatUser?.name ?? "Unknown",
      createdAt: new Date().toISOString(),
      group_id: group.id,
    };
    socket.emit("message", payload);
    setMessage("");
    setMessages([...messages, payload]);
  };

  return (
    <div className="flex flex-col h-[94vh] p-4">
      <div className="flex-1 overflow-y-auto flex flex-col-reverse">
        <div ref={messagesEndRef} />
        <div className="flex flex-col gap-3 mb-2 px-1">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex flex-col max-w-[70%] ${
                message.name === chatUser?.name
                  ? "self-end items-end"
                  : "self-start items-start"
              }`}
            >
              {message.name !== chatUser?.name && (
                <span className="text-xs text-gray-600 ml-2 mb-1">
                  {message.name}
                </span>
              )}
              <div
                className={`relative px-3 py-2 rounded-lg ${
                  message.name === chatUser?.name
                    ? "bg-[#dcf8c6] text-black rounded-tr-none shadow-sm relative after:absolute after:content-[''] after:top-0 after:-right-2 after:w-0 after:h-0 after:border-t-8 after:border-l-8 after:border-t-[#dcf8c6] after:border-l-[#dcf8c6] after:border-t-solid after:border-r-transparent after:border-r-8"
                    : "bg-white text-black rounded-tl-none shadow-sm relative after:absolute after:content-[''] after:top-0 after:-left-2 after:w-0 after:h-0 after:border-t-8 after:border-r-8 after:border-t-white after:border-r-white after:border-t-solid after:border-l-transparent after:border-l-8"
                }`}
              >
                <p className="text-sm break-words pr-8">{message.message}</p>
                <div className="text-[9px] text-gray-500 pt-0.5 pr-1 flex items-center justify-end space-x-1">
                  {formatTime(message.createdAt)}
                  {message.name === chatUser?.name && (
                    <svg
                      className="w-3 h-3 text-blue-500"
                      viewBox="0 0 16 15"
                      fill="currentColor"
                    >
                      <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512z" />
                      <path d="M11.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t bg-[#f0f2f5] pt-2 pb-1 px-2 rounded-lg">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <button
            type="button"
            className="text-gray-500 p-2 rounded-full hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button
            type="button"
            className="text-gray-500 p-2 rounded-full hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            className="flex-1 p-3 rounded-full border-none outline-none bg-white shadow-inner"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            disabled={!message.trim()}
            className={`text-white p-3 rounded-full transition-all ${
              message.trim() ? "bg-[#00a884] hover:bg-[#008f72]" : "bg-gray-300"
            }`}
          >
            {message.trim() ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
