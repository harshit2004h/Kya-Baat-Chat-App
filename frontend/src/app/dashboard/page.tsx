import React from "react";
import { authOption, CustomSession } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { fetchChatGroups } from "@/fetch/groupFetch";
import DashNav from "@/components/dashboard/DashNav";
import DashboardClient from "@/components/dashboard/DashboardClient";
import DesiDecoration from "@/components/ui/DesiDecoration";

export default async function Dashboard() {
  const session: CustomSession | null = await getServerSession(authOption);

  if (!session?.user?.name) {
    throw new Error("Session not found or user name is missing.");
  }

  const groups: Array<ChatGroupType> | [] = await fetchChatGroups(
    session.user.token!
  );

  const name = session.user.name;
  const image = session.user.image ?? undefined;

  return (
    <div className="flex flex-col min-h-screen bg-[#fff0d6]">
      <DashNav name={name} image={image} />
      <div className="flex-1 flex flex-col">
        <DashboardClient name={name} groups={groups} user={session.user} />
      </div>
      {/* Fixed bottom decoration */}
      <footer className="w-full">
        <DesiDecoration type="border" className="w-full transform rotate-180" />
      </footer>
    </div>
  );
}
