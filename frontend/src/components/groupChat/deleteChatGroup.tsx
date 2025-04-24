/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import axios from "axios";
import { CHAT_GROUP_URL } from "@/lib/apiEndPoint";
import { toast } from "sonner";
import { clearCache } from "@/actions/common";

export default function DeleteChatGroup({
  open,
  setOpen,
  groupId,
  token,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  groupId: string;
  token: string;
}) {
  const [loading, setLoading] = useState(false);

  const deleteChatGroup = async () => {
    setLoading(true);
    try {
      const { data } = await axios.delete(`${CHAT_GROUP_URL}/${groupId}`, {
        headers: {
          Authorization: token,
        },
      });

      if (data?.message) {
        clearCache("dashboard");
        toast.success(data.message);
        setOpen(false);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-white/95 rounded-xl p-6 shadow-lg border border-[#a73a18]/20 max-w-md animate-in fade-in-50 zoom-in-95 duration-200">
        <div className="h-1 absolute top-0 left-0 right-0 bg-gradient-to-r from-[#a73a18] to-[#c2451e] rounded-t-xl opacity-80"></div>
        
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-bold text-[#a73a18]">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sm text-[#804000] mt-1">
            This action cannot be undone. This will permanently delete your chat
            group and all its conversations.
          </AlertDialogDescription>
        </AlertDialogHeader>
        
        <AlertDialogFooter className="mt-6 gap-2">
          <AlertDialogCancel className="bg-transparent border border-[#c2451e]/20 text-[#3d1f00] hover:bg-[#c2451e]/5 transition duration-150">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={deleteChatGroup}
            disabled={loading}
            className="bg-[#a73a18] hover:bg-[#8b2c12] text-[#fff0d6] border border-[#a73a18] transition duration-150"
          >
            {loading ? "Processing..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
        
        <div className="h-1 absolute bottom-0 left-0 right-0 bg-gradient-to-l from-[#a73a18] to-[#c2451e] rounded-b-xl opacity-80"></div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
