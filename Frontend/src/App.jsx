import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Features } from './pages/Features.jsx'
import { Pricing } from './pages/Pricing.jsx'
import { Contact } from './pages/Contact.jsx'
import { Login } from './pages/Login.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}


