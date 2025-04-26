import { CHATS_URL } from "@/lib/apiEndPoint";

export async function fetchChats(group_id: string) {
  const res = await fetch(`${CHATS_URL}/${group_id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const response = await res.json();
  if (response?.data) {
    return response?.data;
  }
  return [];
}
