# Agentes de IA — Landing 3D (Next.js)

Uma landing moderna com herói 3D (react-three-fiber) e Tailwind.

## Requisitos
- Node 18+

## Rodar localmente
```bash
npm install
npm run dev
# abra http://localhost:3000
```

## Deploy (Vercel em 2 minutos)
1. Crie uma conta em https://vercel.com e instale a CLI: `npm i -g vercel`
2. No diretório do projeto, rode `vercel` e siga o wizard (aceite as opções padrão).
3. Para produção: `vercel --prod`

Ou importe este repositório no painel da Vercel (New Project) e selecione o framework Next.js.

## Personalização
- **Cores**: `tailwind.config.ts` (brand.primary, secondary, accent)
- **Logo**: `public/logo.svg`
- **WhatsApp/e-mail**: editar links na seção **Contato** em `app/page.tsx`.
- **3D**: `components/Scene.tsx` (torusKnot, anéis, estrelas, luzes)
