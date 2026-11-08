import { useState } from 'react'

const programs = {
  Strength: { level: 'Intermediate', weeks: 8, sessions: 4, desc: 'Build real strength with progressive overload and smart deload weeks.' },
  Cardio: { level: 'All levels', weeks: 6, sessions: 5, desc: 'Boost endurance with mixed running, cycling and rowing sessions.' },
  Yoga: { level: 'Beginner', weeks: 4, sessions: 3, desc: 'Improve flexibility, balance and focus with guided flows.' },
  HIIT: { level: 'Advanced', weeks: 6, sessions: 4, desc: 'Short, intense workouts that burn calories and save time.' },
}

const features = [
  ['01', 'AI workout plans', 'Plans that adjust to your level, goals and schedule.'],
  ['02', 'Live tracking', 'Sync with your watch and see stats in real time.'],
  ['03', 'Smart nutrition', 'Simple meal ideas matched to your training.'],
  ['04', 'Community', 'Join challenges and stay motivated with friends.'],
]

const reviews = [
  ['The plans feel made for me. I finally stick to a routine.', 'Alex M.', 'bg-amber-400'],
  ['Clean design and the progress charts keep me going every week.', 'Priya K.', 'bg-indigo-500'],
  ['Simple, fast and motivating. My favorite fitness app.', 'Daniel R.', 'bg-emerald-500'],
]

const tags = ['Strength', 'Cardio', 'Yoga', 'HIIT', 'Nutrition', 'Recovery', 'Mobility']

function Phone({ className = '', children }) {
  return (
    <div className={`w-56 rounded-[2.5rem] border-8 border-neutral-800 bg-neutral-900 p-5 shadow-2xl shadow-black/60 sm:w-60 ${className}`}>
      {children}
    </div>
  )
}

function StatRow({ label, value }) {
  return (
    <div className="mt-2.5 flex justify-between rounded-xl bg-neutral-800 px-3.5 py-3 text-sm">
      <span className="text-neutral-300">{label}</span><b className="text-lime-brand">{value}</b>
    </div>
  )
}

function BmiCalculator() {
  const [h, setH] = useState(170)
  const [w, setW] = useState(68)
  const bmi = (w / (h / 100) ** 2).toFixed(1)
  const label = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Healthy' : bmi < 30 ? 'Overweight' : 'High'
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-7">
      <h3 className="text-2xl font-black uppercase">Quick BMI check</h3>
      <p className="mt-1 text-neutral-400">Drag the sliders to see your result.</p>
      {[['Height', h, setH, 140, 210, 'cm'], ['Weight', w, setW, 40, 140, 'kg']].map(([n, v, set, min, max, u]) => (
        <label key={n} className="mt-6 block">
          <span className="flex justify-between text-sm font-semibold"><span>{n}</span><span className="text-lime-brand">{v} {u}</span></span>
          <input type="range" min={min} max={max} value={v} onChange={(e) => set(+e.target.value)} className="mt-2 w-full accent-lime-400" />
        </label>
      ))}
      <div className="mt-6 flex items-end justify-between rounded-2xl bg-neutral-800 p-5">
        <div><p className="text-sm text-neutral-400">Your BMI</p><p className="text-4xl font-black">{bmi}</p></div>
        <span className="rounded-full bg-lime-brand px-4 py-1.5 text-sm font-extrabold text-neutral-950">{label}</span>
      </div>
    </div>
  )
}

