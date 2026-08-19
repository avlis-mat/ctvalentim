"use server";

import { Resend } from "resend";

import { contatoSchema } from "@/lib/schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function enviarContato(data: unknown) {
  const parsed = contatoSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors };
  }

  const { nome, email, telefone, mensagem } = parsed.data;

  try {
    const { error } = await resend.emails.send({
      from: "CT Valentim <onboarding@resend.dev>",
      to: "mateus.avlis@outlook.com",
      replyTo: email,
      subject: `Novo contato de ${nome}`,
      text: `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`,
    });

    if (error) {
      console.error("Erro ao enviar e-mail:", error);
      return {
        success: false,
        errors: { _root: ["Erro ao enviar o e-mail. Tente novamente."] },
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Erro de rede/conexão ao enviar e-mail:", error);
    return {
      success: false,
      errors: { _root: ["Erro ao enviar o e-mail. Tente novamente."] },
    };
  }
}
