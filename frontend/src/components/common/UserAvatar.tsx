import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = ({ name, image }: { name: string; image?: string }) => {
  return (
    <Avatar className="h-12 w-12 rounded-full focus:outline-none focus:ring-0">
      {image ? (
        <AvatarImage
          src={image}
          alt={name || "User Avatar"}
          className="rounded-full"
        />
      ) : (
        <AvatarFallback>{name ? name[0] : "U"}</AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
