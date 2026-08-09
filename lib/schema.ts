import { z } from "zod";

export const contatoSchema = z.object({
  nome: z.string().min(2, "O nome é obrigatório"),
  email: z.email("O e-mail é inválido"),
  telefone: z.string().min(10, "O telefone é obrigatório"),
  mensagem: z.string().min(10, "Conte um pouco sobre você e seus objetivos"),
});

export type ContatoFormData = z.infer<typeof contatoSchema>;
