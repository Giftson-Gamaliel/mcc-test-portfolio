import React from 'react'
import Navbar  from './Navbar'
import Hero    from './Hero'
import About   from './About'
import Skills  from './Skills'
import Project from './Project'
import Contact from './Contact'
import Chatbot from './Chatbot'

export default function HomePage() {
  return (
    <>
      {/* Sticky navigation */}
      <Navbar />

      {/* Main content — pt-16 reserves space under fixed navbar */}
      <main className="flex flex-col min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-[var(--text-muted)] border-t border-[var(--border)] bg-[var(--bg-base)]">
        <p>
          Built by{' '}
          <span className="text-[var(--accent-1)] font-medium">Giftson Gamaliel</span>
          {' '}· {new Date().getFullYear()}
        </p>
      </footer>

      {/* Floating chatbot widget */}
      <Chatbot />
    </>
  )
}
