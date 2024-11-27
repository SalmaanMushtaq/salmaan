import { z } from "zod";
export const userSchema = z.object({
  userName: z.string().min(1, "Please enter your name."),
  userEmail: z.string().email("Please enter a valid email address."),
  userPhone: z
    .string()
    .regex(/^\d{10}$/, "Please enter a valid 10-digit phone number."),
  message: z.string().min(1, "Please enter your message."),
  date: z.string(),
});

export type UserSchema = z.infer<typeof userSchema>;
