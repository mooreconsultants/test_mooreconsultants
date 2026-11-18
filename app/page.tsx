import { ArrowDownRight, ArrowRight, ArrowUpRight, BrainCircuit, Check, ChevronRight, CircleDot, Compass, Cpu, Layers3, LockKeyhole, Mail, Network, ScanSearch, ShieldCheck, Sparkles, Workflow } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Cybersecurity",
    subtitle: "Strategy & advisory",
    description: "Build security strategies grounded in real-world enterprise, Australian Government and Defence experience.",
    examples: ["Cybersecurity strategy and risk", "Sovereign and government capability considerations", "Security roadmaps and advisory"],
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Artificial intelligence",
    subtitle: "Strategy & adoption",
    description: "Identify where AI can improve workflows, connect with business systems and create genuine operational value.",
    examples: ["AI opportunity and workflow discovery", "ERP and business systems integration strategy", "Adoption and AI-assisted development coaching"],
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Technology & IT",
    subtitle: "Consulting & transformation",
    description: "Align technology, people and business priorities to deliver practical transformation and lasting improvement.",
    examples: ["Technology strategy and IT advisory", "Operational efficiency and systems planning", "Leadership, partners and transformation"],
    icon: Cpu,
  },
]

const useCases = [
  { num: "01", icon: ShieldCheck, label: "CYBERSECURITY", title: "Where do we focus our security investment?", text: "Make sense of competing priorities and turn security requirements into an actionable roadmap." },
  { num: "02", icon: Sparkles, label: "ARTIFICIAL INTELLIGENCE", title: "Where can AI actually make a difference?", text: "Find valuable, realistic use cases before committing to tools, platforms or major programs." },
  { num: "03", icon: Network, label: "TECHNOLOGY", title: "Which technology solution is right for us?", text: "Assess options objectively and align procurement and platform decisions with business needs." },
  { num: "04", icon: Compass, label: "LEADERSHIP", title: "How do we move from strategy to action?", text: "Bring structure, alignment and external perspective to complex technology decisions." },
]

