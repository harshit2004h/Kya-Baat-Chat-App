import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = ({ name, image }: { name: string; image?: string }) => {
  // Get first letter of name for fallback
  const getFirstLetter = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <Avatar className="border-2 border-[#c2451e]/30 bg-white h-9 w-9">
      <AvatarImage
        src={image || ""}
        alt={name}
        className="object-cover"
      />
      <AvatarFallback className="bg-[#fff0d6] text-[#c2451e] font-bold">
        {getFirstLetter(name)}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
