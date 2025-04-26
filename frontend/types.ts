/* eslint-disable @typescript-eslint/no-unused-vars */
type ChatGroupType = {
  id: string;
  user_id: number;
  title: string;
  passcode: string;
  createdAt: string;
};

type GroupChatUserType = {
  id: number;
  name: string;
  group_id: string;
  createdAt: string;
};

type MessageType = {
  id: string;
  message: string;
  name: string;
  createdAt: string;
  group_id: string;
};
  