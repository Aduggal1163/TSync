import React from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <section>
      {/* Hero */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="h-[400px] w-[400px] rounded-full bg-blue-100/70 blur-3xl absolute -top-24 -left-24" />
          <div className="h-[300px] w-[300px] rounded-full bg-cyan-100/60 blur-3xl absolute top-0 right-0" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-200">New • Workspace analytics</span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">Ship work faster with a collaborative task platform</h1>
              <p className="mt-4 text-lg text-slate-600">TSync helps teams plan sprints, track issues, and align on work. Simple, fast, and secure.</p>
              <div className="mt-8 flex gap-3">
                <Link to="/login" className="px-5 py-3 rounded-md bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-500">Start now</Link>
                <Link to="/features" className="px-5 py-3 rounded-md border border-slate-300 text-slate-700 font-medium hover:bg-slate-50">See features</Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="rounded-xl border border-slate-200 shadow-xl p-4 bg-white">
                <div className="h-64 bg-gradient-to-br from-slate-50 to-slate-100 rounded-md grid place-items-center text-slate-700">Team boards preview</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted by / stats */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-6">
          {[
            { kpi: '10k+', label: 'Active users' },
            { kpi: '99.9%', label: 'Uptime' },
            { kpi: '2x', label: 'Faster sprint delivery' },
          ].map((s) => (
            <div key={s.label} className="p-6 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 border border-indigo-100">
              <p className="text-3xl font-extrabold text-indigo-700">{s.kpi}</p>
              <p className="text-sm text-indigo-900/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Feature highlights */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-3 gap-8">
          {["Plan", "Track", "Report"].map((title, idx) => (
            <div key={idx} className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-semibold px-2 py-1 rounded bg-indigo-50 text-indigo-700">{idx===0?'Backlogs':idx===1?'Boards':'Dashboards'}</span>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">{title} smarter</h3>
              <p className="mt-2 text-gray-600">Use backlogs, boards, and analytics to keep work flowing and teams aligned.</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-3 gap-6">
          {[
            { quote: 'TSync kept our roadmap clear and our delivery predictable.', author: 'Priya, PM' },
            { quote: 'Setup was instant and the team onboarded in a day.', author: 'Jordan, Eng Manager' },
            { quote: 'Finally a tool that is powerful without being complicated.', author: 'Alex, Founder' },
          ].map((t) => (
            <div key={t.author} className="p-6 rounded-lg border bg-gradient-to-br from-purple-50 to-indigo-50 border-indigo-100">
              <p className="text-gray-900">“{t.quote}”</p>
              <p className="mt-3 text-sm font-semibold text-indigo-700">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-white">
          <h3 className="text-2xl font-bold">Ready to align your team?</h3>
          <p className="mt-2 text-white/80">Create a workspace and start your next sprint today.</p>
          <div className="mt-6">
            <Link to="/login" className="px-6 py-3 rounded-md bg-white text-indigo-700 font-semibold hover:bg-indigo-50 inline-block">Get started</Link>
          </div>
        </div>
      </div>
    </section>
  )
}



