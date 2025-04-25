"use client";
import { getSocket } from "@/lib/socket.config";
import React, { useEffect, useMemo } from "react";
import { v4 as uuidV4 } from "uuid";
import { Button } from "../ui/button";

const ChatBase = ({ groupId }: { groupId: string }) => {
  const socket = useMemo(() => {
    const socket = getSocket();
    socket.auth={
      room: groupId,
    }

    return socket.connect();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    socket.on("message", (data: any) => {
      console.log("The socket message is- ", data);
    });

    return () => {
      socket.close();
    };
  }, []);

  const handleClick = () => {
    socket.emit("message", { name: "Harshit", id: uuidV4() });
  };

  return (
    <div>
      <Button onClick={handleClick}>Send Message</Button>
    </div>
  );
};

export default ChatBase;
