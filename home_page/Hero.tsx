'use client'

import React from 'react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">

        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-muted)] text-sm text-[var(--accent-1)] font-medium">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-1)] animate-pulse" />
          Open to opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight">
          <span className="text-[var(--text-primary)]">Giftson </span>
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(135deg, var(--accent-1) 0%, var(--accent-2) 100%)',
            }}
          >
            Gamaliel
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
          Aspiring Software Developer &amp; Data Science Enthusiast
          <span className="mx-2 text-[var(--text-muted)]">·</span>
          <span className="text-[var(--text-muted)] text-base">Java · Python · SQL · C · .NET · HTML/CSS</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={e => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-accent"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-6 py-2.5 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] text-sm font-semibold hover:border-[var(--border-hover)] hover:text-[var(--accent-1)] transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[var(--text-muted)] text-xs">
          <span>scroll</span>
          <svg width="12" height="16" viewBox="0 0 12 16" fill="none" className="animate-bounce">
            <path d="M6 1v14M1 10l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Ambient orb – decorative */}
      <div
        aria-hidden
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </section>
  )
}
