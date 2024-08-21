import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "Se requiere nombre de usuario",
  }),
  email: z
    .string({
      required_error: "Se requiere correo",
    })
    .email({
      message: "El correo no es válido",
    }),
  password: z
    .string({
      required_error: "La contraseña no es válida",
    })
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Se requiere correo",
    })
    .email({
      message: "El correo no es válido",
    }),
  password: z
    .string({
      required_error: "La contraseña no es válida",
    })
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    }),
});
