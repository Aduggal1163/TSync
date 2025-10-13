import React from 'react'
export function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900">About TSync</h2>
      <p className="mt-4 text-gray-700">TSync is built to simplify team collaboration. Inspired by tools like Jira, it focuses on clarity and speed: projects, tasks, sprints, and roles with sensible defaults. Our backend powers secure auth (local and Google), workspaces, roles, and analytics.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg bg-white border border-gray-200">
          <h3 className="font-semibold text-gray-900">Our mission</h3>
          <p className="mt-2 text-gray-700">Help teams deliver value faster by removing friction from planning and execution.</p>
        </div>
        <div className="p-6 rounded-lg bg-white border border-gray-200">
          <h3 className="font-semibold text-gray-900">What’s inside</h3>
          <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
            <li>Secure authentication with sessions</li>
            <li>Workspaces and member roles</li>
            <li>Projects, tasks, and analytics</li>
          </ul>
        </div>
      </div>
    </section>
  )
}