export default function App() {
  const [menu, setMenu] = useState(false)
  const [tab, setTab] = useState('Strength')
  const p = programs[tab]

  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-950 font-sans text-neutral-50">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <a href="#" className="text-2xl font-black tracking-tight">Fit<span className="text-lime-brand">Pulse</span></a>
        <nav className="hidden gap-8 text-sm text-neutral-400 md:flex">
          {['Features', 'Programs', 'Reviews', 'Download'].map((l) => <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-white">{l}</a>)}
        </nav>
        <a href="#download" className="hidden rounded-full bg-lime-brand px-5 py-2.5 text-sm font-extrabold text-neutral-950 hover:brightness-110 md:block">Download app</a>
        <button aria-label="Menu" onClick={() => setMenu(!menu)} className="md:hidden">
          <span className="block h-0.5 w-6 bg-white" /><span className="mt-1.5 block h-0.5 w-6 bg-white" /><span className="mt-1.5 block h-0.5 w-6 bg-white" />
        </button>
      </header>
      {menu && (
        <div className="px-5 pb-4 md:hidden">
          {['Features', 'Programs', 'Reviews', 'Download'].map((l) => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenu(false)} className="block py-3 text-neutral-300">{l}</a>)}
        </div>
      )}

      <section className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-8 lg:grid-cols-2">
        <div className="pointer-events-none absolute right-10 top-10 h-96 w-96 rounded-full bg-lime-400/25 blur-3xl" />
        <div className="relative">
          <p className="text-xs font-extrabold tracking-[0.25em] text-lime-brand">YOUR PERSONAL AI COACH</p>
          <h1 className="mt-4 text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl">Train smarter.<br /><span className="text-lime-brand">Get stronger.</span></h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-neutral-400">Personalized workouts, real-time progress tracking and nutrition tips that adapt to you, every single day.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#download" className="rounded-full bg-lime-brand px-6 py-3.5 font-extrabold text-neutral-950 hover:brightness-110">Start free 7-day trial</a>
            <a href="#programs" className="rounded-full border border-neutral-700 px-6 py-3.5 font-extrabold hover:border-neutral-500">See programs</a>
          </div>
          <div className="mt-10 flex gap-6 sm:gap-10">
            {[['500k+', 'Active users'], ['4.9★', 'App rating'], ['1,200+', 'Workouts']].map(([a, b]) => (
              <div key={b}><p className="text-2xl font-black sm:text-3xl">{a}</p><p className="text-sm text-neutral-500">{b}</p></div>
            ))}
          </div>
        </div>
        <div className="relative flex h-[30rem] justify-center">
          <Phone className="float relative z-10">
            <p className="text-sm text-neutral-400">Good morning, Sara</p>
            <p className="text-xl font-bold">Today's goal</p>
            <div className="mx-auto my-5 grid h-36 w-36 place-items-center rounded-full" style={{ background: 'conic-gradient(#a3e635 0 72%, #262626 72% 100%)' }}>
              <div className="grid h-28 w-28 place-items-center rounded-full bg-neutral-900 text-center">
                <div><p className="text-2xl font-black">72%</p><p className="text-[11px] text-neutral-500">8,640 steps</p></div>
              </div>
            </div>
            <StatRow label="Calories" value="540 kcal" />
            <StatRow label="Workout" value="32 min" />
            <StatRow label="Heart rate" value="118 bpm" />
          </Phone>
          <Phone className="absolute left-1/2 top-12 ml-6 hidden rotate-6 opacity-90 sm:block">
            <p className="text-sm text-neutral-400">This week</p>
            <p className="text-xl font-bold">Progress</p>
            <div className="mt-6 flex h-36 items-end gap-2">
              {[40, 65, 50, 85, 70, 95, 60].map((v, i) => <span key={i} className="flex-1 rounded-md bg-lime-brand" style={{ height: `${v}%` }} />)}
            </div>
            <StatRow label="Best streak" value="12 days" />
          </Phone>
        </div>
      </section>

      <div className="overflow-hidden bg-lime-brand py-4 text-neutral-950">
        <div className="marquee flex w-max gap-10 text-xl font-black uppercase tracking-wide">
          {[...tags, ...tags].map((t, i) => <span key={i} className="flex gap-10">{t}<span>•</span></span>)}
        </div>
      </div>

      <section id="features" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-center text-4xl font-black uppercase tracking-tight sm:text-5xl">Built around <span className="text-lime-brand">you</span></h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(([n, t, d]) => (
            <div key={n} className="rounded-3xl border border-neutral-800 bg-neutral-900 p-7 transition hover:border-lime-400/60">
              <p className="text-sm font-black text-lime-brand">{n}</p>
              <h3 className="mt-3 text-xl font-bold">{t}</h3>
              <p className="mt-2 leading-relaxed text-neutral-400">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="programs" className="mx-auto grid max-w-6xl gap-8 px-5 pb-20 lg:grid-cols-2">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-7">
          <h3 className="text-2xl font-black uppercase">Pick a program</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {Object.keys(programs).map((k) => (
              <button key={k} onClick={() => setTab(k)} className={`rounded-full px-4 py-2 text-sm font-bold ${tab === k ? 'bg-lime-brand text-neutral-950' : 'bg-neutral-800 text-neutral-300'}`}>{k}</button>
            ))}
          </div>
          <p className="mt-6 text-lg text-neutral-300">{p.desc}</p>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            {[['Level', p.level], ['Weeks', p.weeks], ['Per week', p.sessions]].map(([a, b]) => (
              <div key={a} className="rounded-2xl bg-neutral-800 p-4"><p className="text-xs text-neutral-500">{a}</p><p className="mt-1 font-black">{b}</p></div>
            ))}
          </div>
        </div>
        <BmiCalculator />
      </section>

      <section id="reviews" className="mx-auto grid max-w-6xl gap-5 px-5 pb-20 md:grid-cols-3">
        {reviews.map(([q, n, c]) => (
          <div key={n} className="rounded-3xl border border-neutral-800 bg-neutral-900 p-7">
            <p className="tracking-widest text-lime-brand">★★★★★</p>
            <p className="mt-3 leading-relaxed text-neutral-300">{q}</p>
            <p className="mt-5 flex items-center gap-3 font-bold"><span className={`h-10 w-10 rounded-full ${c}`} />{n}</p>
          </div>
        ))}
      </section>

      <section id="download" className="mx-auto max-w-6xl px-5 pb-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-neutral-800 bg-neutral-900 p-8 sm:p-14 md:flex-row md:items-center">
          <h2 className="text-4xl font-black uppercase leading-tight">Start your<br /><span className="text-lime-brand">journey today</span></h2>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="rounded-2xl bg-white px-6 py-3.5 font-extrabold text-neutral-950"> App Store</a>
            <a href="#" className="rounded-2xl bg-white px-6 py-3.5 font-extrabold text-neutral-950">▶ Google Play</a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-5 pb-10 text-sm text-neutral-500 sm:flex-row">
        <span>© 2026 FitPulse</span><span>Privacy · Terms · Support</span>
      </footer>
    </div>
  )
}
