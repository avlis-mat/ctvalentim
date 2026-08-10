"use client";

import { enviarContato } from "@/app/actions/contato";
import { ContatoFormData, contatoSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function Contato() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContatoFormData>({ resolver: zodResolver(contatoSchema) });

  async function onSubmit(data: ContatoFormData) {
    await enviarContato(data);
  }

  return (
    <section className="bg-brand-black px-4 py-16 text-white md:py-24">
      <h2 className="mb-8 text-center font-display text-3xl uppercase tracking-wide md:mb-12 md:text-4xl">
        Venha treinar comigo!
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto max-w-full space-y-4 md:max-w-lg"
      >
        <div>
          <input
            {...register("nome")}
            placeholder="Nome"
            className="w-full rounded bg-neutral-900 p-3"
          />
          {errors.nome && (
            <p className="text-sm text-brand-red">{errors.nome.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("email")}
            placeholder="E-mail"
            className="w-full rounded bg-neutral-900 p-3"
          />
          {errors.email && (
            <p className="text-sm text-brand-red">{errors.email.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("telefone")}
            placeholder="Telefone"
            className="w-full rounded bg-neutral-900 p-3"
          />
          {errors.telefone && (
            <p className="text-sm text-brand-red">{errors.telefone.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("mensagem")}
            placeholder="Mensagem"
            className="w-full rounded bg-neutral-900 p-3"
          />
          {errors.mensagem && (
            <p className="text-sm text-brand-red">{errors.mensagem.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded bg-brand-red py-3 font-display uppercase tracking-wide"
        >
          {isSubmitting ? "Enviando..." : "Quero treinar"}
        </button>
        {isSubmitSuccessful && (
          <p className="text-green-500">Mensagem enviada!</p>
        )}
      </form>
    </section>
  );
}
