import React from 'react'
export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-slate-600">
        <div>
          <div className="flex items-center gap-2 font-semibold text-lg text-slate-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white">T</span>
            <span>TSync</span>
          </div>
          <p className="mt-3">Plan, track, and ship work together with a fast, simple workflow.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Company</p>
          <ul className="mt-3 space-y-2">
            <li><a className="hover:text-slate-900" href="/about">About</a></li>
            <li><a className="hover:text-slate-900" href="/contact">Contact</a></li>
            <li><a className="hover:text-slate-900" href="/pricing">Pricing</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Product</p>
          <ul className="mt-3 space-y-2">
            <li><a className="hover:text-slate-900" href="/features">Features</a></li>
            <li><a className="hover:text-slate-900" href="#">Status</a></li>
            <li><a className="hover:text-slate-900" href="#">Docs</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Get the latest</p>
          <form className="mt-3 flex gap-2">
            <input className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" placeholder="Email address"/>
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-500">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} TSync. All rights reserved.</div>
    </footer>
  )
}


