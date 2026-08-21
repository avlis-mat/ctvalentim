"use server";

import nodemailer from "nodemailer";

import { contatoSchema } from "@/lib/schema";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function enviarContato(data: unknown) {
  const parsed = contatoSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors };
  }

  const { nome, email, telefone, mensagem } = parsed.data;

  try {
    await transporter.sendMail({
      from: `CT Valentim <${process.env.GMAIL_USER}>`,
      to: "samuelvalentim091@gmail.com",
      replyTo: email,
      subject: `Novo contato de ${nome}`,
      text: `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`,
    });
    return { success: true };
  } catch (error) {
    console.error("Erro ao enviar e-mail via gmail:", error);
    return {
      success: false,
      errors: { _root: ["Erro ao enviar o e-mail. Tente novamente."] },
    };
  }
}
