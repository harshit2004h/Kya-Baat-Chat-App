import DashNav from "@/components/dashboard/DashNav";
import React from "react";
import { authOption, CustomSession } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export default async function Dashboard() {
  const session: CustomSession | null = await getServerSession(authOption);

  if (!session?.user?.name) {
    throw new Error("Session not found or user name is missing.");
  }

  const name = session.user.name;
  const image = session.user.image ?? undefined;
  console.log("Session Image:", session?.user?.image);

  return (
    <div>
      <DashNav name={name} image={image} />
    </div>
  );
}
