import Image from "next/image";
import {
  Menu,
  User,
  Phone,
  PenTool,
  Briefcase,
  Glasses,
  Bug,
  BrainCircuit,
  Globe,
  Server,
  Mail,
  MapPin,
  Download,
  ChevronRight,
  Award,
  Languages,
  Cpu,
  Terminal,
  Shield,
  Gamepad2,
  BookOpen,
  GraduationCap,
  Heart,
  Zap,
  Search,
  Code,
  Database,
  Wifi,
  HardDrive,
  MessageSquare,
  Users,
  Target,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  Wrench,
  Microscope,
  FlaskConical,
  Sparkles,
} from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  LorePopup,
  EvocatiBadge,
  AnimatedStat,
  ExpandableSection,
  PortfolioCard,
} from "./components";
import { ScrollToTop } from "./scroll-top";

/* ── brand SVG icons ─────────────────────────────────── */
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

/* ── sidebar nav icons ─────────────────────────────────── */
const sidebarIcons = [
  { icon: User, label: "About", href: "#about" },
  { icon: Phone, label: "Contact", href: "#contact" },
  { icon: PenTool, label: "Skills", href: "#whatidid" },
  { icon: Code, label: "Portfolio", href: "#portfolio" },
  { icon: Briefcase, label: "Experience", href: "#experience" },
  { icon: Glasses, label: "Certifications", href: "#certifications" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#111]">
      <ScrollToTop />
      {/* ── SIDEBAR ──────────────────────────────────── */}
      <aside className="fixed left-0 top-0 z-50 flex h-screen w-16 flex-col items-center bg-[#8b5cf6] py-6">
        <button aria-label="Menu" className="mb-auto cursor-pointer">
          <Menu className="h-6 w-6 text-white" />
        </button>
        <nav className="flex flex-col items-center gap-8">
          {sidebarIcons.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-white/70 transition-colors hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </nav>
        <div className="mt-auto" />
      </aside>

      {/* ── MAIN CONTENT WRAPPER ─────────────────────── */}
      <div className="ml-16 flex min-h-screen w-full">
        {/* ── PORTRAIT CARD ────────────────────────────── */}
        <div className="relative hidden w-[380px] shrink-0 lg:block">
          <div className="portrait-glow fixed left-16 top-0 flex h-screen w-[380px] flex-col">
            <div className="relative flex-1">
              <img
                src="/portrait.png"
                alt="Georgi Glavchev"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div className="portrait-overlay absolute inset-0" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#111] via-[#111]/90 to-transparent px-8 pb-8 pt-20">
              <h1 className="text-3xl font-bold text-white">Georgi</h1>
              <h1 className="text-3xl font-bold text-white">Glavchev</h1>
              <p className="mt-1 text-sm font-medium text-[#8b5cf6]">
                Junior QA Engineer & AI Enthusiast
              </p>
              <div className="mt-4 flex items-center gap-4">
                <a href="mailto:georgi.glavchev@icloud.com" aria-label="Email" className="text-white/60 transition-colors hover:text-white"><Mail className="h-5 w-5" /></a>
                <a href="https://www.linkedin.com/in/george-g-020555402/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/60 transition-colors hover:text-white"><LinkedinIcon className="h-5 w-5" /></a>
                <a href="https://github.com/GlaX-prog" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white/60 transition-colors hover:text-white"><GithubIcon className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* ── SCROLLABLE CONTENT ─────────────────────── */}
        <main className="parallax-stars relative flex-1 px-8 py-16 lg:px-16">

          {/* ── MOBILE HEADER ────────────────────────── */}
          <div className="mb-12 flex flex-col items-center lg:hidden">
            <div className="portrait-glow relative mb-6 h-64 w-52 overflow-hidden rounded-2xl">
              <img src="/portrait.png" alt="Georgi Glavchev" className="absolute inset-0 h-full w-full object-cover object-top" />
              <div className="portrait-overlay absolute inset-0" />
            </div>
            <h1 className="text-2xl font-bold text-white">Georgi Glavchev</h1>
            <p className="text-sm text-[#8b5cf6]">Junior QA Engineer & AI Enthusiast</p>
          </div>

          {/* ══════════════════════════════════════════════
              SECTION: ABOUT ME
              ══════════════════════════════════════════════ */}
          <section id="about" className="mb-20">
            <FadeIn>
              <h2 className="mb-4 text-5xl font-black text-white">about me</h2>
              <div className="mb-2 h-1 w-20 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#bc13fe]" />
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mb-6 flex flex-wrap gap-3 text-sm font-medium text-[#8b5cf6]">
                <span className="rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-3 py-1">27 years old</span>
                <span className="rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-3 py-1">Pardubice / Praha</span>
                <span className="rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-3 py-1">Czech Republic</span>
                <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-green-400">Open to work</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mb-6 rounded-xl border border-[#8b5cf6]/20 bg-[#8b5cf6]/5 p-4">
                <p className="flex items-start gap-2 text-sm text-[#8b5cf6]">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>I&apos;m a junior. I don&apos;t pretend to be a senior. I&apos;m a clean, unshaped canvas with a huge hunger to learn and grow. What I lack in years of experience, I make up for with initiative, curiosity, and the kind of stubbornness that makes you track down a firmware bug from a helpdesk chair.</span>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="max-w-2xl text-lg leading-8 text-white/70">
                Junior Software Tester with a technical background in telecommunications. I&apos;m at the beginning of my QA journey, but I study every single day. Literally every day, I have a dedicated block of hours for academics built into my schedule. I&apos;m currently working through ISTQB Foundation Level, learning Postman and SQL, and following Harvard&apos;s CS50.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
                I run a home lab with a personal <span className="font-semibold text-[#8b5cf6]">27-billion-parameter AI model</span> on a Windows Server with 48GB of RAM, complete with a custom UI, persistent memory, autonomous skills, and custom system prompts. I don&apos;t just use AI, I tinker with it, break it, and learn from it.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
                At my previous job I was awarded <span className="font-bold text-[#8b5cf6]">Employee of the Year 2025</span> by O2 / Nordic Telecom. Not because I was the most experienced person in the room, but because I found a critical firmware defect across <span className="font-semibold text-white">7,000+ devices</span> that everyone else had missed, and I built a workaround that reduced incidents by 70%. Sometimes being junior means you look at things with fresh eyes.
              </p>
            </FadeIn>

            {/* Stats row */}
            <FadeIn delay={0.6}>
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <AnimatedStat value={7000} suffix="+" label="Devices impacted by bug fix" />
                <AnimatedStat value={70} suffix="%" label="Incident reduction" />
                <AnimatedStat value={27} suffix="B" label="AI model parameters" />
                <AnimatedStat value={3} label="Languages spoken" />
              </div>
            </FadeIn>

            {/* Badges row */}
            <FadeIn delay={0.7}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <EvocatiBadge />
                <LorePopup
                  trigger={
                    <span className="inline-flex items-center gap-2 rounded-lg border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-4 py-2 text-sm font-bold text-[#8b5cf6] transition-colors hover:bg-[#8b5cf6]/20">
                      <Award className="h-4 w-4" />
                      Employee of the Year 2025
                    </span>
                  }
                  title="Employee of the Year 2025 - O2 / Nordic Telecom"
                >
                  <p>
                    I was recognized by O2 and Nordic Telecom for going far beyond my standard helpdesk duties. I independently identified a firmware-level defect in the Greenpacket H5 5G NR outdoor units, a bug at the HNAT/conntrack level that caused the packet forwarding pipeline to freeze every 10-20 hours.
                  </p>
                  <p className="mt-3">
                    This wasn&apos;t a &quot;restart and escalate&quot; situation. I performed deep log analysis, reviewed KPI graphs, replicated the issue across multiple units, and wrote a full technical report that was accepted by both O2 and the hardware manufacturer as the official documentation of the defect.
                  </p>
                  <p className="mt-3">
                    I then engineered a bridge-mode workaround that completely eliminated the freezing, reducing outages from every few hours to approximately once every 4-7 days. This workaround became the official remediation procedure.
                  </p>
                </LorePopup>

                <LorePopup
                  trigger={
                    <span className="inline-flex items-center gap-2 rounded-lg border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-4 py-2 text-sm font-bold text-[#8b5cf6] transition-colors hover:bg-[#8b5cf6]/20">
                      <BookOpen className="h-4 w-4" />
                      Daily Student
                    </span>
                  }
                  title="Lifelong Learner - Daily Study Habit"
                >
                  <p>
                    Every single day of my life has a dedicated section for academics and self-study. This isn&apos;t occasional weekend learning, it&apos;s a structured, daily habit. My current study areas include:
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 h-4 w-4 shrink-0 text-[#8b5cf6]" />ISTQB Foundation Level (CTFL) certification preparation</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 h-4 w-4 shrink-0 text-[#8b5cf6]" />Postman API testing & SQL databases</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 h-4 w-4 shrink-0 text-[#8b5cf6]" />CS50, Harvard&apos;s Introduction to Computer Science</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 h-4 w-4 shrink-0 text-[#8b5cf6]" />Machine Learning, AI prompt engineering, and model customization</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 h-4 w-4 shrink-0 text-[#8b5cf6]" />Networking fundamentals and infrastructure</li>
                  </ul>
                </LorePopup>
              </div>
            </FadeIn>

            {/* Download CV */}
            <FadeIn delay={0.8}>
              <a
                href="/cv.pdf"
                download="Georgi_Glavchev_CV.pdf"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/40 hover:brightness-110"
              >
                <Download className="h-5 w-5" />
                Download My CV
              </a>
            </FadeIn>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION: WHAT I'VE DONE SO FAR
              ══════════════════════════════════════════════ */}
          <section id="whatidid" className="mb-20">
            <FadeIn>
              <h2 className="mb-2 text-5xl font-black text-white">what I&apos;ve done so far</h2>
              <div className="mb-2 h-1 w-20 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#bc13fe]" />
              <p className="mb-8 text-sm text-white/40">I&apos;m just getting started, but here&apos;s what I&apos;ve already gotten my hands on.</p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <StaggerItem>
                <div className="group h-full rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-[#8b5cf6]/40 hover:bg-white/[0.08]">
                  <Bug className="mb-4 h-10 w-10 text-[#8b5cf6] transition-transform group-hover:scale-110" />
                  <h3 className="mb-2 text-xl font-bold text-white">QA & Testing (Junior)</h3>
                  <p className="text-sm leading-6 text-white/60">
                    I know the basics of SDLC and STLC. I&apos;ve done test case creation and bug reporting using Jira. I performed UAT for internal CRM systems and web portals, and did black-box testing of hardware products like routers and antennas. Still learning the ropes, but I already managed to trace a firmware-level bug that senior engineers had missed.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="group h-full rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-[#8b5cf6]/40 hover:bg-white/[0.08]">
                  <BrainCircuit className="mb-4 h-10 w-10 text-[#8b5cf6] transition-transform group-hover:scale-110" />
                  <h3 className="mb-2 text-xl font-bold text-white">AI / ML (Hobbyist)</h3>
                  <p className="text-sm leading-6 text-white/60">
                    I&apos;m not a machine learning engineer. But I run a 27B-parameter Gemma 4 model on a home server with 48GB RAM, built a custom chat UI with persistent memory, and created skills like an AI Council voting system, internet search, and a code interpreter. I learn by doing, even if I&apos;m still at the beginning.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="group h-full rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-[#8b5cf6]/40 hover:bg-white/[0.08]">
                  <Globe className="mb-4 h-10 w-10 text-[#8b5cf6] transition-transform group-hover:scale-110" />
                  <h3 className="mb-2 text-xl font-bold text-white">Web Development (Basics)</h3>
                  <p className="text-sm leading-6 text-white/60">
                    I know the basics of HTML and CSS. I built a website from scratch for a real estate agency as a volunteer, handled the SEO, and did API integration. I&apos;m not a developer by trade, but I can get things done when they need doing.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="group h-full rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-[#8b5cf6]/40 hover:bg-white/[0.08]">
                  <Server className="mb-4 h-10 w-10 text-[#8b5cf6] transition-transform group-hover:scale-110" />
                  <h3 className="mb-2 text-xl font-bold text-white">IT Infrastructure (Hands-on)</h3>
                  <p className="text-sm leading-6 text-white/60">
                    I&apos;ve set up full IT environments from the ground up: workstations, networking, security cameras, Wi-Fi, backups, firewalls. Not at enterprise scale, but for small businesses and my own home lab. I enjoy getting my hands dirty with hardware and systems.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION: PORTFOLIO
              ══════════════════════════════════════════════ */}
          <section id="portfolio" className="mb-20">
            <FadeIn>
              <h2 className="mb-2 text-5xl font-black text-white">portfolio</h2>
              <div className="mb-2 h-1 w-20 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#bc13fe]" />
              <p className="mb-8 text-sm text-white/40">Things I built. Click to check them out.</p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <StaggerItem>
                <PortfolioCard
                  image="/coldculture.jpg"
                  title="ColdCulture"
                  description="Website for a band named ColdCulture - 2026"
                  websiteUrl="https://cold-culture-web.vercel.app"
                  githubUrl="https://github.com/GlaX-prog/ColdCultureWeb"
                />
              </StaggerItem>
            </StaggerContainer>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION: AI HOME LAB (SHOWCASE)
              ══════════════════════════════════════════════ */}
          <section id="homelab" className="mb-20">
            <FadeIn>
              <h2 className="mb-2 text-5xl font-black text-white">ai home lab</h2>
              <div className="mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#bc13fe]" />
              <p className="mb-8 max-w-2xl text-lg text-white/50">
                A self-hosted AI environment I built to learn by doing. Real hardware, real model, real tinkering.
              </p>
            </FadeIn>

            {/* Infrastructure card */}
            <FadeIn delay={0.1}>
              <div className="glow-card mb-8 rounded-2xl border border-[#8b5cf6]/20 bg-gradient-to-br from-[#1a1a2e] to-[#16162a] p-8">
                <div className="mb-6 flex items-center gap-3">
                  <Cpu className="h-8 w-8 text-[#8b5cf6]" />
                  <h3 className="text-2xl font-bold text-white">Infrastructure</h3>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <HardDrive className="mb-2 h-6 w-6 text-[#8b5cf6]" />
                    <h4 className="font-bold text-white">Hardware</h4>
                    <p className="mt-1 text-sm text-white/50">Windows Server, 48GB RAM, dedicated machine running 24/7 for model inference</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <BrainCircuit className="mb-2 h-6 w-6 text-[#8b5cf6]" />
                    <h4 className="font-bold text-white">Model</h4>
                    <p className="mt-1 text-sm text-white/50">Google Gemma 4 with 27 billion parameters, running locally via command line, upgraded from Gemma 3</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <Terminal className="mb-2 h-6 w-6 text-[#8b5cf6]" />
                    <h4 className="font-bold text-white">Interface</h4>
                    <p className="mt-1 text-sm text-white/50">Custom chat UI connected to the CMD-based model, full conversation interface with memory and settings</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Custom Skills */}
            <FadeIn delay={0.2}>
              <h3 className="mb-4 text-xl font-bold text-white">Custom-Built AI Skills</h3>
            </FadeIn>
            <StaggerContainer className="space-y-4">
              <StaggerItem>
                <ExpandableSection
                  title="The AI Council"
                  preview="Multiple AI models debate and vote on the best response"
                >
                  <p>One of my most ambitious custom skills. The AI Council summons multiple AI model perspectives to evaluate a single question or problem. Each &quot;council member&quot; provides their independent opinion and reasoning, and then they vote on the best response.</p>
                  <p className="mt-3">This isn&apos;t just asking the same model multiple times. It&apos;s a structured deliberation system where different viewpoints are weighed against each other. Think of it as a panel of experts having a debate before giving you their consensus answer. It&apos;s particularly useful for complex decisions where there isn&apos;t one obvious right answer.</p>
                </ExpandableSection>
              </StaggerItem>

              <StaggerItem>
                <ExpandableSection
                  title="Internet Search Skill"
                  preview="The AI can browse the web and pull real-time information"
                >
                  <p>I built an internet search integration so my local AI model isn&apos;t trapped in its training data. It can go online, search for current information, pull relevant results, and incorporate real-time data into its responses.</p>
                  <p className="mt-3">This transforms a static local model into something that can answer questions about today&apos;s news, current documentation, or any topic that requires up-to-date information.</p>
                </ExpandableSection>
              </StaggerItem>

              <StaggerItem>
                <ExpandableSection
                  title="Code Interpreter"
                  preview="Execute and test code directly within the AI conversation"
                >
                  <p>A skill that allows the AI to write, execute, and iterate on code in real time. Instead of just suggesting code snippets, it can actually run them, see the output, and adjust based on results.</p>
                  <p className="mt-3">Combined with the custom memory system, it can remember past coding sessions, recall preferences, and build on previous work. All running locally on my hardware with no data leaving my network.</p>
                </ExpandableSection>
              </StaggerItem>

              <StaggerItem>
                <ExpandableSection
                  title="Persistent Memory & Custom Prompts"
                  preview="The AI remembers conversations and adapts to your needs"
                >
                  <p>The entire system has a persistent memory layer. It remembers past conversations, learned preferences, and accumulated context across sessions. Combined with fully customizable system prompts, I can tailor the AI&apos;s behavior, personality, and expertise for different use cases.</p>
                  <p className="mt-3">Custom model configurations allow me to switch between different fine-tuned behaviors depending on whether I&apos;m debugging code, doing research, or brainstorming. It&apos;s essentially a personalized AI assistant that actually knows me.</p>
                </ExpandableSection>
              </StaggerItem>
            </StaggerContainer>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION: THE BUG STORY
              ══════════════════════════════════════════════ */}
          <section id="bugstory" className="mb-20">
            <FadeIn>
              <h2 className="mb-2 text-5xl font-black text-white">the bug that changed everything</h2>
              <div className="mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#bc13fe]" />
              <p className="mb-10 max-w-2xl text-lg text-white/50">
                How a junior helpdesk specialist found a critical 5G firmware defect that an entire engineering chain had missed, and built the fix himself.
              </p>
            </FadeIn>

            {/* Timeline */}
            <div className="relative">
              <div className="timeline-line absolute left-6 top-0 h-full w-0.5 sm:left-8" />

              {/* Step 1: Discovery */}
              <FadeIn delay={0.1}>
                <div className="relative mb-10 pl-16 sm:pl-20">
                  <div className="absolute left-4 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#8b5cf6] sm:left-6">
                    <Search className="h-3 w-3 text-white" />
                  </div>
                  <span className="mb-2 inline-block rounded-full bg-[#8b5cf6]/20 px-3 py-1 text-xs font-medium text-[#8b5cf6]">Discovery</span>
                  <h3 className="text-xl font-bold text-white">The Pattern Emerges</h3>
                  <p className="mt-2 leading-7 text-white/60">
                    Working as a helpdesk specialist at Nordic Telecom / O2, I started noticing a pattern in customer tickets. Greenpacket H5 outdoor 5G NR units were losing internet connectivity after 10-20 hours of operation, but they appeared perfectly fine on our monitoring systems. The devices reported as online, responded to management commands, but customers had zero internet access. The only fix was a hard restart.
                  </p>
                </div>
              </FadeIn>

              {/* Step 2: Investigation */}
              <FadeIn delay={0.2}>
                <div className="relative mb-10 pl-16 sm:pl-20">
                  <div className="absolute left-4 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#8b5cf6] sm:left-6">
                    <Microscope className="h-3 w-3 text-white" />
                  </div>
                  <span className="mb-2 inline-block rounded-full bg-[#8b5cf6]/20 px-3 py-1 text-xs font-medium text-[#8b5cf6]">Investigation, June to August 2024</span>
                  <h3 className="text-xl font-bold text-white">Deep Dive into the Root Cause</h3>
                  <p className="mt-2 leading-7 text-white/60">
                    I went beyond my job description. I performed detailed log analysis and KPI graph reviews across multiple affected units. The data revealed that the packet forwarding pipeline was freezing, likely at the hardware NAT (HNAT) / conntrack level. TCP and UDP requests from LAN to WAN simply stopped forwarding, while the management layer remained fully operational. This was happening on both firmware version 39 and 40, confirming it wasn&apos;t a version-specific regression.
                  </p>
                </div>
              </FadeIn>

              {/* Step 3: Scale */}
              <FadeIn delay={0.3}>
                <div className="relative mb-10 pl-16 sm:pl-20">
                  <div className="absolute left-4 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#8b5cf6] sm:left-6">
                    <BarChart3 className="h-3 w-3 text-white" />
                  </div>
                  <span className="mb-2 inline-block rounded-full bg-red-500/20 px-3 py-1 text-xs font-medium text-red-400">Massive Scale</span>
                  <h3 className="text-xl font-bold text-white">7,000+ Units Affected</h3>
                  <p className="mt-2 leading-7 text-white/60">
                    The scope was enormous. There were approximately 7,000 GPH5 units in production, compared to about 3,000 TP-Link units. The GPH5 units were generating 100-150 new sessions per hour versus only around 50 for TP-Link, a clear statistical anomaly showing massively higher restart/failure rates. The helpdesk was processing <span className="font-semibold text-white">10+ tickets per day</span> directly caused by this single defect, the majority of all helpdesk incidents.
                  </p>
                </div>
              </FadeIn>

              {/* Step 4: The Fix */}
              <FadeIn delay={0.4}>
                <div className="relative mb-10 pl-16 sm:pl-20">
                  <div className="absolute left-4 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#8b5cf6] sm:left-6">
                    <Wrench className="h-3 w-3 text-white" />
                  </div>
                  <span className="mb-2 inline-block rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">The Workaround</span>
                  <h3 className="text-xl font-bold text-white">Bridge Mode: 70% Incident Reduction</h3>
                  <p className="mt-2 leading-7 text-white/60">
                    Since the root cause was at the HNAT/conntrack level and we lacked superadmin CLI access to implement a direct fix (like flushing conntrack or restarting netfilter), I engineered an alternative: switching units to bridge mode. This bypassed the hardware NAT entirely, moving routing to the customer&apos;s CPE. The results were dramatic. Outages went from every few hours to approximately once every 4-7 days, an order-of-magnitude improvement in service availability.
                  </p>
                </div>
              </FadeIn>

              {/* Step 5: Recognition */}
              <FadeIn delay={0.5}>
                <div className="relative mb-10 pl-16 sm:pl-20">
                  <div className="absolute left-4 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#8b5cf6] sm:left-6">
                    <Award className="h-3 w-3 text-white" />
                  </div>
                  <span className="mb-2 inline-block rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-medium text-yellow-400">Recognition</span>
                  <h3 className="text-xl font-bold text-white">Official Adoption & Employee of the Year</h3>
                  <p className="mt-2 leading-7 text-white/60">
                    The technical documentation I wrote was accepted by both O2 and the hardware manufacturer (Greenpacket) as the official report and remediation procedure. The bridge-mode workaround became standard protocol. My work was validated internally by senior engineers, and I was awarded <span className="font-bold text-[#8b5cf6]">Employee of the Year 2025</span> by O2 / Nordic Telecom. A junior helpdesk specialist doing firmware-level root cause analysis. That&apos;s the kind of person I am.
                  </p>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION: WORK EXPERIENCE
              ══════════════════════════════════════════════ */}
          <section id="experience" className="mb-20">
            <FadeIn>
              <h2 className="mb-2 text-5xl font-black text-white">experience</h2>
              <div className="mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#bc13fe]" />
            </FadeIn>

            <StaggerContainer className="space-y-6">
              {/* Nordic Telecom */}
              <StaggerItem>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#8b5cf6]/20 px-3 py-1 text-xs font-medium text-[#8b5cf6]">2021 to 2026</span>
                    <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-medium text-yellow-400">Employee of the Year 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Helpdesk Specialist</h3>
                  <p className="mb-6 text-[#8b5cf6]">Nordic Telecom / O2</p>

                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Bug className="mt-1 h-5 w-5 shrink-0 text-[#8b5cf6]" />
                      <div>
                        <h4 className="font-semibold text-white">Critical Bug Discovery</h4>
                        <p className="text-sm text-white/60">Independently identified a firmware-level defect in Greenpacket H5 5G NR outdoor units (HNAT/conntrack packet forwarding pipeline freeze). Traced the root cause through log analysis and KPI graph reviews. Wrote the official technical documentation accepted by O2 and the hardware manufacturer.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Wrench className="mt-1 h-5 w-5 shrink-0 text-[#8b5cf6]" />
                      <div>
                        <h4 className="font-semibold text-white">Workaround Engineering</h4>
                        <p className="text-sm text-white/60">Designed bridge-mode workaround that immediately reduced incidents by 70% across 7,000+ units. Adopted as the official remediation procedure by the organization.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <FlaskConical className="mt-1 h-5 w-5 shrink-0 text-[#8b5cf6]" />
                      <div>
                        <h4 className="font-semibold text-white">User Acceptance Testing</h4>
                        <p className="text-sm text-white/60">Performed UAT for new internal CRM systems and web portals before deployment, with a focus on front-end functionality. Black-box tested new hardware products (routers, antennas) from end-user and technician perspectives.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Target className="mt-1 h-5 w-5 shrink-0 text-[#8b5cf6]" />
                      <div>
                        <h4 className="font-semibold text-white">Bug Reporting & Tracking</h4>
                        <p className="text-sm text-white/60">Systematic bug reporting into the Jira ticketing system with detailed reproduction steps, severity classification, and proposed remediation strategies.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              {/* Volunteer */}
              <StaggerItem>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                  <span className="mb-4 inline-block rounded-full bg-[#8b5cf6]/20 px-3 py-1 text-xs font-medium text-[#8b5cf6]">2020 to 2021</span>
                  <h3 className="text-2xl font-bold text-white">Web Dev & IT Admin</h3>
                  <p className="mb-6 text-[#8b5cf6]">Real Estate Agent Martin Socha (Volunteer)</p>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Globe className="mt-1 h-5 w-5 shrink-0 text-[#8b5cf6]" />
                      <div>
                        <h4 className="font-semibold text-white">Full Website Build</h4>
                        <p className="text-sm text-white/60">Complete creation of the agency&apos;s website from scratch. Ongoing management, SEO optimization for Google (speed, performance, security), and API integration.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Shield className="mt-1 h-5 w-5 shrink-0 text-[#8b5cf6]" />
                      <div>
                        <h4 className="font-semibold text-white">Security & Infrastructure</h4>
                        <p className="text-sm text-white/60">Robust firewall setup, full IT infrastructure deployment: workstations, security cameras, Wi-Fi, backup systems. Facebook advertising and online platform administration.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION: WHAT I KNOW (HONEST)
              ══════════════════════════════════════════════ */}
          <section id="skills" className="mb-20">
            <FadeIn>
              <h2 className="mb-2 text-5xl font-black text-white">what I know</h2>
              <div className="mb-2 h-1 w-20 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#bc13fe]" />
              <p className="mb-8 text-sm text-white/40">Honest assessment. I mark what I actually know, not what I wish I knew.</p>
            </FadeIn>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* What I can do */}
              <FadeIn delay={0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-[#8b5cf6]">
                    <CheckCircle className="h-5 w-5" /> What I Can Do
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Bug reporting with detailed reproduction steps",
                      "Root cause analysis (proven at firmware level)",
                      "Technical documentation that engineers accept",
                      "Test case creation (basics)",
                      "UAT and black-box testing",
                      "Jira ticketing and bug tracking",
                      "Basic HTML and CSS",
                      "Website creation and maintenance",
                      "Technical SEO optimization",
                      "IT infrastructure setup (small-scale)",
                      "AI model setup and customization",
                      "Prompt engineering (advanced)",
                    ].map((s) => (
                      <div key={s} className="flex items-start gap-2 text-sm text-white/70">
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#8b5cf6]" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* What I'm learning */}
              <FadeIn delay={0.2}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-[#8b5cf6]">
                    <GraduationCap className="h-5 w-5" /> What I&apos;m Learning Right Now
                  </h3>
                  <div className="space-y-3">
                    {[
                      "ISTQB Foundation Level (CTFL) certification",
                      "Postman for API testing",
                      "SQL for database queries",
                      "Testing pipelines and automation basics",
                      "CS50 from Harvard (computer science foundations)",
                      "Networking fundamentals",
                      "Machine learning concepts",
                      "Swift and Java (basics)",
                      "Algorithm fundamentals",
                    ].map((s) => (
                      <div key={s} className="flex items-start gap-2 text-sm text-white/70">
                        <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Soft Skills */}
              <FadeIn delay={0.3}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-[#8b5cf6]">
                    <Users className="h-5 w-5" /> Soft Skills
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: Microscope, title: "Analytical Thinking", desc: "I find root causes, not just symptoms. The 5G bug story proves it." },
                      { icon: MessageSquare, title: "Technical Communication", desc: "I can explain firmware-level issues in a way that developers, managers, and manufacturers all understand." },
                      { icon: TrendingUp, title: "Initiative", desc: "I go beyond what&apos;s asked. If there&apos;s a problem that needs solving, I won&apos;t wait for someone else to do it." },
                      { icon: GraduationCap, title: "Hunger to Learn", desc: "Daily structured study schedule. Not a phase. This is just how I live." },
                      { icon: Heart, title: "Volunteering Spirit", desc: "I volunteer my time and skills. Not for the CV, because I genuinely enjoy helping." },
                    ].map(({ icon: Icon, title, desc }) => (
                      <div key={title} className="flex gap-3">
                        <Icon className="mt-1 h-5 w-5 shrink-0 text-[#8b5cf6]" />
                        <div>
                          <h4 className="font-semibold text-white">{title}</h4>
                          <p className="text-sm text-white/50">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Tools I've touched */}
              <FadeIn delay={0.4}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-[#8b5cf6]">
                    <Wrench className="h-5 w-5" /> Tools I&apos;ve Touched
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Jira", "HTML", "CSS", "SQL (learning)", "Postman (learning)", "Windows Server", "Gemma 4 (27B)", "Custom AI UI", "Technical SEO", "Google Analytics", "Facebook Ads", "Firewall Admin"].map((s) => (
                      <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70">{s}</span>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-white/30">I list only what I&apos;ve actually used. Basics in most of these. Honest.</p>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION: CERTIFICATIONS
              ══════════════════════════════════════════════ */}
          <section id="certifications" className="mb-20">
            <FadeIn>
              <h2 className="mb-2 text-5xl font-black text-white">certifications</h2>
              <div className="mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#bc13fe]" />
            </FadeIn>

            <StaggerContainer className="space-y-3">
              {[
                { name: "ISTQB Tester Foundation Level (CTFL)", status: "Studying", statusColor: "bg-[#8b5cf6]/20 text-[#8b5cf6]" },
                { name: "Postman, SQL & Testing Pipeline", status: "Studying", statusColor: "bg-[#8b5cf6]/20 text-[#8b5cf6]" },
                { name: "CS50, Introduction to Computer Science (Harvard)", status: "Monitoring", statusColor: "bg-blue-500/20 text-blue-400" },
                { name: "5-Day Coding Challenge, Code Institute", status: "2024", statusColor: "bg-green-500/20 text-green-400" },
                { name: "Technical SEO Certificate", status: "2022", statusColor: "bg-green-500/20 text-green-400" },
                { name: "Understanding Business, Project Management Institute", status: "Complete", statusColor: "bg-green-500/20 text-green-400" },
                { name: "Programming Basics (with certificate)", status: "Complete", statusColor: "bg-green-500/20 text-green-400" },
                { name: "Self-Study: Networking", status: "Ongoing", statusColor: "bg-yellow-500/20 text-yellow-400" },
              ].map(({ name, status, statusColor }) => (
                <StaggerItem key={name}>
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition-all hover:border-[#8b5cf6]/30">
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 shrink-0 text-[#8b5cf6]" />
                      <span className="text-sm text-white/80">{name}</span>
                    </div>
                    <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${statusColor}`}>
                      {status}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION: LANGUAGES
              ══════════════════════════════════════════════ */}
          <section className="mb-20">
            <FadeIn>
              <h2 className="mb-2 text-5xl font-black text-white">languages</h2>
              <div className="mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#bc13fe]" />
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex flex-wrap gap-6">
                {[
                  { lang: "English", level: "C2", pct: 98 },
                  { lang: "Czech", level: "C2", pct: 98 },
                  { lang: "Bulgarian", level: "C1", pct: 85 },
                ].map(({ lang, level, pct }) => (
                  <div key={lang} className="flex-1 rounded-xl border border-white/10 bg-white/5 p-5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="flex items-center gap-2 font-bold text-white">
                        <Languages className="h-4 w-4 text-[#8b5cf6]" />
                        {lang}
                      </span>
                      <span className="rounded-full bg-[#8b5cf6]/20 px-3 py-1 text-xs font-bold text-[#8b5cf6]">{level}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-[#8b5cf6]" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION: HOBBIES & LORE
              ══════════════════════════════════════════════ */}
          <section className="mb-20">
            <FadeIn>
              <h2 className="mb-2 text-5xl font-black text-white">beyond the code</h2>
              <div className="mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#bc13fe]" />
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <StaggerItem>
                <LorePopup
                  className="block h-full"
                  trigger={
                    <div className="flex h-full flex-col items-center rounded-xl border border-white/10 bg-white/5 p-6 text-center transition-all hover:border-[#8b5cf6]/40 hover:bg-white/[0.08]">
                      <Gamepad2 className="mb-3 h-10 w-10 text-[#8b5cf6]" />
                      <h3 className="mb-2 font-bold text-white">Gamer</h3>
                      <p className="text-sm text-white/50">Click to discover my gaming lore</p>
                    </div>
                  }
                  title="Gaming, A Lifelong Passion"
                >
                  <p>Gaming has been a core part of my life for as long as I can remember. I play a LOT of video games. It&apos;s not just entertainment, it&apos;s how I developed my analytical thinking, problem-solving skills, and attention to detail.</p>
                  <p className="mt-3">One of my biggest achievements in the gaming world is being selected as an <span className="font-semibold text-[#bc13fe]">Evocati tester for Star Citizen</span>, an invite-only, NDA-restricted QA group where I get early access to development builds to stress-test features and report bugs directly to the development team. My QA skills in real life directly contributed to this recognition.</p>
                </LorePopup>
              </StaggerItem>

              <StaggerItem>
                <LorePopup
                  className="block h-full"
                  trigger={
                    <div className="flex h-full flex-col items-center rounded-xl border border-white/10 bg-white/5 p-6 text-center transition-all hover:border-[#8b5cf6]/40 hover:bg-white/[0.08]">
                      <Heart className="mb-3 h-10 w-10 text-[#8b5cf6]" />
                      <h3 className="mb-2 font-bold text-white">Volunteer</h3>
                      <p className="text-sm text-white/50">Click to learn about my volunteer work</p>
                    </div>
                  }
                  title="Volunteering, Giving Back"
                >
                  <p>I volunteer regularly. My most significant volunteer work was with real estate agent Martin Socha, where I built his entire web presence from scratch, set up the IT infrastructure, managed SEO, and administered Facebook advertising, all as unpaid volunteer work.</p>
                  <p className="mt-3">Volunteering isn&apos;t something I do for my CV. It&apos;s a genuine part of who I am. I enjoy helping people and solving their technical problems.</p>
                </LorePopup>
              </StaggerItem>

              <StaggerItem>
                <LorePopup
                  className="block h-full"
                  trigger={
                    <div className="flex h-full flex-col items-center rounded-xl border border-white/10 bg-white/5 p-6 text-center transition-all hover:border-[#8b5cf6]/40 hover:bg-white/[0.08]">
                      <GraduationCap className="mb-3 h-10 w-10 text-[#8b5cf6]" />
                      <h3 className="mb-2 font-bold text-white">Eternal Student</h3>
                      <p className="text-sm text-white/50">Click to see my daily study routine</p>
                    </div>
                  }
                  title="Daily Study, Yes, Really Every Day"
                >
                  <p>Every single day has a dedicated block of time for academics and self-study. This isn&apos;t a New Year&apos;s resolution I gave up on. It&apos;s a core part of my daily routine.</p>
                  <p className="mt-3">Right now I&apos;m studying for the ISTQB Foundation Level certification, learning Postman and SQL through hands-on practice, following Harvard&apos;s CS50 course, and continuously expanding my knowledge of AI/ML, networking, and software testing methodology.</p>
                  <p className="mt-3">I believe that the tech industry moves too fast for anyone to stop learning. So I don&apos;t.</p>
                </LorePopup>
              </StaggerItem>
            </StaggerContainer>
          </section>

          {/* ══════════════════════════════════════════════
              SECTION: CONTACT
              ══════════════════════════════════════════════ */}
          <section id="contact" className="mb-20">
            <FadeIn>
              <h2 className="mb-2 text-5xl font-black text-white">let&apos;s connect</h2>
              <div className="mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#bc13fe]" />
              <p className="mb-8 max-w-xl text-lg text-white/50">
                I&apos;m a junior actively looking for my first real QA / software testing role. I don&apos;t know everything, but I learn fast, I show up every day, and I care about the work. If that sounds like someone you want on your team, let&apos;s talk.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="mailto:georgi.glavchev@icloud.com"
                  className="flex items-center gap-3 rounded-xl border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-6 py-4 text-sm font-medium text-white transition-all hover:bg-[#8b5cf6]/20"
                >
                  <Mail className="h-5 w-5 text-[#8b5cf6]" />
                  georgi.glavchev@icloud.com
                </a>
                <a
                  href="tel:+420722988217"
                  className="flex items-center gap-3 rounded-xl border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-6 py-4 text-sm font-medium text-white transition-all hover:bg-[#8b5cf6]/20"
                >
                  <Phone className="h-5 w-5 text-[#8b5cf6]" />
                  +420 722 988 217
                </a>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-white/70">
                  <MapPin className="h-5 w-5 text-[#8b5cf6]" />
                  Pardubice / Praha, Czech Republic
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <a
                href="/cv.pdf"
                download="Georgi_Glavchev_CV.pdf"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] px-10 py-5 text-lg font-bold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/40 hover:brightness-110"
              >
                <Download className="h-6 w-6" />
                Download My CV
              </a>
            </FadeIn>
          </section>

          {/* ── FOOTER ───────────────────────────────── */}
          <footer className="border-t border-white/10 pt-8 pb-4 text-center">
            <p className="text-sm text-white/30">
              &copy; {new Date().getFullYear()} Georgi Glavchev. All rights reserved.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
