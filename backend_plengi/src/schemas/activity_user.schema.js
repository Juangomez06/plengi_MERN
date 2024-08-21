import { z } from "zod";

export const createActivitySchema = z.object({
  actividad: z.string({
    required_error: "La actividad es requerida",
  }),
  unidad: z.string({
    required_error: "La unidad es requerida",
    }),
  cantidad: z.number({
    required_error: "La cantidad es requerida",
    })
});
