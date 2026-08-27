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
      to: "Samuelvalentim091@gmail.com",
      replyTo: email,
      subject: `Novo contato de ${nome}`,
      html: `<b>Nome:</b> ${nome}<br><b>E-mail:</b> ${email}<br><b>Telefone:</b> <a href="https://wa.me/55${telefone}">${telefone}</a> <br><b>Mensagem:</b> ${mensagem}`,
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
