import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import GroupChatCardMenu from "./GroupChatCardMenu";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GroupChatCard({
  group,
  user,
}: {
  group: ChatGroupType;
  user: CustomUser;
}) {
  const [showPasscode, setShowPasscode] = useState(false);
  
  const togglePasscodeVisibility = () => {
    setShowPasscode(!showPasscode);
  };

  const maskedPasscode = "*".repeat(group.passcode.length);

  return (
    <Card className="bg-white/90 border border-[#c2451e]/20 shadow-sm rounded-xl transition-all duration-200 hover:shadow-md overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-[#c2451e] to-[#a73a18] opacity-80"></div>
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2 pt-4">
        <CardTitle className="text-xl font-bold text-[#3d1f00]">
          {group.title}
        </CardTitle>
        <GroupChatCardMenu user={user} group={group} />
      </CardHeader>
      <CardContent className="text-[#804000] space-y-2 text-sm pt-0">
        <p className="flex items-center">
          <span className="font-medium text-[#a73a18]">Passcode:</span>{" "}
          <strong className="text-[#3d1f00] bg-[#fff0d6]/50 px-2 py-0.5 rounded border border-[#c2451e]/10">
            {showPasscode ? group.passcode : maskedPasscode}
          </strong>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-6 w-6 ml-2 text-[#a73a18] hover:bg-[#fff0d6]/70 hover:text-[#c2451e] transition-colors rounded-full p-1" 
            onClick={togglePasscodeVisibility}
            title={showPasscode ? "Hide passcode" : "Show passcode"}
          >
            {showPasscode ? <EyeOff size={14} /> : <Eye size={14} />}
          </Button>
        </p>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c2451e]/20 to-transparent my-2"></div>
        <p className="flex items-center">
          <span className="font-medium text-[#a73a18] mr-2">Created:</span>{" "}
          <span className="text-[#3d1f00] bg-[#fff0d6]/30 px-2 py-0.5 rounded border border-[#c2451e]/10">
            {new Date(group.createdAt).toDateString()}
          </span>
        </p>
      </CardContent>
      <div className="h-1 mt-2 bg-gradient-to-l from-[#c2451e] to-[#a73a18] opacity-80"></div>
    </Card>
  );
}
