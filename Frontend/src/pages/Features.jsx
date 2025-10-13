import React from 'react'
export function Features() {
  const features = [
    { title: 'Google & Local Auth', desc: 'Sign in securely with email/password or Google OAuth.' },
    { title: 'Workspaces & Roles', desc: 'Invite teammates and control permissions with roles.' },
    { title: 'Projects & Tasks', desc: 'Create projects, prioritize tasks, and track progress.' },
    { title: 'Analytics', desc: 'Get quick insights into throughput and blockers.' },
  ]
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center">
        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-200">Product</span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">Powerful features</h2>
        <p className="mt-2 text-slate-600">Everything you need to plan, track, and deliver work.</p>
      </div>

      {/* Grid */}
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={f.title} className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-blue-600/10 text-blue-700 grid place-items-center font-bold">{i+1}</div>
            <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
            <p className="mt-2 text-slate-700">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Comparison strip */}
      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-xl bg-white border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900">Boards that stay fast</h3>
          <p className="mt-2 text-slate-600">Drag-and-drop columns, quick filters, and instant search keep everyone in flow.</p>
        </div>
        <div className="p-8 rounded-xl bg-white border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900">Analytics that matter</h3>
          <p className="mt-2 text-slate-600">Velocity, burndown, and lead time so you can spot risks early.</p>
        </div>
      </div>

      {/* Callout */}
      <div className="mt-16 rounded-2xl p-8 bg-slate-50 border border-slate-200 text-center">
        <h3 className="text-2xl font-bold text-slate-900">Integrates with Google Sign-in out of the box</h3>
        <p className="mt-2 text-slate-700">Leverage your existing accounts and keep access secure.</p>
      </div>
    </section>
  )
}


