'use client'
import Image from 'next/image'
import Scene from '@/components/Scene'
import { motion } from 'framer-motion'

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-[radial-gradient(1200px_600px_at_10%_10%,rgba(34,211,238,.15),transparent),radial-gradient(800px_600px_at_90%_30%,rgba(168,85,247,.12),transparent)]">
      {/* Navbar */}
      <header className="sticky top-0 z-40">
        <div className="container px-5">
          <div className="mt-4 flex items-center justify-between rounded-2xl backdrop-blur bg-white/10 border border-white/20 shadow-soft px-4 py-3">
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" width={120} height={32} alt="Agentes de IA Logo" priority />
            </div>
            <nav className="hidden md:flex items-center gap-6 font-medium text-white/90">
              <a href="#servicos" className="hover:text-white">Serviços</a>
              <a href="#cases" className="hover:text-white">Cases</a>
              <a href="#faq" className="hover:text-white">FAQ</a>
              <a href="#contato" className="hover:text-white">Contato</a>
            </nav>
            <a href="#contato" className="hidden md:inline-flex rounded-xl bg-white text-black px-4 py-2 font-semibold hover:bg-white/90">Começar</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="pt-24 pb-10">
        <div className="container px-5 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.6}}
              className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
              Criação de <span className="text-brand-primary">Agentes de IA</span><br/>que vendem e atendem 24/7
            </motion.h1>
            <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.1,duration:.5}}
              className="mt-4 text-lg text-white/80">
              Bots e assistentes conectados ao seu CRM, WhatsApp (API oficial) e ferramentas de automação. Foco em ROI rápido.
            </motion.p>
            <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.2,duration:.5}}
              className="mt-6 flex flex-wrap gap-3">
              <a href="#servicos" className="rounded-xl bg-white text-black px-5 py-3 font-semibold hover:bg-white/90">Ver serviços</a>
              <a href="#cases" className="rounded-xl border border-white/30 px-5 py-3 font-semibold hover:border-white/60 text-white">Cases reais</a>
            </motion.div>
            <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span> Go‑live em 7–10 dias</div>
              <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-sky-400"></span> Integrações prontas</div>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[520px] rounded-3xl border border-white/20 bg-white/5 backdrop-blur shadow-[0_30px_80px_rgba(14,165,233,.25)] overflow-hidden">
            <Scene />
            <div className="absolute inset-x-6 bottom-6 md:bottom-8 rounded-2xl bg-black/40 backdrop-blur border border-white/20 p-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/60">Demo em tempo real</p>
                <p className="text-sm font-semibold text-white">Agente com Ações & Integrações</p>
              </div>
              <a href="#contato" className="rounded-lg px-3 py-2 text-sm font-semibold bg-white text-black hover:bg-white/90">Quero no meu negócio</a>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16 bg-white/5">
        <div className="container px-5">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Serviços</h2>
            <p className="mt-3 text-white/70">Escolha um pacote ou peça algo sob medida.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { t: 'Chatbot no WhatsApp', d: 'Atendimento 24/7 com base de conhecimento e funil de leads.', b: 'Saber mais' },
              { t: 'Agentes de IA sob medida', d: 'Assistentes para vendas, suporte, financeiro e RH, plugados no seu stack.', b: 'Solicitar proposta' },
              { t: 'Implantação express', d: 'Setup completo em poucos dias para validar rápido e gerar ROI.', b: 'Começar agora' }
            ].map((c, i) => (
              <div key={i} className="rounded-2xl bg-white/10 p-6 border border-white/20 shadow-soft">
                <h3 className="text-xl font-bold text-white">{c.t}</h3>
                <p className="mt-2 text-white/80">{c.d}</p>
                <a href="#contato" className="mt-6 inline-block rounded-xl bg-white text-black px-4 py-2 font-semibold hover:bg-white/90">{c.b}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="py-16">
        <div className="container px-5">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Cases</h2>
            <p className="mt-3 text-white/70">Exemplos do que posso construir (trocar por cases reais).</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { t: 'Bot de Vendas B2C', d: 'Leads e qualificação automática + CRM.' },
              { t: 'Suporte 24/7', d: 'Redução de tickets repetitivos.' },
              { t: 'Integração WhatsApp', d: 'Fluxos com API oficial (Meta).' }
            ].map((c, i) => (
              <article key={i} className="rounded-2xl border border-white/20 overflow-hidden bg-white/10 shadow-soft p-5">
                <h3 className="font-bold text-white">{c.t}</h3>
                <p className="text-sm text-white/80 mt-1">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white/5">
        <div className="container px-5">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Perguntas frequentes</h2>
            <p className="mt-3 text-white/70">Entenda como é trabalhar comigo.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              ['Em quanto tempo fica pronto?', 'Projetos express podem ir ao ar em 7–10 dias. Customizados variam conforme escopo.'],
              ['Integra com meu CRM?', 'Sim. Integrações com CRMs populares e via API/Webhooks.'],
              ['Como funciona a cobrança?', 'Projeto fechado por escopo ou assinatura mensal de evolução e suporte.'],
              ['Posso começar pequeno?', 'Sim, com um MVP focado no maior quick win.']
            ].map((qa, i) => (
              <details key={i} className="rounded-2xl bg-white/10 p-6 border border-white/20">
                <summary className="font-semibold cursor-pointer text-white">{qa[0]}</summary>
                <p className="mt-3 text-white/80">{qa[1]}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16">
        <div className="container px-5 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Vamos conversar</h2>
            <p className="mt-3 text-white/70">Me conte sobre seu projeto e eu retorno ainda hoje (dias úteis).</p>
            <div className="mt-6 flex flex-col gap-3 text-white/90">
              <a className="inline-flex items-center gap-2" href="mailto:contato@seudominio.com">contato@seudominio.com</a>
              <a className="inline-flex items-center gap-2" href="https://wa.me/5500000000000" target="_blank" rel="noopener">WhatsApp</a>
            </div>
          </div>
          <form
            className="rounded-2xl border border-white/20 p-6 bg-white/10 shadow-soft"
            onSubmit={(e)=>{e.preventDefault(); alert('Recebido! Já já entro em contato.'); e.currentTarget.reset();}}
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-semibold">Nome</label>
                <input className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Seu nome" required />
              </div>
              <div>
                <label className="text-sm font-semibold">E-mail</label>
                <input type="email" className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="voce@empresa.com" required />
              </div>
              <div>
                <label className="text-sm font-semibold">Mensagem</label>
                <textarea rows={4} className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Conte resumidamente seu objetivo" required />
              </div>
              <button className="rounded-xl bg-white text-black px-4 py-3 font-semibold hover:bg-white/90">Enviar</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="py-10 border-t border-white/10">
        <div className="container px-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p>© {new Date().getFullYear()} Marcos Vinicius — Agentes de IA.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-white">Início</a>
            <a href="#servicos" className="hover:text-white">Serviços</a>
            <a href="#contato" className="hover:text-white">Contato</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
