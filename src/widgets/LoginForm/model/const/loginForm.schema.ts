import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z
    .email({ message: "Email is invalid" })
    .trim(),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" })
});

export const demoCredentialsSchema = z.object({
  email: z.literal('demo@example.com'),
  password: z.literal('password123'),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;
export type LoginFormErrors = {
  email?: string;
  password?: string;
} | null;