// lib/validators/login.yup.ts
import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .trim()
      .required("Email wajib diisi")
      .email("Format email tidak benar"),
    password: yup
      .string()
      .required("Password wajib diisi")
      .min(8, "Minimal 8 karakter")
      .matches(/[A-Za-z]/, "Harus mengandung huruf")
      .matches(/\d/, "Harus mengandung angka"),
    remember: yup.boolean().default(false),
  })
  .required();

export type TypeLoginInput = yup.InferType<typeof loginSchema>;
