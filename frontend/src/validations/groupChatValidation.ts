import { z } from "zod";

export const createChatSchema = z
  .object({
    title: z
      .string()
      .min(4, { message: "Title must be at least 4 characters long" })
      .max(101, { message: "Title must be less than 101 chracters" }),
    passcode: z
      .string()
      .min(4, { message: "Passcode must be at least 4 characters long" })
      .max(255, { message: "Passcode must be less than 255 characters" }),
  })
  .required();

export type createChatSchemaType = z.infer<typeof createChatSchema>;
