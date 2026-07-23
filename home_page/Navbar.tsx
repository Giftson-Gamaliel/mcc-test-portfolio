'use client'

import React, { useEffect, useRef, useState } from 'react'

const NAV_LINKS = [
  { label: 'Home',     href: '#hero'     },
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [active, setActive]       = useState('hero')
  const [menuOpen, setMenuOpen]   = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  /* ── scroll-shadow on navbar ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── active section via IntersectionObserver ── */
  useEffect(() => {
    const sectionIds = NAV_LINKS.map(l => l.href.slice(1))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.35 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  /* ── close menu on outside click ── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-40
        transition-all duration-300
        ${scrolled
          ? 'bg-[var(--bg-surface)]/95 backdrop-blur-md border-b border-[var(--border)] shadow-[0_4px_24px_rgba(0,0,0,0.35)]'
          : 'bg-transparent'}
      `}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo / Name */}
        <button
          onClick={() => handleNavClick('#hero')}
          className="font-bold text-base tracking-tight text-[var(--text-primary)] hover:text-[var(--accent-1)] transition-colors duration-200"
        >
          Giftson<span className="text-[var(--accent-1)]">.</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={`nav-link ${active === link.href.slice(1) ? 'active' : ''}`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-[var(--bg-muted)] transition-colors"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className={`block h-0.5 w-5 bg-[var(--text-primary)] rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-5 bg-[var(--text-primary)] rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-5 bg-[var(--text-primary)] rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden border-t border-[var(--border)] bg-[var(--bg-surface)]/95 backdrop-blur-md"
        >
          <ul className="flex flex-col px-4 py-3 gap-1">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`
                    w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium
                    transition-colors duration-200
                    ${active === link.href.slice(1)
                      ? 'bg-[var(--accent-glow)] text-[var(--accent-1)]'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--bg-muted)] hover:text-[var(--text-primary)]'}
                  `}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
