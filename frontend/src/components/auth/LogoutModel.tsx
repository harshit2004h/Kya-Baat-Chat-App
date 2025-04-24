"use client";
import React, { Dispatch, SetStateAction } from "react";
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
import { signOut } from "next-auth/react";

const LogoutModel = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleLogout = () => {
    signOut({
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-[#fff0d6] text-[#3d1f00] border border-[#a73a18]/20 rounded-xl shadow-lg animate-in fade-in-50 zoom-in-95 duration-200">
        <div className="h-1 absolute top-0 left-0 right-0 bg-gradient-to-r from-[#a73a18] to-[#c2451e] rounded-t-xl opacity-80"></div>
        
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-bold text-[#a73a18]">
            Are you sure you want to logout?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sm text-[#804000] mt-1">
            This will end your current session and you'll need to sign in again to access your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        
        <AlertDialogFooter className="mt-6 gap-2">
          <AlertDialogCancel className="bg-transparent border border-[#c2451e]/20 text-[#3d1f00] hover:bg-[#c2451e]/5 transition duration-150">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleLogout}
            className="bg-gradient-to-r from-[#c2451e] to-[#a73a18] text-white hover:from-[#a73a18] hover:to-[#c2451e] border border-[#c2451e]/20 shadow-sm transition duration-200"
          >
            Logout
          </AlertDialogAction>
        </AlertDialogFooter>
        
        <div className="h-1 absolute bottom-0 left-0 right-0 bg-gradient-to-l from-[#a73a18] to-[#c2451e] rounded-b-xl opacity-80"></div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogoutModel;
