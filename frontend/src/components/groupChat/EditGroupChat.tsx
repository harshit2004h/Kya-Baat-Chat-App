"use client";
import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createChatSchema,
  createChatSchemaType,
} from "@/validations/groupChatValidation";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import axios, { AxiosError } from "axios";
import { CHAT_GROUP_URL } from "@/lib/apiEndPoint";
import { toast } from "sonner";
import { clearCache } from "@/actions/common";

export default function EditGroupChat({
  user,
  group,
  open,
  setOpen,
}: {
  user: CustomUser;
  group: ChatGroupType;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<createChatSchemaType>({
    resolver: zodResolver(createChatSchema),
  });

  useEffect(() => {
    setValue("title", group.title);
    setValue("passcode", group.passcode);
  }, [group, setValue]);

  const onSubmit = async (payload: createChatSchemaType) => {
    try {
      setLoading(true);
      const { data } = await axios.put(
        `${CHAT_GROUP_URL}/${group.id}`,
        payload,
        {
          headers: {
            Authorization: user.token,
          },
        }
      );

      if (data?.message) {
        setOpen(false);
        toast.success(data.message);
        clearCache("dashboard");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong. Please try again!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        onInteractOutside={(e) => e.preventDefault()}
        className="bg-white/95 rounded-xl border border-[#c2451e]/20 p-6 shadow-lg max-w-md animate-in fade-in-50 zoom-in-95 duration-200"
      >
        <div className="h-1 absolute top-0 left-0 right-0 bg-gradient-to-r from-[#c2451e] to-[#a73a18] rounded-t-xl opacity-80"></div>
        
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#3d1f00]">
            Update Group Chat
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#804000] mb-1">
              Chat Title
            </label>
            <Input
              placeholder="Enter chat title"
              {...register("title")}
              className="bg-[#fff0d6]/40 border-[#c2451e]/20 focus:border-[#c2451e]/40 focus:ring-2 focus:ring-[#c2451e]/30 text-[#3d1f00]"
            />
            {errors.title && (
              <p className="text-sm text-[#a73a18] mt-1">
                {errors.title.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-[#804000] mb-1">
              Passcode
            </label>
            <Input
              placeholder="Enter passcode"
              {...register("passcode")}
              className="bg-[#fff0d6]/40 border-[#c2451e]/20 focus:border-[#c2451e]/40 focus:ring-2 focus:ring-[#c2451e]/30 text-[#3d1f00]"
            />
            {errors.passcode && (
              <p className="text-sm text-[#a73a18] mt-1">
                {errors.passcode.message}
              </p>
            )}
          </div>
          <div>
            <Button
              className="w-full bg-gradient-to-r from-[#c2451e] to-[#a73a18] text-[#fff0d6] hover:from-[#a73a18] hover:to-[#c2451e] border border-[#c2451e]/20 shadow-sm transition duration-200"
              disabled={loading}
            >
              {loading ? "Processing..." : "Update Group"}
            </Button>
          </div>
        </form>
        
        <div className="h-1 absolute bottom-0 left-0 right-0 bg-gradient-to-l from-[#c2451e] to-[#a73a18] rounded-b-xl opacity-80"></div>
      </DialogContent>
    </Dialog>
  );
}
