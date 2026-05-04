import { useState } from "react";
import {
  Scale,
  Briefcase,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Award,
  HandshakeIcon,
  Eye,
  Instagram,
  Linkedin,
  Facebook,
  Menu,
  X,
  ArrowRight,
  Quote,
  Paperclip,
  Pencil,
  HammerIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import logo from "@/assets/logo.png";
import heroLibrary from "@/assets/hero-library.jpg";
import lawyerPortrait from "@/assets/lawyer-portrait.jpeg";

const WHATSAPP_URL = "https://wa.me/15996548560?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";

const areas = [
  {
    icon: Scale,
    title: "Planejamento Previdenciário",
    desc: "Planejamento previdenciário para servidores públicos de Regimes Próprios de Previdência Social e segurados do Regime Geral de Previdência Social.",
  },
  {
    icon: Briefcase,
    title: "Beneficios Previdenciários",
    desc: "Atua com benefícios de aposentadorias urbanas, e, pensão por morte.",
  },
  {
    icon: ShieldCheck,
    title: "Isenção de Imposto de Renda",
    desc: "Pedidos administrativos e judiciais de isenção de imposto de renda para aposentados e pensionistas portadores de doenças graves relacionadas no art. 6º,  inciso XIV da Lei nº 7.713/88.",
  },
];

const differentials = [
  { icon: HandshakeIcon, title: "Atendimento Personalizado", desc: "Consultoria direta com a advogada responsável." },
  { icon: Clock, title: "Análise Detalhada", desc: "Análise detalhada do CNIS e histórico contributivo." },
  { icon: Award, title: "Experiência Comprovada", desc: "Experiência de mais de 30 anos como servidora pública do INSS" },
  { icon: Eye, title: "Simulações Realistas", desc: "Simulação de cenários de aposentadoria" },
  { icon: Paperclip, title: "Relatórios Personalizados", desc: "Elaboração de relatório completo e personalizado" },
  { icon: Pencil, title: "Estratégias Individualizadas", desc: "Estratégia individualizada de contribuições futuras" },
  { icon: HammerIcon, title: "Ampla Área de Atuação", desc: "Atuação nas esferas administrativa e judicial" },
];

const testimonials = [
  {
    name: "Maria Regina Carvalho Guedes",
    role: "Avaliação Google",
    quote:
      "Foi uma imensa satisfação entrar em contato com a Dra Vera! Profissional impecável, tirou minhas dúvidas e me orientou perfeitamente em tudo que eu precisava com relação á aposentadoria! Muito competente, atenciosa e dedicada!",
  },
  {
    name: "Franklin Stefanelli",
    role: "Avaliação Google",
    quote:
      "Vera é uma profissional diferenciada, humana, muito competente, prestativa e sempre disponível. Sempre que precisar de qualquer assessoria jurídica, ela será a minha advogada. Recomendo!",
  },
  {
    name: "Giovana Tozzi",
    role: "Avaliação Google ",
    quote:
      "Atendimento diferenciado da Dra Vera, muito atenciosa. Me explicou do início ao fim sobre tudo que deveria saber, me auxiliou. Profissional impecável, parabéns. Que Deus abençoe muito pela capacidade como lida com cada detalhe.",
  },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada! Entraremos em contato em breve.");
    setForm({ name: "", email: "", message: "" });
  };

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#areas", label: "Áreas" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Advocacia Vera Vieira" className="h-12 w-auto" />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-serif text-lg font-semibold text-primary">Vera Vieira</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Advocacia &amp; Consultoria Jurídica
                </span>
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild className="rounded-full">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> Fale Conosco
              </a>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="container mx-auto py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-foreground/80"
                >
                  {l.label}
                </a>
              ))}
              <Button asChild className="rounded-full w-full">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> Fale no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden"
        style={{
          backgroundImage: `var(--gradient-hero), url(${heroLibrary})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/30" />
        <div className="container mx-auto relative z-10 py-24">
          <div className="max-w-3xl text-primary-foreground animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 text-xs uppercase tracking-[0.2em] text-white/90 mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Vera Vieira
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] text-white">
              Aposentadoria Fácil<br />
              <span className="italic font-normal text-white/90">Advocacia e Consultoria Jurídica</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              Atuação técnica e personalizada para proteger seus direitos e oferecer
              segurança em cada decisão. Estratégia jurídica com transparência,
              ética e resultados.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 text-base px-8 h-14">
                <a href="#contato">
                  Agende uma Consulta <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full bg-transparent border-white/40 text-white hover:bg-white hover:text-primary text-base px-8 h-14"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-secondary rounded-2xl -z-10" />
            <img
              src={lawyerPortrait}
              alt="Advogado responsável"
              className="rounded-2xl w-full h-[520px] object-cover shadow-[var(--shadow-elegant)]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Sobre o Escritório</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-primary">
              Tradição jurídica com olhar contemporâneo
            </h2>
            <div className="mt-6 h-px w-16 bg-primary/30" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              A Advocacia Vera Vieira é um escritório dedicado à excelência técnica e ao
              atendimento humano. Com anos de experiência em causas civis,
              trabalhistas e previdenciárias, atuamos com estratégia
              clara e foco em soluções concretas para cada cliente.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Acreditamos que cada caso merece estudo aprofundado, comunicação
              direta e total transparência. Esse compromisso é a base da
              confiança construída com nossos clientes ao longo dos anos.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              O atendimento é realizado mediante agendamento prévio, com possibilidade de:
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              Atendimento presencial realizado em Sorocaba;<br />
              Atendimento online para todo o Brasil;<br />
              Formalização contratual por meio digital, com total segurança jurídica.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { n: "+10", l: "Anos de atuação" },
                { n: "+500", l: "Casos conduzidos" },
                { n: "98%", l: "Clientes satisfeitos" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-primary/20 pl-4">
                  <div className="font-serif text-3xl text-primary">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Áreas */}
      <section id="areas" className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Áreas de Atuação</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-primary">
              Soluções jurídicas completas
            </h2>
            <p className="mt-5 text-muted-foreground">
              Atendimento especializado em diferentes áreas do direito, sempre com
              dedicação, ética e estratégia personalizada.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-background rounded-2xl p-8 border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                  <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="mt-6 text-xl text-primary">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Por que nos escolher</span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-primary">
                Compromisso, técnica e resultado
              </h2>
              <div className="mt-6 h-px w-16 bg-primary/30" />
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Nosso trabalho é construído sobre pilares sólidos. Conheça os
                diferenciais que tornam a Advocacia Vera Vieira a escolha certa para a
                sua causa.
              </p>
              <Button asChild className="mt-8 rounded-full" size="lg">
                <a href="#contato">
                  Conheça nosso atendimento <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="grid gap-6">
              {differentials.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-5 p-6 rounded-2xl border border-border bg-background hover:bg-secondary/50 transition-colors duration-300"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg text-primary font-serif">{title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Depoimentos</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-white">
              A confiança de quem foi atendido
            </h2>
            <p className="mt-5 text-white/70">
              Clientes que encontraram em nosso escritório a defesa jurídica que
              precisavam.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
              >
                <Quote className="h-8 w-8 text-gold/80" />
                <p className="mt-5 text-white/90 leading-relaxed text-sm">"{t.quote}"</p>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="font-serif text-base text-white">{t.name}</div>
                  <div className="text-xs uppercase tracking-wider text-white/60 mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Contato</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-primary">
              Vamos conversar sobre o seu caso
            </h2>
            <p className="mt-5 text-muted-foreground">
              Entre em contato e agende uma consulta. Responderemos com discrição e
              agilidade.
            </p>
          </div>

          <div className="mt-16 grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 bg-secondary rounded-2xl p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Nome</label>
                  <Input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Seu nome completo"
                    className="mt-2 h-12 rounded-lg bg-background border-border"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Email</label>
                  <Input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="seu@email.com"
                    className="mt-2 h-12 rounded-lg bg-background border-border"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Mensagem</label>
                  <Textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Conte brevemente sobre o seu caso"
                    rows={5}
                    className="mt-2 rounded-lg bg-background border-border resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="rounded-full w-full sm:w-auto px-10 h-12">
                  Enviar mensagem <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-6 rounded-2xl bg-primary text-primary-foreground hover:bg-primary-glow transition-colors"
              >
                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/70">Atendimento direto</div>
                  <div className="font-serif text-lg">Falar no WhatsApp</div>
                </div>
              </a>

              {[
                { icon: Phone, label: "Telefone", value: "(15) 99654-8560" },
                { icon: Mail, label: "Email", value: "vieiraver@gmail.com" },
                { icon: MapPin, label: "Endereço", value: "Rua Manoel Ortiz Rodrigues, 175 - Cond. Ibiti Royal Park - Sorocaba/SP" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 p-6 rounded-2xl border border-border">
                  <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                    <div className="text-sm text-foreground font-medium mt-0.5">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground/80">
        <div className="container mx-auto py-16">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Advocacia Vera Vieira" className="h-12 w-auto brightness-0 invert" />
                <div className="font-serif text-xl text-white">Advocacia Vera Vieira</div>
              </div>
              <p className="mt-5 text-sm text-white/60 max-w-md leading-relaxed">
                Escritório de advocacia comprometido com a excelência técnica, a
                ética profissional e a defesa estratégica dos interesses de cada cliente.
              </p>
              <div className="mt-6 flex gap-3">
                {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="h-10 w-10 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors"
                    aria-label="Rede social"
                  >
                    <Icon className="h-4 w-4 text-white" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-white font-medium">Navegação</div>
              <ul className="mt-5 space-y-3 text-sm">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-white/60 hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-white font-medium">Contato</div>
              <ul className="mt-5 space-y-3 text-sm text-white/60">
                <li>(15) 99654-8560</li>
                <li>vieiraver@gmail.com</li>
                <li>Rua Manoel Ortiz Rodrigues, 175 - Cond. Ibiti Royal Park - Sorocaba/SP</li>
                <li className="pt-3 text-white/40 text-xs">OAB/SP 347.139</li>
              </ul> 
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <div>© {new Date().getFullYear()} Advocacia Vera Vieira. Todos os direitos reservados.</div>
            <div>Conteúdo de caráter informativo — em conformidade com o Provimento 205/2021 OAB.</div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-elegant)] flex items-center justify-center hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
};

export default Index;
