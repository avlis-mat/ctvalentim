import { z } from "zod";

export const contatoSchema = z.object({
  nome: z.string().min(2, "O nome é obrigatório"),
  email: z.email("O e-mail é inválido"),
  telefone: z.string().regex(/^[0-9]{10,11}$/, "O telefone é inválido"),
  mensagem: z.string().min(10, "Conte um pouco sobre você e seus objetivos"),
});

export type ContatoFormData = z.infer<typeof contatoSchema>;
