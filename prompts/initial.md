mileine: 💬 Prompt para GitHub Copilot Chat
Você é um assistente técnico especialista em Next.js e Tailwind.  
Quero que você gere um projeto **Next.js 14 + TypeScript + Tailwind CSS** completo, com a estrutura e os arquivos descritos abaixo.

**Nome do projeto:** tamie-integrativa  
**Objetivo:** blog bilíngue (português/inglês) sobre autoconhecimento e terapias integrativas, com posts em Markdown, busca, categorias, recomendações e uma timeline de jornada pessoal.

---

### ⚙️ Requisitos técnicos

- Framework: Next.js 14 (App Router)
- Linguagem: TypeScript
- Estilo: Tailwind CSS
- Conteúdo: arquivos `.md` (Markdown) em `/posts/pt/` e `/posts/en/`
- Internacionalização: suporte `pt` e `en` (i18n nativo do Next)
- Deploy: compatível com GitHub + Vercel
- Design: limpo, natural, suave, inspirado em terapias integrativas

---

### 🗂️ Estrutura de pastas



tamie-integrativa/
├── src/
│ ├── app/
│ │ ├── [lang]/
│ │ │ ├── page.tsx
│ │ │ ├── blog/
│ │ │ ├── recomendacoes/
│ │ │ ├── jornada/
│ │ │ ├── sobre/
│ │ │ └── contato/
│ ├── components/
│ │ ├── Header.tsx
│ │ ├── Footer.tsx
│ │ ├── SearchBar.tsx
│ │ ├── YouTube.tsx
│ │ └── JourneyTimeline.tsx
│ ├── data/
│ │ ├── journeyTimeline.ts
│ │ └── journeyTimeline_en.ts
│ ├── i18n/
│ │ ├── pt.json
│ │ └── en.json
│ └── lib/
│ ├── getPosts.ts
│ └── getJourneySteps.ts
├── posts/
│ ├── pt/
│ │ ├── respiracao-consciente.md
│ │ ├── energia-e-presenca.md
│ └── en/
│ ├── mindful-breathing.md
│ ├── energy-and-awareness.md
├── public/
│ └── imagens ilustrativas
├── package.json
└── README.md


---

### 🧩 Funcionalidades desejadas

1. **Home (`/[lang]/`)**
   - Apresentação breve + posts recentes + link para jornada e recomendações.

2. **Blog (`/[lang]/blog`)**
   - Leitura de posts em Markdown.
   - Busca por título e categoria.
   - Vídeos do YouTube incorporados (componente `<YouTube>`).

3. **Recomendações (`/[lang]/recomendacoes`)**
   - Lista de livros, terapias e vídeos recomendados, organizados por tipo.

4. **Jornada (`/[lang]/jornada`)**
   - Timeline de 2020 a 2025 mostrando evolução pessoal, terapias aprendidas, insights e o lançamento do blog.
   - Dados vindos de `src/data/journeyTimeline.ts` e `journeyTimeline_en.ts`.

5. **Sobre e Contato**
   - Breve texto e links.

---

### 🌍 Internacionalização (i18n)
- `pt.json` e `en.json` armazenam strings básicas (menu, footer, labels, etc.)
- URLs usam prefixo `/pt` e `/en`.

---

### 💅 Estilo visual
- Cores naturais (tons de verde, bege e lilás claro)
- Tipografia suave e legível
- Layout centrado e espaçado
- Animações leves (Framer Motion pode ser usado)

---

### 📘 Posts de exemplo

**/posts/pt/respiracao-consciente.md**
```md
---
title: "Respiração Consciente"
date: "2025-10-01"
category: "Autoconhecimento"
slug: "respiracao-consciente"
lang: "pt"
---

A prática da respiração consciente nos conecta ao momento presente e amplia a percepção corporal.


/posts/en/mindful-breathing.md

---
title: "Mindful Breathing"
date: "2025-10-01"
category: "Self-awareness"
slug: "mindful-breathing"
lang: "en"
---

Mindful breathing connects us to the present moment and enhances body awareness.

🚀 Objetivo final

Gerar todos os arquivos necessários para iniciar o projeto Tamie Integrativa em VSCode.

Após gerar:

Executar npm install

Rodar npm run dev

Testar em http://localhost:3000/pt