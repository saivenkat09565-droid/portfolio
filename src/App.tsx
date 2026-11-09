import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ArrowUpRight, Menu, X, Mail, Phone, Download, Linkedin, Instagram, Loader2 } from 'lucide-react'
import { site, nav, highlights, expertise, projects, metrics, responsibilities, tools, education, type Project } from './config'

const ease = [0.22, 1, 0.36, 1] as const
const wrap = 'mx-auto w-full max-w-6xl px-5 md:px-8'
const btn = 'inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition-colors'

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, ease }}>{children}</motion.div>
}

function Count({ to, suffix, animate }: { to: number; suffix: string; animate: boolean }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [v, setV] = useState(animate ? 0 : to)
  useEffect(() => {
    if (!animate || !inView) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setV(to); return }
    let raf = 0; const t0 = performance.now()
    const tick = (t: number) => { const p = Math.min((t - t0) / 1400, 1); setV(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf = requestAnimationFrame(tick) }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, animate])
  return <span ref={ref}>{v}{suffix}</span>
}

function Header() {
  const [open, setOpen] = useState(false)
  const href = (n: string) => (n === 'Home' ? '#home' : `#${n.toLowerCase()}`)
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className={`${wrap} flex h-16 items-center justify-between`}>
        <a href="#home" className="text-[15px] font-extrabold tracking-tight">SAI VENKAT<span className="text-accent">.</span></a>
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map(n => <a key={n} href={href(n)} className="text-sm font-medium text-muted hover:text-ink">{n}</a>)}
          <a href="#contact" className={`${btn} bg-ink py-2 text-paper hover:bg-accent`}>Let's Talk</a>
        </nav>
        <button className="lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-line bg-paper lg:hidden">
          <div className={`${wrap} flex flex-col py-2`}>
            {nav.map(n => <a key={n} href={href(n)} onClick={() => setOpen(false)} className="border-b border-line py-3 text-base font-medium">{n}</a>)}
            <a href="#contact" onClick={() => setOpen(false)} className={`${btn} my-4 bg-ink text-paper`}>Let's Talk</a>
          </div>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className={`${wrap} grid gap-10 pb-16 pt-10 md:pt-16 lg:grid-cols-12 lg:gap-12 lg:pb-24`}>
      <div className="lg:col-span-7 lg:pt-6">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-xs font-semibold tracking-[0.14em] text-muted">DIGITAL MARKETING STRATEGIST / INDIA</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease }} className="mt-5 text-[2.6rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.6rem]">
          Turning Digital Presence Into Business Growth.
        </motion.h1>
        <p className="mt-7 text-2xl font-bold tracking-tight">Sai Venkat</p>
        <p className="mt-2 max-w-lg text-lg leading-relaxed text-muted">I work at the intersection of strategy, creativity and technology to help brands build visibility, connect with their audience and grow online.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className={`${btn} bg-ink text-paper hover:bg-accent`}>Explore My Work</a>
          <a href="#contact" className={`${btn} border border-ink hover:bg-ink hover:text-paper`}>Let's Collaborate</a>
        </div>
        <p className="mt-8 flex items-center gap-2.5 text-sm font-medium"><span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" /></span>Available for Strategic Projects &amp; Opportunities</p>
      </div>
      <motion.figure initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.25 }} className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
        <div className="absolute -bottom-3 -right-3 h-full w-full border border-accent" aria-hidden />
        <img src={site.portrait} alt="Portrait of Sai Venkat, Digital Marketing Strategist" width={900} height={1125} className="relative aspect-[4/5] w-full object-cover object-[50%_20%]" />
        <figcaption className="relative border-x border-b border-line bg-paper px-4 py-3 text-sm"><strong>Sai Venkat</strong><span className="text-muted"> · Founder, Venova Digitals</span></figcaption>
      </motion.figure>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className={`${wrap} grid gap-10 py-20 lg:grid-cols-12 lg:py-28`}>
        <Reveal className="lg:col-span-5"><h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">Strategy meets creativity. That's where growth happens.</h2></Reveal>
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-6 lg:col-start-7">
          <p>I'm Sai Venkat, a Digital Marketing Strategist and the founder of Venova Digitals.</p>
          <p>My journey revolves around understanding businesses, identifying opportunities and turning ideas into meaningful digital experiences.</p>
          <p>From developing social media strategies to planning promotional campaigns and building brand identities, I enjoy working on different aspects of digital marketing.</p>
          <p>I believe effective marketing is not just about posting content. It's about understanding the audience, communicating the right message and achieving measurable results.</p>
          <ul className="grid gap-px border border-line bg-line pt-0 text-ink sm:grid-cols-3">
            {highlights.map(h => <li key={h} className="bg-paper p-4 text-sm font-semibold">{h}</li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

function Expertise() {
  const feat = expertise.slice(0, 3), rest = expertise.slice(3)
  return (
    <section id="expertise" className="bg-ink text-paper">
      <div className={`${wrap} py-20 lg:py-28`}>
        <h2 className="max-w-xl text-3xl font-extrabold tracking-tight md:text-4xl">What I do, and how I think about it</h2>
        <div className="mt-12 grid gap-px bg-paper/15 md:grid-cols-12">
          {feat.map((e, i) => (
            <div key={e.t} className={`bg-ink p-6 md:p-8 ${i === 0 ? 'md:col-span-7 md:row-span-2 md:py-12' : 'md:col-span-5'}`}>
              <h3 className={`font-bold tracking-tight ${i === 0 ? 'text-3xl md:text-4xl' : 'text-xl'}`}>{e.t}</h3>
              <p className={`mt-3 max-w-md text-paper/70 ${i === 0 ? 'text-lg' : ''}`}>{e.d}</p>
            </div>
          ))}
        </div>
        <dl className="mt-2">
          {rest.map(e => (
            <div key={e.t} className="grid gap-1 border-b border-paper/15 py-5 md:grid-cols-12 md:gap-8">
              <dt className="font-semibold md:col-span-5">{e.t}</dt>
              <dd className="text-paper/70 md:col-span-7">{e.d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function Visual({ p, big }: { p: Project; big?: boolean }) {
  return p.image
    ? <img src={p.image} alt={`${p.name} campaign visual`} loading="lazy" className={`w-full object-cover ${big ? 'aspect-[16/10]' : 'aspect-[4/3]'}`} />
    : <div role="img" aria-label={`Image placeholder for ${p.name}`} className={`flex w-full items-end bg-[#E9E4D8] p-4 ${big ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}><span className="border border-dashed border-ink/30 px-2 py-1 text-xs text-muted">Add visual: set image for “{p.name}” in config.ts</span></div>
}

function Projects() {
  const industries = ['All', ...Array.from(new Set(projects.map(p => p.industry)))]
  const [f, setF] = useState('All')
  const [sel, setSel] = useState<Project | null>(null)
  const list = projects.filter(p => f === 'All' || p.industry === f)
  useEffect(() => {
    if (!sel) return
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setSel(null)
    document.addEventListener('keydown', k); return () => document.removeEventListener('keydown', k)
  }, [sel])
  return (
    <section id="projects" className={`${wrap} py-20 lg:py-28`}>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Selected work</h2>
        <div role="group" aria-label="Filter projects by industry" className="flex flex-wrap gap-2">
          {industries.map(i => <button key={i} onClick={() => setF(i)} aria-pressed={f === i} className={`border px-3 py-1.5 text-sm font-medium transition-colors ${f === i ? 'border-ink bg-ink text-paper' : 'border-line hover:border-ink'}`}>{i}</button>)}
        </div>
      </div>
      <motion.div layout className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.article layout key={p.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} className={i === 0 && f === 'All' ? 'md:col-span-2 md:grid md:grid-cols-12 md:gap-8' : ''}>
              <button onClick={() => setSel(p)} className={`group block w-full overflow-hidden text-left ${i === 0 && f === 'All' ? 'md:col-span-7' : ''}`} aria-label={`View details: ${p.name}`}>
                <div className="overflow-hidden"><div className="transition-transform duration-700 group-hover:scale-[1.02]"><Visual p={p} big={i === 0 && f === 'All'} /></div></div>
              </button>
              <div className={`mt-4 ${i === 0 && f === 'All' ? 'md:col-span-5 md:flex md:flex-col md:justify-end' : ''}`}>
                <p className="text-sm text-muted">{p.industry}</p>
                <h3 className="mt-1 text-2xl font-bold tracking-tight">{p.name}</h3>
                <p className="mt-2 text-muted">{p.services.slice(0, 3).join(', ')}{p.services.length > 3 ? ` and ${p.services.length - 3} more` : ''}.</p>
                <button onClick={() => setSel(p)} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent underline-offset-4 hover:underline">View details <ArrowUpRight size={16} /></button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {sel && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-end justify-center bg-ink/60 p-0 md:items-center md:p-6" onClick={() => setSel(null)}>
            <motion.div role="dialog" aria-modal="true" aria-label={sel.name} initial={{ y: 30 }} animate={{ y: 0 }} exit={{ y: 30 }} transition={{ duration: 0.3, ease }} onClick={e => e.stopPropagation()} className="max-h-[92vh] w-full max-w-3xl overflow-y-auto bg-paper">
              <Visual p={sel} big />
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div><p className="text-sm text-muted">{sel.industry}</p><h3 className="text-3xl font-extrabold tracking-tight">{sel.name}</h3></div>
                  <button autoFocus onClick={() => setSel(null)} aria-label="Close details" className="border border-line p-2 hover:border-ink"><X size={18} /></button>
                </div>
                <p className="mt-4 text-lg leading-relaxed text-muted">{sel.summary}</p>
                <h4 className="mt-6 text-sm font-bold">Services provided</h4>
                <ul className="mt-2 flex flex-wrap gap-2">{sel.services.map(s => <li key={s} className="border border-line px-3 py-1 text-sm">{s}</li>)}</ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function Results() {
  return (
    <section className="border-y border-line bg-[#EFEBE0]" aria-label="Results and achievements">
      <div className={`${wrap} grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4`}>
        {metrics.map(m => (
          <Reveal key={m.l}><p className="text-6xl font-extrabold tracking-tighter text-accent"><Count to={m.v} suffix={m.s} animate={m.a} /></p><p className="mt-2 max-w-[16rem] text-muted">{m.l}</p></Reveal>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className={`${wrap} grid gap-10 py-20 lg:grid-cols-12 lg:py-28`}>
      <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:col-span-4">Experience</h2>
      <div className="lg:col-span-8">
        <div className="flex flex-col justify-between gap-1 border-b border-ink pb-4 sm:flex-row sm:items-baseline">
          <div><h3 className="text-2xl font-bold tracking-tight">Founder / Digital Marketing Strategist</h3><p className="text-muted">Venova Digitals</p></div>
          <p className="font-semibold">2025 – Present</p>
        </div>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">Founded and manage a digital marketing agency focused on helping businesses establish their digital presence through strategic marketing, creative content and digital solutions.</p>
        <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">{responsibilities.map(r => <li key={r} className="border-t border-line py-3 text-[15px]">{r}</li>)}</ul>
      </div>
    </section>
  )
}

function ToolsEdu() {
  return (
    <section className="border-t border-line">
      <div className={`${wrap} grid gap-16 py-20 lg:grid-cols-2 lg:py-24`}>
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight">Tools I work with</h2>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-lg font-semibold">{tools.map(t => <li key={t}>{t}</li>)}</ul>
        </div>
        <div id="education">
          <h2 className="text-2xl font-extrabold tracking-tight">Education</h2>
          <ul className="mt-6">{education.map(e => (
            <li key={e.t} className="flex justify-between gap-4 border-t border-line py-4">
              <div><p className="font-bold">{e.t}</p>{e.d && <p className="text-muted">{e.d}</p>}{e.w && <p className="text-muted">{e.w}</p>}</div>
              <p className="whitespace-nowrap text-sm font-semibold">{e.y}</p>
            </li>))}</ul>
        </div>
      </div>
    </section>
  )
}

type Status = 'idle' | 'sending' | 'sent' | 'error'
function Contact() {
  const [v, setV] = useState({ name: '', email: '', message: '' })
  const [err, setErr] = useState<Record<string, string>>({})
  const [st, setSt] = useState<Status>('idle')
  const submit = async (e: FormEvent) => {
    e.preventDefault()
    const x: Record<string, string> = {}
    if (v.name.trim().length < 2) x.name = 'Enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) x.email = 'Enter a valid email address.'
    if (v.message.trim().length < 10) x.message = 'Write at least 10 characters.'
    setErr(x); if (Object.keys(x).length) return
    setSt('sending')
    try {
      if (site.formEndpoint) {
        const r = await fetch(site.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(v) })
        if (!r.ok) throw new Error('failed')
      } else {
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Portfolio enquiry from ' + v.name)}&body=${encodeURIComponent(v.message + '\n\n' + v.name + ' (' + v.email + ')')}`
      }
      setSt('sent'); setV({ name: '', email: '', message: '' })
    } catch { setSt('error') }
  }
  const field = 'mt-1 w-full border border-ink/40 bg-transparent px-3 py-2.5 text-paper placeholder:text-paper/40 focus:border-paper'
  const link = 'inline-flex items-center gap-3 border-b border-paper/20 py-3 hover:text-white'
  return (
    <section id="contact" className="bg-ink text-paper">
      <div className={`${wrap} grid gap-12 py-20 lg:grid-cols-12 lg:py-28`}>
        <div className="lg:col-span-6">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">Have a brand to grow? Let's make it happen.</h2>
          <p className="mt-5 max-w-md text-lg text-paper/70">I'm always interested in connecting with ambitious businesses, creative teams and people who believe in meaningful digital growth.</p>
          <div className="mt-8 flex flex-col items-start">
            <a className={link} href={`mailto:${site.email}`}><Mail size={18} />{site.email}</a>
            <a className={link} href={`tel:${site.phone.replace(/\s/g, '')}`}><Phone size={18} />{site.phone}</a>
            <a className={link} href={site.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} />LinkedIn</a>
            <a className={link} href={site.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={18} />Instagram</a>
          </div>
          <a href={site.resume} download className={`${btn} mt-8 bg-paper text-ink hover:bg-white`}><Download size={16} />Download Resume</a>
        </div>
        <form onSubmit={submit} noValidate className="space-y-5 lg:col-span-5 lg:col-start-8" aria-label="Contact form">
          {(['name', 'email', 'message'] as const).map(k => (
            <div key={k}>
              <label htmlFor={k} className="text-sm font-semibold capitalize">{k}</label>
              {k === 'message'
                ? <textarea id={k} rows={5} value={v[k]} onChange={e => setV({ ...v, [k]: e.target.value })} aria-invalid={!!err[k]} className={field} placeholder="Tell me about your brand and goals" />
                : <input id={k} type={k === 'email' ? 'email' : 'text'} value={v[k]} onChange={e => setV({ ...v, [k]: e.target.value })} aria-invalid={!!err[k]} className={field} />}
              {err[k] && <p role="alert" className="mt-1 text-sm text-amber-300">{err[k]}</p>}
            </div>
          ))}
          <button disabled={st === 'sending'} className={`${btn} w-full bg-accent text-white hover:bg-[#3d58d6] disabled:opacity-60`}>{st === 'sending' ? <><Loader2 className="animate-spin" size={16} />Sending</> : 'Send message'}</button>
          <p role="status" className="min-h-6 text-sm">
            {st === 'sent' && (site.formEndpoint ? 'Message sent. I will reply by email.' : 'Your email app should open with the message ready to send.')}
            {st === 'error' && <span className="text-amber-300">Message not sent. Email {site.email} directly.</span>}
          </p>
        </form>
      </div>
      <p className={`${wrap} border-t border-paper/15 py-6 text-sm text-paper/60`}>© {new Date().getFullYear()} Sai Venkat. {site.location}.</p>
    </section>
  )
}

export default function App() {
  return (<><Header /><main><Hero /><About /><Expertise /><Projects /><Results /><Experience /><ToolsEdu /><Contact /></main></>)
}
