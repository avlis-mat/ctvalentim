# CT Valentim — Landing Page

Landing page para o **CT Valentim**, centro de treinamento personalizado em Ceilândia-DF, do treinador Samuel Valentim (CREF 016019-DF).

Construída como projeto de prática de front-end com **Next.js, React e TypeScript**.

## 🛠️ Stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** (variante Base UI)
- **React Hook Form** + **Zod** para validação de formulário
- **Nodemailer** (via Gmail SMTP) para envio do formulário de contato
- **lucide-react** para ícones
- Deploy: **Vercel**

## 📄 Seções da página

| Seção | Descrição |
|---|---|
| Hero | Banner principal com imagem responsiva (art direction mobile/desktop) |
| Método | Carrossel com as modalidades e chamada geral |
| Sobre | Processo de trabalho e diferenciais do CT |
| Apresentação do personal | Foto, credencial e bio do treinador |
| Modalidades | Accordion com descrição, objetivos e exercícios por modalidade |
| Como Funciona | Etapas do processo + filosofia do método |
| Galeria | Fotos e vídeos reais do CT, com lightbox |
| Depoimentos | Carrossel de depoimentos de alunos (foto, vídeo ou só texto) |
| Localização | Endereço, horário, WhatsApp e Instagram |
| Planos | Carrossel de planos por modalidade |
| Contato | Formulário validado, com envio real de e-mail |

## 🗂️ Modelo de dados — `lib/data.ts`

Todo o conteúdo editável do site (modalidades, exercícios, depoimentos, planos, etc.) vive num único arquivo, `lib/data.ts`, modelado como um **banco de dados relacional em memória** — não é só uma lista de objetos soltos. Isso significa que **qualquer pessoa pode atualizar o conteúdo do site editando só esse arquivo**, sem tocar em nenhum componente React.

### Por que relacional, e não um JSON aninhado

Um exercício como "Flexões" pode aparecer em mais de uma modalidade (Calistenia, Funcional, Cross Training). Se cada modalidade guardasse seus próprios exercícios "dentro" dela, editar a descrição de "Flexões" exigiria lembrar de corrigir em todo lugar que ele aparece. Em vez disso, o dado é modelado com entidades e relacionamentos, do jeito que se desenharia um diagrama ER:

```
Modalidade ──┐
             ├──< ModalidadeExercicio >──┤ Exercicio
Grupo ───────┘
```

- **`Modalidade`** — cada modalidade oferecida (Musculação, Calistenia, TAF...)
- **`Exercicio`** — cada exercício existe uma única vez
- **`Grupo`** — agrupamento visual dos exercícios (Fundamentos, Movimentos Dinâmicos...)
- **`ModalidadeExercicio`** — tabela associativa (N:N) que liga exercício ↔ modalidade ↔ grupo

Uma função (`detalhesPorModalidade`) faz o "JOIN" na hora de exibir, reconstruindo a lista agrupada a partir das três tabelas — os componentes nunca leem os arrays crus diretamente.

O mesmo padrão se repete para **`Objetivo`** (reaproveitado entre modalidades via `objetivoIds`) e para o conteúdo textual de cada modalidade (`conteudoModalidade`).

### Como editar o conteúdo

Todo o conteúdo do site fica em **`lib/data.ts`**. Alguns exemplos do que dá pra mudar sem tocar em componentes:

- **Adicionar um depoimento** → adicionar um objeto em `depoimentos` (foto, vídeo e modalidade são opcionais)
- **Adicionar uma foto/vídeo na galeria** → adicionar um objeto em `galeria`
- **Adicionar um exercício a uma modalidade existente** → adicionar em `exercicios` e depois ligar em `modalidadeExercicios`
- **Mudar o texto de apresentação de uma modalidade** → editar a entrada correspondente em `conteudoModalidade`
- **Atualizar plano/preço** → editar `planos`
- **Trocar endereço, horário, WhatsApp ou Instagram** → editar `contatoInfo`

Ícones são referenciados por nome (string, ex: `"Dumbbell"`) e resolvidos em **`lib/icon-map.ts`** — para usar um ícone novo, basta importá-lo do `lucide-react` nesse arquivo e adicioná-lo ao mapa.

## 🚀 Rodando localmente

```bash
pnpm install
pnpm dev
```

Abre em [http://localhost:3000](http://localhost:3000).

### Variáveis de ambiente

Cria um `.env.local` na raiz com:

```
GMAIL_USER=seu-email@gmail.com
GMAIL_APP_PASSWORD=sua-senha-de-app-de-16-caracteres
```

(Necessário para o envio do formulário de contato funcionar. Veja como gerar uma senha de app em [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).)

## 📦 Deploy

O projeto está configurado para deploy contínuo na [Vercel](https://vercel.com) — todo push na branch principal atualiza a versão em produção automaticamente. As variáveis de ambiente acima também precisam ser configuradas no dashboard do projeto na Vercel (Settings → Environment Variables).
