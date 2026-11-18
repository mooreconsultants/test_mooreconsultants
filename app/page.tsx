import { ArrowRight, ArrowUpRight, BrainCircuit, Building2, CheckCircle2, ChevronRight, Cpu, Landmark, Mail, ShieldCheck, Target, Users } from "lucide-react"

const services = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Cybersecurity strategy & advisory",
    description: "Practical guidance to connect cybersecurity priorities with organisational risk, investment and business outcomes.",
    points: ["Security strategy and solution evaluation", "Cybersecurity vendor and partner advisory", "Government and enterprise technology engagement"],
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "AI strategy & adoption",
    description: "Helping leaders identify where AI can create value, assess opportunities and move towards responsible, practical adoption.",
    points: ["AI opportunity discovery and prioritisation", "Adoption roadmaps and stakeholder alignment", "Technology and implementation partner evaluation"],
  },
  {
    number: "03",
    icon: Cpu,
    title: "Technology & IT consulting",
    description: "Independent, commercially grounded advice for complex technology decisions, transformation initiatives and growth.",
    points: ["Technology strategy and business alignment", "IT solutions and vendor selection", "Commercial strategy and transformation advisory"],
  },
]

const experience = [
  { value: "20+", label: "years in technology" },
  { value: "8", label: "years at Palo Alto Networks" },
  { value: "JAPAC", label: "Salesperson of the Year" },
  { value: "~40", label: "people in the Canberra federal business built" },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f8fa] text-[#182938]">
      <header className="sticky top-0 z-50 border-b border-[#dce5eb] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#" className="flex items-center gap-3" aria-label="Moore Consultants home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#113c56] text-xl font-bold text-white">M<span className="text-[#49b8d1]">.</span></span>
            <span className="text-lg font-bold tracking-tight">MOORE <span className="font-normal text-[#497184]">CONSULTANTS</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#496172] md:flex" aria-label="Main navigation">
            <a href="#expertise" className="hover:text-[#007c9c]">Expertise</a>
            <a href="#experience" className="hover:text-[#007c9c]">Experience</a>
            <a href="#approach" className="hover:text-[#007c9c]">Approach</a>
          </nav>
          <a href="mailto:gmoore@mooreconsultants.com.au?subject=Consulting%20enquiry" className="inline-flex items-center gap-2 rounded-full bg-[#113c56] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#17617c]">Let's talk <ArrowUpRight size={16} /></a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#0e293c] text-white">
        <div className="absolute inset-0 opacity-30" style={{backgroundImage:"radial-gradient(circle at 78% 28%, #287e9b 0%, transparent 32%), linear-gradient(125deg, transparent 55%, #154d68 100%)"}} />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:px-10 lg:py-36">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#4e879c] bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#8cd8e8]"><span className="h-2 w-2 rounded-full bg-[#53c6d9]" /> Independent technology advisory · Adelaide, Australia</div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.07] tracking-tight sm:text-6xl lg:text-7xl">Complex technology.<br /><span className="text-[#72d3e6]">Clearer decisions.</span><br />Better outcomes.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#c5d7e0]">Strategic consulting across cybersecurity, artificial intelligence and IT. Bringing enterprise experience, government insight and commercial perspective to the decisions that matter.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#expertise" className="inline-flex items-center gap-3 rounded-full bg-[#64cbe0] px-7 py-4 font-bold text-[#0c3045] transition hover:bg-white">Explore our expertise <ArrowRight size={18}/></a>
              <a href="mailto:gmoore@mooreconsultants.com.au?subject=Let's%20discuss%20consulting" className="inline-flex items-center gap-3 rounded-full border border-[#6a94a7] px-7 py-4 font-semibold text-white transition hover:bg-white/10">Start a conversation <ArrowUpRight size={18}/></a>
            </div>
          </div>
          <div className="relative rounded-3xl border border-white/15 bg-white/5 p-7 shadow-2xl backdrop-blur-sm lg:p-9">
            <div className="mb-7 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-[#83d2e4]"><Target size={20}/> Where we focus</div>
            {services.map((s,i)=><a href="#expertise" key={s.number} className="group flex items-center gap-4 border-t border-white/15 py-6 first:border-t-0"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#23617b]"><s.icon size={23} /></span><span className="flex-1 text-lg font-medium">{s.title}</span><ChevronRight size={19} className="text-[#8dd6e7] transition group-hover:translate-x-1"/></a>)}
            <p className="mt-3 text-sm text-[#a5c0ce]">Strategic advice grounded in real-world commercial and technology experience.</p>
          </div>
        </div>
      </section>

      <section id="expertise" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="mb-12 max-w-3xl"><p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#007d9d]">Our expertise</p><h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Advice that connects technology to business.</h2><p className="mt-5 text-lg leading-relaxed text-[#597080]">No unnecessary complexity. Just the experience, perspective and direction to help you make more informed decisions.</p></div>
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service)=><article key={service.number} className="flex flex-col rounded-3xl border border-[#dce6eb] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-9 flex items-center justify-between"><span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e3f4f7] text-[#047e9c]"><service.icon size={28}/></span><span className="text-sm font-bold text-[#a1b2bc]">{service.number} / 03</span></div>
            <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3><p className="mt-4 leading-relaxed text-[#607586]">{service.description}</p>
            <ul className="mt-8 space-y-4 border-t border-[#e3eaee] pt-7">{service.points.map(p=><li key={p} className="flex gap-3 text-sm leading-relaxed text-[#405b6d]"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#078ca9]"/>{p}</li>)}</ul>
          </article>)}
        </div>
      </section>

      <section id="experience" className="bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div><p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#007d9d]">Experience that matters</p><h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Built in the enterprise. Proven in government.</h2><p className="mt-6 text-lg leading-relaxed text-[#607586]">Moore Consultants is led by Guy Moore, bringing over two decades of experience across technology, cybersecurity, business ownership and senior commercial leadership.</p><a href="https://www.linkedin.com/in/gmoore/" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 font-semibold text-[#007c9c] hover:underline">Connect with Guy on LinkedIn <ArrowUpRight size={18}/></a></div>
            <div className="space-y-6 text-[#4d6475]">
              <p className="leading-relaxed">At <strong className="text-[#19384a]">Palo Alto Networks</strong>, Guy helped grow the South Australian State Government and Federal Government markets, including Defence, and secured significant whole-of-government wins with the Department of the Premier and Cabinet and Department for Education.</p>
              <p className="leading-relaxed">Recognised as <strong className="text-[#19384a]">JAPAC Salesperson of the Year</strong>, he subsequently moved into leadership and built the Federal Government business in Canberra from the ground up, growing it to nearly 40 employees.</p>
              <p className="leading-relaxed">Earlier experience includes enterprise IT at <strong className="text-[#19384a]">Datacom</strong> and co-owning an IT services business. That combination brings a distinctive perspective across strategy, technology, people and execution.</p>
              <div className="grid grid-cols-2 gap-4 pt-4">{experience.map(item=><div key={item.label} className="rounded-2xl bg-[#f0f6f8] p-5"><div className="text-3xl font-bold text-[#087c9b]">{item.value}</div><div className="mt-2 text-sm leading-snug text-[#536e7e]">{item.label}</div></div>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eaf3f6] py-16"><div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3 lg:px-10">
        {[{icon:Landmark,title:"Government perspective",text:"Experience across South Australian and Federal Government environments, including Defence."},{icon:Users,title:"Leadership at scale",text:"Experience building teams, developing business and leading strategic growth."},{icon:Building2,title:"Commercially grounded",text:"Technology recommendations considered through the lens of organisational priorities and outcomes."}].map(x=><div key={x.title} className="flex gap-4"><x.icon className="mt-1 shrink-0 text-[#0084a3]" size={26}/><div><h3 className="text-lg font-bold">{x.title}</h3><p className="mt-2 text-sm leading-relaxed text-[#5d7281]">{x.text}</p></div></div>)}
      </div></section>

      <section id="approach" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28"><div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div><p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#007d9d]">Our approach</p><h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Independent thinking. Practical next steps.</h2><p className="mt-6 text-lg leading-relaxed text-[#607586]">Good consulting starts with understanding the business problem, not selling a predetermined solution.</p></div>
        <div className="space-y-4">{[{n:"01",title:"Understand",text:"Clarify your objectives, constraints and the decisions ahead."},{n:"02",title:"Evaluate",text:"Bring the right commercial and technical perspectives to the options."},{n:"03",title:"Move forward",text:"Create a practical direction with clear priorities and next steps."}].map(x=><div key={x.n} className="flex gap-5 rounded-2xl border border-[#dce6eb] bg-white p-6"><span className="text-lg font-bold text-[#0087a5]">{x.n}</span><div><h3 className="text-lg font-bold">{x.title}</h3><p className="mt-1 text-sm leading-relaxed text-[#627788]">{x.text}</p></div></div>)}</div>
      </div></section>

      <section id="contact" className="bg-[#123a52] py-20 text-white"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10"><div><p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#85d6e6]">Let's connect</p><h2 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">Let's make your next technology decision a confident one.</h2><p className="mt-5 text-[#bed2dc]">Based in Adelaide. Working with organisations across Australia.</p></div><a href="mailto:gmoore@mooreconsultants.com.au?subject=Moore%20Consultants%20enquiry" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#76d7e8] px-8 py-5 font-bold text-[#123a52] transition hover:bg-white"><Mail size={20}/> Get in touch <ArrowUpRight size={18}/></a></div></section>
      <footer className="bg-[#0c293a] px-6 py-8 text-[#b5c9d3] lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between"><span className="font-semibold text-white">MOORE CONSULTANTS</span><span>Cybersecurity · AI · Technology</span><span>© {new Date().getFullYear()} Moore Consultants. All rights reserved.</span></div></footer>
    </main>
  )
}
