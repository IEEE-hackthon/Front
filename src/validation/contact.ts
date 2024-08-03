import { z } from "zod";
const AddVaultSchema = z.object({
  name: z
    .string({ message: "please enter your name" })
    .min(2, "please enter name has carcter more than 2"),
  email: z
    .string({ message: "please enter email" })
    .min(2, "please enter valid email"),
  number: z
    .number({ message: "please enter phone number" })
    .min(10, "please enter valid number"),
  description: z
    .string({ message: "please enter any message" })
    .min(2, "please enter any message"),
});
export { AddVaultSchema };
