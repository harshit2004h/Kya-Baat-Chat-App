"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createChatSchema,
  createChatSchemaType,
} from "@/validations/groupChatValidation";
import { Input } from "../ui/input";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { CHAT_GROUP_URL } from "@/lib/apiEndPoint";
import { clearCache } from "@/actions/common";

export default function CreateChat({ user }: { user: CustomUser }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createChatSchemaType>({
    resolver: zodResolver(createChatSchema),
  });

  const onSubmit = async (payload: createChatSchemaType) => {
    try {
      setLoading(true);
      const { data } = await axios.post(CHAT_GROUP_URL, payload, {
        headers: {
          Authorization: user.token,
        },
      });

      if (data?.message) {
        setOpen(false);
        toast.success(data?.message);
        clearCache("dashboard");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error instanceof AxiosError) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong.please try again!");
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-[#c2451e] to-[#a73a18] text-[#fff0d6] hover:from-[#a73a18] hover:to-[#c2451e] border border-[#c2451e]/20 shadow-sm transition duration-200">
          Create Group
        </Button>
      </DialogTrigger>
      <DialogContent
        onInteractOutside={(e) => e.preventDefault()}
        className="bg-white/95 rounded-2xl p-8 max-w-md w-full shadow-lg border border-[#c2451e]/20 animate-in fade-in-50 zoom-in-95 duration-200"
      >
        <div className="h-1 absolute top-0 left-0 right-0 bg-gradient-to-r from-[#c2451e] to-[#a73a18] rounded-t-2xl opacity-80"></div>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-[#3d1f00]">
            Create New Group Chat
          </DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 flex flex-col space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-[#804000] mb-1">
              Chat Title
            </label>
            <Input
              placeholder="Enter chat title"
              {...register("title")}
              className="border-[#c2451e]/20 bg-[#fff0d6]/40 focus:ring-2 focus:ring-[#c2451e]/30 focus:border-[#c2451e]/40 text-[#3d1f00]"
            />
            {errors?.title?.message && (
              <p className="text-[#a73a18] text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-[#804000] mb-1">
              Passcode
            </label>
            <Input
              placeholder="Enter chat passcode"
              {...register("passcode")}
              className="border-[#c2451e]/20 bg-[#fff0d6]/40 focus:ring-2 focus:ring-[#c2451e]/30 focus:border-[#c2451e]/40 text-[#3d1f00]"
            />
            {errors?.passcode?.message && (
              <p className="text-[#a73a18] text-sm mt-1">
                {errors.passcode.message}
              </p>
            )}
          </div>
          <Button
            className="w-full bg-gradient-to-r from-[#c2451e] to-[#a73a18] text-[#fff0d6] hover:from-[#a73a18] hover:to-[#c2451e] border border-[#c2451e]/20 shadow-sm transition duration-200"
            disabled={loading}
          >
            {loading ? "Processing..." : "Create Chat"}
          </Button>
        </form>
        <div className="h-1 absolute bottom-0 left-0 right-0 bg-gradient-to-l from-[#c2451e] to-[#a73a18] rounded-b-2xl opacity-80"></div>
      </DialogContent>
    </Dialog>
  );
}
