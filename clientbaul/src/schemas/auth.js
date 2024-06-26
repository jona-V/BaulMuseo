import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Agrega un correo valido",
  }),
  password: z.string().min(6, {
    message: "Contraseña debe tener sus 6 caracteres",
  }),
});

export const registerSchema = z.object({
  username: z
    .string({
      required_error: "Nombre requerido",
    })
    .min(3, {
      message: "Nombre requiere minimo 3 caracteres",
    }),
  email: z.string().email({
    message: "Agrega un correo valido",
  }),
  password: z.string().min(6, {
    message: "Contraseña debe tener sus 6 caracteres",
  }),
});

export const contactSchema = z.object({
  username: z.string({
    required_error: "Nombre requerido",
  }),
  email: z
    .string({
      required_error: "Email requerido",
    })
    .email({
      message: "Email no es valido",
    }),
  phone: z
    .string({
      required_error: "Teléfono requerido",
    })
    .min(10, {
      message: "Teléfono debe tener almenos 10 caracteres",
    }),
  message: z
    .string({
      required_error: "Mensaje requerido",
    }),
});