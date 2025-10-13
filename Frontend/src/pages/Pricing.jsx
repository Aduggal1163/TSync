import React from 'react'
export function Pricing() {
  const tiers = [
    { name: 'Free', price: '$0', features: ['Up to 3 projects', 'Basic tasks', 'Community support'] },
    { name: 'Pro', price: '$9', features: ['Unlimited projects', 'Advanced roles', 'Analytics'], highlight: true },
    { name: 'Team', price: '$19', features: ['Priority support', 'SSO (Google)', 'Reports & exports'] },
  ]
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center">Simple pricing</h2>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div key={t.name} className={`p-6 rounded-lg border ${t.highlight ? 'border-indigo-600 shadow-md' : 'border-gray-200'} bg-white`}>
            <h3 className="font-semibold text-gray-900">{t.name}</h3>
            <p className="mt-2 text-3xl font-bold">{t.price}<span className="text-sm font-normal text-gray-500">/user/mo</span></p>
            <ul className="mt-4 space-y-2 text-gray-700">
              {t.features.map((f) => <li key={f}>• {f}</li>)}
            </ul>
            <button className={`mt-6 w-full px-4 py-2 rounded-md ${t.highlight ? 'bg-indigo-600 text-white' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'}`}>Choose {t.name}</button>
          </div>
        ))}
      </div>
    </section>
  )
}


