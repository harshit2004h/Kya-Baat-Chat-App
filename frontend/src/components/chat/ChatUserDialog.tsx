"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useParams } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import { CHAT_GROUP_USERS_URL } from "@/lib/apiEndPoint";

export default function ChatUserDialog({
  open,
  setOpen,
  group,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  group: ChatGroupType;
}) {
  const params = useParams();
  const [state, setState] = useState({
    name: "",
    passcode: "",
  });

  useEffect(() => {
    const data = localStorage.getItem(params["id"] as string);
    if (data) {
      const jsonData = JSON.parse(data);
      if (jsonData?.name && jsonData?.group_id) {
        setOpen(false);
      }
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const localData = localStorage.getItem(params["id"] as string);
    if (!localData) {
      try {
        const { data } = await axios.post(CHAT_GROUP_USERS_URL, {
          name: state.name,
          group_id: params["id"] as string,
        });
        localStorage.setItem(
          params["id"] as string,
          JSON.stringify(data?.data)
        );
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        toast.error("Something went wrong.please try again!");
      }
    }
    if (group.passcode != state.passcode) {
      toast.error("Please enter correct passcode!");
    } else {
      setOpen(false);
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent className="bg-[#fff0d6] rounded-xl border-2 border-[#c2451e]/20 shadow-lg">
        <div className="h-1 absolute top-0 left-0 right-0 bg-gradient-to-r from-[#c2451e] to-[#a73a18] rounded-t-xl opacity-80"></div>
        
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#3d1f00] flex items-center">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#c2451e] to-[#a73a18] flex items-center justify-center text-white font-bold mr-2">
              {group.title.charAt(0).toUpperCase()}
            </div>
            Join {group.title}
          </DialogTitle>
          <DialogDescription className="text-[#804000]">
            Add your name and passcode to join this chat room
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#804000] mb-1">Your Name</label>
            <Input
              placeholder="Enter your name"
              value={state.name}
              onChange={(e) => setState({ ...state, name: e.target.value })}
              className="bg-white/80 border-[#c2451e]/30 focus:border-[#c2451e]/50 focus:ring-2 focus:ring-[#c2451e]/30 text-[#3d1f00]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#804000] mb-1">Passcode</label>
            <Input
              placeholder="Enter chat passcode"
              value={state.passcode}
              onChange={(e) => setState({ ...state, passcode: e.target.value })}
              className="bg-white/80 border-[#c2451e]/30 focus:border-[#c2451e]/50 focus:ring-2 focus:ring-[#c2451e]/30 text-[#3d1f00]"
              type="password"
            />
          </div>
          <div>
            <Button 
              className="w-full bg-gradient-to-r from-[#c2451e] to-[#a73a18] text-white hover:from-[#a73a18] hover:to-[#c2451e] transition duration-200 font-medium border border-[#c2451e]/20 shadow-md"
              type="submit"
            >
              Join Chat
            </Button>
          </div>
        </form>
        
        <div className="h-1 absolute bottom-0 left-0 right-0 bg-gradient-to-l from-[#c2451e] to-[#a73a18] rounded-b-xl opacity-80"></div>
      </DialogContent>
    </Dialog>
  );
}
