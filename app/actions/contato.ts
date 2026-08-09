"use server";

import { contatoSchema } from "@/lib/schema";

export async function enviarContato(data: unknown) {
  const parsed = contatoSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors };
  }

  //envio - stub

  console.log("Contato enviado com sucesso:", parsed.data);
  return { success: true };
}