function ServiceGraphic({ variant }: { variant: number }) {
  if (variant === 0) {
    return (
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-[#394149]">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 52% 50%, rgba(42,157,190,.28), transparent 57%)" }} />
        <svg viewBox="0 0 360 170" className="relative h-full w-full" fill="none" aria-hidden="true">
          <circle cx="180" cy="85" r="65" stroke="#78d7ef" strokeOpacity=".23" strokeDasharray="3 7" />
          <circle cx="180" cy="85" r="43" stroke="#78d7ef" strokeOpacity=".5" />
          <circle cx="180" cy="85" r="27" fill="#2a9dbe" fillOpacity=".23" stroke="#8fe8fc" />
          <path d="M180 69 L194 76 V87 C194 97 186 103 180 107 C174 103 166 97 166 87 V76 Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M174 87 L179 92 L188 82" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M180 20 V42 M180 128 V149 M115 85 H137 M223 85 H245" stroke="#7ed2e8" strokeOpacity=".65"/>
          <circle cx="180" cy="20" r="4" fill="#5ecde9"/><circle cx="180" cy="149" r="4" fill="#5ecde9"/>
          <circle cx="115" cy="85" r="4" fill="#5ecde9"/><circle cx="245" cy="85" r="4" fill="#5ecde9"/>
          <path d="M38 38 H103 M257 38 H322 M38 130 H103 M257 130 H322" stroke="#d5f6ff" strokeOpacity=".22"/>
          <path d="M38 46 H82 M277 46 H322 M38 138 H75 M281 138 H322" stroke="#d5f6ff" strokeOpacity=".13"/>
        </svg>
        <span className="absolute bottom-4 left-5 rounded-md border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-[.17em] text-[#d8f8ff]">RISK → ROADMAP</span>
      </div>
    )
  }
  if (variant === 1) {
    return (
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-[#e3f5f9]">
        <svg viewBox="0 0 360 170" className="relative h-full w-full" fill="none" aria-hidden="true">
          <path d="M32 124 C94 98 114 141 179 104 C242 67 287 108 330 44" stroke="#2a9dbe" strokeWidth="2" strokeDasharray="5 8" strokeOpacity=".36"/>
          {[{x:79,y:86},{x:180,y:85},{x:281,y:86}].map((v,i)=><g key={i}><rect x={v.x-34} y={v.y-32} width="68" height="64" rx="14" fill={i===1?"#2a9dbe":"white"} stroke="#2a9dbe" strokeOpacity=".32"/><circle cx={v.x} cy={v.y-7} r="10" fill={i===1?"white":"#2a9dbe"} fillOpacity=".9"/><path d={"M"+(v.x-15)+" "+(v.y+13)+" H"+(v.x+15)} stroke={i===1?"white":"#2a9dbe"} strokeOpacity=".6" strokeWidth="3" strokeLinecap="round"/></g>)}
          <path d="M117 85 H141 M138 80 L144 85 L138 90 M218 85 H243 M240 80 L246 85 L240 90" stroke="#2a9dbe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="42" cy="36" r="3" fill="#2a9dbe" fillOpacity=".35"/><circle cx="322" cy="132" r="5" fill="#2a9dbe" fillOpacity=".2"/>
        </svg>
        <div className="absolute bottom-4 left-5 text-[10px] font-semibold tracking-[.17em] text-[#237994]">DISCOVER → PRIORITISE → ADOPT</div>
      </div>
    )
  }
  return (
    <div className="relative flex h-44 items-center justify-center overflow-hidden bg-[#e9edef]">
      <svg viewBox="0 0 360 170" className="relative h-full w-full" fill="none" aria-hidden="true">
        <path d="M180 16 L305 70 L180 122 L55 70 Z" fill="#becbd1" stroke="#74818a" strokeOpacity=".4"/>
        <path d="M180 37 L300 89 L180 142 L60 89 Z" fill="#9aaeb8" fillOpacity=".7" stroke="#667a83" strokeOpacity=".4"/>
        <path d="M180 54 L286 99 L180 144 L74 99 Z" fill="#2a9dbe" stroke="#136b88"/>
        <path d="M180 67 L259 99 L180 132 L101 99 Z" stroke="#e3faff" strokeOpacity=".75"/>
        <circle cx="180" cy="99" r="12" fill="white" fillOpacity=".92"/><circle cx="180" cy="99" r="4" fill="#2a9dbe"/>
        <path d="M180 86 V34 M192 99 H317 M168 99 H39" stroke="#5d8899" strokeDasharray="3 5" strokeOpacity=".6"/>
        <circle cx="180" cy="34" r="4" fill="#2a9dbe"/><circle cx="317" cy="99" r="4" fill="#2a9dbe"/><circle cx="39" cy="99" r="4" fill="#2a9dbe"/>
      </svg>
      <div className="absolute bottom-4 left-5 text-[10px] font-semibold tracking-[.17em] text-[#5b717e]">STRATEGY → SOLUTIONS → DELIVERY</div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8fafb] text-[#41464b]">
      <div className="h-1 w-full bg-[#2a9dbe]" />
      <header className="sticky top-0 z-50 border-b border-[#e5e9ec] bg-white/95 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3 sm:px-8 lg:px-10">
          <a href="#" aria-label="Moore Consultants home" className="block shrink-0">
            <img src="/moore-consultants-logo.png" alt="Moore Consultants" className="h-[56px] w-auto sm:h-[64px]" />
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 text-[13px] font-semibold text-[#505960] lg:flex">
            <a href="#capabilities" className="transition hover:text-[#2a9dbe]">Capabilities</a>
            <a href="#use-cases" className="transition hover:text-[#2a9dbe]">Use cases</a>
            <a href="#approach" className="transition hover:text-[#2a9dbe]">Our approach</a><a href="#experience" className="transition hover:text-[#2a9dbe]">Experience</a><a href="#about" className="transition hover:text-[#2a9dbe]">About</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#41464b] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#2a9dbe] sm:px-6 sm:text-sm">
            Let's talk <ArrowUpRight size={16}/>
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#f8fafb]">
        <div className="pointer-events-none absolute -right-20 top-[-140px] h-[600px] w-[600px] rounded-full bg-[#2a9dbe]/[.075] blur-[100px]"/>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-12 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="relative z-10">
            <div className="mb-7 flex items-center gap-3"><span className="h-[2px] w-8 bg-[#2a9dbe]"/><span className="text-xs font-bold uppercase tracking-[.21em] text-[#2a9dbe]">Independent technology advisory</span></div>
            <h1 className="max-w-2xl text-[clamp(3.2rem,5.5vw,5.9rem)] font-semibold leading-[1.055] tracking-[-.055em] text-[#41464b]">
              Cybersecurity and AI.<br/><span className="text-[#2a9dbe]">Strategy that delivers.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-[1.75] text-[#65717a]">Independent cybersecurity, AI and technology strategy grounded in more than 20 years of experience across enterprise IT, Australian Government and Defence. Clear thinking, practical action and meaningful business outcomes.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#capabilities" className="inline-flex items-center gap-3 rounded-full bg-[#2a9dbe] px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(42,157,190,.22)] transition hover:bg-[#2386a3]">Explore our capabilities <ArrowRight size={18}/></a>
              <a href="#use-cases" className="inline-flex items-center gap-2 rounded-full border border-[#c5d0d6] bg-white px-7 py-4 text-sm font-semibold text-[#424c52] transition hover:border-[#2a9dbe] hover:text-[#2a9dbe]">See how we help <ArrowUpRight size={16}/></a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#dbe3e7] pt-6 text-xs font-semibold uppercase tracking-[.12em] text-[#74828a]">
              <span className="inline-flex items-center gap-2"><CircleDot size={15} className="text-[#2a9dbe]"/> Cybersecurity</span>
              <span className="inline-flex items-center gap-2"><CircleDot size={15} className="text-[#2a9dbe]"/> AI strategy</span>
              <span className="inline-flex items-center gap-2"><CircleDot size={15} className="text-[#2a9dbe]"/> IT consulting</span>
            </div>
          </div>
          <div className="relative lg:pl-3">
            <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-[#343d44] shadow-[0_24px_70px_rgba(49,64,73,.20)] sm:min-h-[570px]">
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1300&q=82" alt="Modern data centre network infrastructure" className="absolute inset-0 h-full w-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#29383f] via-[#29383f]/55 to-[#173a4a]/20"/>
              <div className="absolute left-7 top-7 flex items-center gap-3 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[.16em] text-white backdrop-blur-md"><span className="h-2 w-2 rounded-full bg-[#63d8f3]"/> Strategy / risk / opportunity</div>
              <div className="absolute left-7 right-7 top-[31%] sm:left-10 sm:right-10">
                <svg viewBox="0 0 420 165" fill="none" className="w-full" aria-hidden="true">
                  <path d="M45 87 C114 87 118 35 205 35 C286 35 295 131 375 100" stroke="#a7eaf9" strokeOpacity=".85" strokeWidth="1.7" strokeDasharray="4 6"/>
                  <path d="M45 87 C132 87 135 136 221 130 C298 125 306 47 375 47" stroke="white" strokeOpacity=".4" strokeWidth="1.5"/>
                  {[{x:45,y:87},{x:205,y:35},{x:221,y:130},{x:375,y:100},{x:375,y:47}].map((n,i)=><g key={i}><circle cx={n.x} cy={n.y} r={i===1?12:7} fill="#57cee8" fillOpacity=".25"/><circle cx={n.x} cy={n.y} r={i===1?5:3} fill="white"/></g>)}
                  <circle cx="205" cy="85" r="53" stroke="white" strokeOpacity=".23"/>
                  <circle cx="205" cy="85" r="37" stroke="#67d4eb" strokeOpacity=".8"/>
                  <circle cx="205" cy="85" r="22" fill="#49acc9" fillOpacity=".8"/>
                  <path d="M194 85 H216 M205 74 V96" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="absolute bottom-8 left-8 right-8 sm:bottom-10 sm:left-10 sm:right-10">
                <p className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-[#9ce4f3]">Clarity across complexity</p>
                <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-[-.035em] text-white sm:text-4xl">Technology is the tool.<br/>Better outcomes are the goal.</h2>
                <div className="mt-7 flex flex-wrap gap-2"><span className="rounded-full border border-white/25 bg-white/10 px-3 py-2 text-xs text-white backdrop-blur-sm">Protect</span><span className="rounded-full border border-white/25 bg-white/10 px-3 py-2 text-xs text-white backdrop-blur-sm">Transform</span><span className="rounded-full border border-white/25 bg-white/10 px-3 py-2 text-xs text-white backdrop-blur-sm">Enable</span></div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-[#e6eef2] bg-white px-5 py-4 shadow-xl sm:flex"><div className="rounded-xl bg-[#e4f5f9] p-2 text-[#2a9dbe]"><Compass size={23}/></div><div><p className="text-xs font-bold uppercase tracking-[.13em] text-[#8b98a0]">Our focus</p><p className="text-sm font-semibold text-[#424b51]">Clarity to move forward</p></div></div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e3eaed] bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-7 text-sm text-[#5a666e] sm:grid-cols-3 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3"><div className="rounded-xl bg-[#e8f6fa] p-2.5 text-[#2a9dbe]"><ScanSearch size={21}/></div><span className="font-semibold">Understand the challenge</span></div>
          <div className="flex items-center gap-3"><div className="rounded-xl bg-[#e8f6fa] p-2.5 text-[#2a9dbe]"><Layers3 size={21}/></div><span className="font-semibold">Explore the right options</span></div>
          <div className="flex items-center gap-3"><div className="rounded-xl bg-[#e8f6fa] p-2.5 text-[#2a9dbe]"><ArrowUpRight size={21}/></div><span className="font-semibold">Move forward with purpose</span></div>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-24 bg-[#f8fafb] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div className="max-w-2xl"><p className="mb-5 text-xs font-bold uppercase tracking-[.22em] text-[#2a9dbe]">01 / Our capabilities</p><h2 className="text-4xl font-semibold leading-[1.12] tracking-[-.045em] text-[#41464b] sm:text-5xl">Three disciplines.<br/><span className="text-[#2a9dbe]">One joined-up view.</span></h2></div><p className="max-w-sm text-base leading-relaxed text-[#64717a]">From protecting your organisation to discovering new opportunities, the focus remains on informed, practical decisions.</p></div>
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service,index)=><article key={service.number} className="group overflow-hidden rounded-[1.65rem] border border-[#e1e7ea] bg-white shadow-[0_8px_28px_rgba(55,68,75,.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(55,68,75,.12)]">
              <ServiceGraphic variant={index}/>
              <div className="p-7 lg:p-8">
                <div className="mb-6 flex items-center justify-between"><span className="text-xs font-bold tracking-[.15em] text-[#a6b1b7]">{service.number} / 03</span><div className="rounded-xl bg-[#e8f6fa] p-2.5 text-[#2a9dbe]"><service.icon size={22}/></div></div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[.16em] text-[#2a9dbe]">{service.subtitle}</p>
                <h3 className="text-[1.75rem] font-semibold tracking-[-.035em] text-[#42484d]">{service.title}</h3>
                <p className="mt-4 min-h-[94px] text-[15px] leading-[1.75] text-[#68747b]">{service.description}</p>
                <div className="mt-6 border-t border-[#e5ebee] pt-6">{service.examples.map(item=><div key={item} className="mb-3 flex items-start gap-3 text-[13px] text-[#59666c] last:mb-0"><Check size={17} className="mt-0.5 shrink-0 text-[#2a9dbe]"/>{item}</div>)}</div>
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="use-cases" className="scroll-mt-24 bg-[#41464b] py-24 text-white lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-16 lg:px-10">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-5 text-xs font-bold uppercase tracking-[.22em] text-[#88d9eb]">02 / In practice</p>
            <h2 className="text-4xl font-semibold leading-[1.14] tracking-[-.045em] sm:text-5xl">Real questions.<br/><span className="text-[#7dd5e9]">Practical ways forward.</span></h2>
            <p className="mt-6 max-w-sm text-base leading-[1.8] text-[#c5cbd0]">Technology projects don't start with a product. They start with a challenge worth solving.</p>
            <div className="mt-10 hidden h-[2px] w-24 bg-[#2a9dbe] lg:block" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map(item=><article key={item.num} className="group flex min-h-[260px] flex-col rounded-[1.5rem] border border-white/15 bg-white/[.065] p-7 transition hover:border-[#7bd1e5]/50 hover:bg-white/10">
              <div className="mb-10 flex items-start justify-between"><div className="rounded-xl border border-[#69cde5]/30 bg-[#2a9dbe]/15 p-3 text-[#89def2]"><item.icon size={23}/></div><span className="text-xs font-bold tracking-widest text-white/40">{item.num}</span></div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[.2em] text-[#7bd6ec]">{item.label}</p>
              <h3 className="max-w-xs text-xl font-semibold leading-snug tracking-[-.025em]">{item.title}</h3>
              <p className="mt-4 text-sm leading-[1.75] text-[#c6cdd1]">{item.text}</p>
              <ArrowDownRight size={20} className="mt-auto pt-5 text-[#7bd6ec]"/>
            </article>)}
          </div>
        </div>
      </section>

      <section id="approach" className="scroll-mt-24 bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto mb-14 max-w-2xl text-center"><p className="mb-5 text-xs font-bold uppercase tracking-[.22em] text-[#2a9dbe]">03 / How we work</p><h2 className="text-4xl font-semibold tracking-[-.045em] text-[#41464b] sm:text-5xl">A clear path from <span className="text-[#2a9dbe]">question to action.</span></h2><p className="mt-5 text-base leading-relaxed text-[#6d7a82]">A straightforward process that keeps the business objective front and centre.</p></div>
          <div className="grid gap-5 md:grid-cols-3">
            {[{n:"01",icon:ScanSearch,title:"Understand",text:"Get clear on the business challenge, context, risks and ambitions."},{n:"02",icon:Workflow,title:"Evaluate",text:"Explore the right opportunities, approaches and options."},{n:"03",icon:ArrowUpRight,title:"Move forward",text:"Turn direction into practical, prioritised next steps."}].map((step,index)=><div key={step.n} className="relative rounded-[1.5rem] border border-[#e4e9ec] bg-[#f8fafb] p-8">
              <div className="mb-7 flex items-center justify-between"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e1f3f8] text-[#2a9dbe]"><step.icon size={27}/></div><span className="text-[13px] font-bold tracking-[.16em] text-[#a4b0b5]">{step.n}</span></div>
              <h3 className="text-2xl font-semibold tracking-[-.02em]">{step.title}</h3><p className="mt-3 max-w-xs text-sm leading-[1.8] text-[#697780]">{step.text}</p>
              {index!==2 && <ChevronRight className="absolute -right-[16px] top-1/2 z-10 hidden rounded-full bg-[#2a9dbe] p-1 text-white md:block" size={32}/>}
            </div>)}
          </div>
          <div className="mt-14 flex flex-col items-center justify-center gap-3 rounded-2xl bg-[#ecf8fb] px-8 py-7 text-center sm:flex-row sm:text-left"><Sparkles size={24} className="shrink-0 text-[#2a9dbe]"/><p className="font-medium text-[#50616a]">Independent perspective. Commercial understanding. Actionable thinking.</p></div>
        </div>
      </section>

      <section id="experience" className="bg-[#eef5f7] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <p className="mb-5 text-xs font-bold uppercase tracking-[.22em] text-[#2a9dbe]">04 / Proven experience</p>
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-.045em] text-[#41464b] sm:text-5xl">Enterprise experience.<br/><span className="text-[#2a9dbe]">Practical perspective.</span></h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[{metric:"20+",title:"Years in technology",text:"Experience across cybersecurity, enterprise IT, consulting and business leadership."},{metric:"~40",title:"Canberra operation",text:"Helped establish and scale Palo Alto Networks' Federal Government and Defence operation to approximately 40 people."},{metric:"JAPAC",title:"Salesperson of the Year",text:"Recognised following major South Australian Government cybersecurity agreements, including Whole-of-Government wins."}].map(item=><article key={item.title} className="rounded-3xl border border-[#dbe7eb] bg-white p-8"><p className="text-4xl font-semibold tracking-tight text-[#2a9dbe]">{item.metric}</p><h3 className="mt-5 text-xl font-semibold text-[#41464b]">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-[#697780]">{item.text}</p></article>)}
          </div>
          <p className="mt-9 max-w-4xl text-base leading-relaxed text-[#59666c]">Experience includes leading the team responsible for achieving an IRAP assessment of multinational cybersecurity capabilities for Australian sovereign delivery. Today, advisory work includes AI adoption, integration opportunities and coaching in AI-assisted software development.</p>
        </div>
      </section>

      <section id="about" className="bg-white py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-10">
          <div className="relative min-h-[390px] overflow-hidden rounded-[2rem] bg-[#34444c]">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1100&q=85" alt="Technology professionals working together" className="absolute inset-0 h-full w-full object-cover"/>
          </div>
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[.22em] text-[#2a9dbe]">05 / About Moore Consultants</p>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-.045em] text-[#41464b] sm:text-5xl">Technology expertise.<br/><span className="text-[#2a9dbe]">Human perspective.</span></h2>
            <p className="mt-7 text-base leading-[1.85] text-[#65717a]">Led by Guy Moore, Moore Consultants combines deep experience in cybersecurity, enterprise technology and government with an entrepreneurial approach to solving business challenges. Guy's background spans running an IT solutions business, Datacom and eight years at Palo Alto Networks.</p>
            <p className="mt-5 text-base leading-[1.85] text-[#65717a]">The focus today is cybersecurity strategy, AI adoption, technology integration and helping leaders make informed decisions. Commercial understanding supports the work — it doesn't define it.</p>
            <p className="mt-5 text-base leading-[1.85] text-[#65717a]">Outside technology, Guy is passionate about HYROX, triathlon, strength and conditioning, yoga and exercise science. Curiosity, learning and wellbeing are important parts of the person behind the business.</p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#2a9dbe] px-7 py-4 text-sm font-semibold text-white hover:bg-[#2386a3]">Let's talk <ArrowRight size={17}/></a>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-[#2a9dbe] text-white">
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 overflow-hidden px-6 py-20 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-24">
          <div className="pointer-events-none absolute -bottom-40 right-[-130px] h-[420px] w-[420px] rounded-full border-[60px] border-white/10"/>
          <div className="relative"><p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-white/75">Start a conversation</p><h2 className="max-w-2xl text-4xl font-semibold leading-[1.13] tracking-[-.045em] sm:text-5xl">Better decisions start with a better conversation.</h2><p className="mt-5 text-base text-white/85">Let's explore the challenge you're trying to solve.</p></div>
          <a href="mailto:gmoore@mooreconsultants.com.au?subject=Moore%20Consultants%20enquiry" className="relative inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-white px-8 py-5 text-sm font-bold text-[#41464b] shadow-lg transition hover:bg-[#e8f6fa] lg:self-auto"><Mail size={18}/> Get in touch <ArrowUpRight size={18}/></a>
        </div>
      </section>

      <footer className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <a href="#" aria-label="Back to top"><img src="/moore-consultants-logo.png" alt="Moore Consultants" className="h-14 w-auto"/></a>
          <div className="text-sm leading-relaxed text-[#7d8b93]"><p>Cybersecurity · Artificial Intelligence · Technology</p><p>Adelaide, South Australia · © {new Date().getFullYear()} Moore Consultants</p></div>
          <a href="mailto:gmoore@mooreconsultants.com.au" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2a9dbe] hover:underline">Contact us <ArrowUpRight size={16}/></a>
        </div>
      </footer>
    </main>
  )
}
