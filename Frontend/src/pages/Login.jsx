import React from 'react'
import { useState } from 'react'


const API_BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:5000/api'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password })
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.message || 'Login failed')
      }
      window.location.href = '/'
    } catch (err) {
      setError(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  function handleGoogle() {
    const url = `${API_BASE}/auth/google`
    window.location.href = url
  }

  return (
    <section className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900">Log in</h2>
      <p className="mt-2 text-gray-700">Welcome back! Please enter your details.</p>

      <button onClick={handleGoogle} className="mt-6 w-full px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50">Continue with Google</button>
      <div className="my-6 flex items-center gap-4 text-gray-400">
        <span className="h-px flex-1 bg-gray-200" />
        or
        <span className="h-px flex-1 bg-gray-200" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2" placeholder="you@company.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2" placeholder="••••••••" />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button disabled={loading} type="submit" className="w-full px-4 py-2 rounded-md bg-indigo-600 text-white font-semibold disabled:opacity-50">{loading ? 'Logging in...' : 'Log in'}</button>
      </form>
    </section>
  )
}


