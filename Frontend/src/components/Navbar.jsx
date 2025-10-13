import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg text-slate-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white">T</span>
          <span>TSync</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {[
            { to: '/features', label: 'Features' },
            { to: '/pricing', label: 'Pricing' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
          ].map((item) => (
            <NavLink key={item.to} to={item.to} className={({isActive}) =>
              `px-3 py-2 rounded-md transition-colors ${isActive ? 'text-blue-700 bg-blue-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`
            }>{item.label}</NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/login" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">Log in</Link>
          <Link to="/login" className="px-4 py-2 text-sm font-semibold rounded-md bg-blue-600 text-white shadow-sm hover:bg-blue-500">Get started</Link>
        </div>
      </div>
    </header>
  )
}


