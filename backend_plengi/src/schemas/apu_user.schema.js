import { z } from "zod";

export const createApu_User_Schema = z.object({
  equipo: z.string({
    required_error: "El equipo es requerido",
  }),
  unidad: z.string({
    required_error: "La unidad es requerida",
    }),
  val_unitario: z.number({
    required_error: "El valor unitario es requerido",
    })
});
