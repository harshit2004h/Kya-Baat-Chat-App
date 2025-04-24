import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const UserAvatar = ({ name, image }: { name: string; image?: string }) => {
  return (
    <Avatar className="h-10 w-10 rounded-full focus:outline-none focus:ring-0">
      {image ? (
        <div>
          <Image
            src={image}
            alt={name || "User Avatar"}
            height={40}
            width={40}
            className="select-none"
          />
        </div>
      ) : (
        <AvatarFallback>{name ? name[0] : "U"}</AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
