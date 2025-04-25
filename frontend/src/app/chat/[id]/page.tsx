import ChatBase from "@/components/chat/ChatBase";
import React from "react";

// Mark the component as async to meet Next.js App Router requirements for dynamic routes
const Chat = async ({ params }: { params: { id: string } }) => {
  console.log("The group id is- ", params.id);
  return (
    <div>
      <h1>Hello I am chat page</h1>
      <ChatBase groupId={params.id} />
    </div>
  );
};

export default Chat;
