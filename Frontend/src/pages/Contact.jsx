import React from 'react'
export function Contact() {
  return (
    <section className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900">Contact us</h2>
      <p className="mt-2 text-gray-700">Have questions? We’d love to help.</p>
      <form className="mt-8 space-y-4">
        <input className="w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Name" />
        <input className="w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Email" type="email" />
        <textarea className="w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Message" rows={5} />
        <button type="submit" className="px-4 py-2 rounded-md bg-indigo-600 text-white font-semibold">Send</button>
      </form>
    </section>
  )
}


