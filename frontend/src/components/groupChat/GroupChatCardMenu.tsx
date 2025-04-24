"use client";
import React, { Suspense, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import EditGroupChat from "./EditGroupChat";
import { toast } from "sonner";
import Env from "@/lib/env";

const DeleteChatGroup = dynamic(() => import("./deleteChatGroup"));

export default function GroupChatCardMenu({
  group,
  user,
}: {
  group: ChatGroupType;
  user: CustomUser;
}) {
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(`${Env.APP_URL}/chat/${group.id}`);
    toast.success("Link copied successfully!");
  };

  return (
    <>
      {deleteDialog && (
        <Suspense fallback={<p>Loading...</p>}>
          <DeleteChatGroup
            open={deleteDialog}
            setOpen={setDeleteDialog}
            groupId={group.id}
            token={user.token!}
          />
        </Suspense>
      )}
      {editDialog && (
        <Suspense fallback={<p>Loading...</p>}>
          <EditGroupChat
            open={editDialog}
            setOpen={setEditDialog}
            user={user}
            group={group}
          />
        </Suspense>
      )}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="p-1 rounded-md hover:bg-[#c2451e]/10 transition duration-150"
            aria-label="Options"
          >
            <DotsVerticalIcon className="h-5 w-5 text-[#a73a18]" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white shadow-md rounded-md border border-[#c2451e]/20 animate-in fade-in zoom-in-95 duration-150">
          <DropdownMenuItem 
            onClick={handleCopy}
            className="text-[#3d1f00] hover:bg-[#c2451e]/5 focus:bg-[#c2451e]/10 cursor-pointer transition duration-150"
          >
            Copy Link
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => setEditDialog(true)}
            className="text-[#3d1f00] hover:bg-[#c2451e]/5 focus:bg-[#c2451e]/10 cursor-pointer transition duration-150"
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setDeleteDialog(true)}
            className="text-[#a73a18] hover:bg-[#a73a18]/5 focus:bg-[#a73a18]/10 cursor-pointer transition duration-150"
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
