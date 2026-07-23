'use client'

import React from 'react'
import { useScrollReveal } from './useScrollReveal'

const CONTACT_ITEMS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'giftsonofficial04@gmail.com',
    href: 'mailto:giftsonofficial04@gmail.com',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+91 7904648800',
    href: 'tel:+917904648800',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'Tirunelveli, Tamil Nadu, India',
    href: null,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: '[ADD YOUR LINKEDIN URL]',
    href: null,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
    label: 'GitHub',
    value: '[ADD YOUR GITHUB URL]',
    href: null,
  },
]

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section
      id="contact"
      ref={ref}
      className="animate-section py-24 px-6 bg-[var(--bg-surface)]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading stagger-1">Get In Touch</h2>

        <div className="grid sm:grid-cols-2 gap-5 stagger-2">
          {CONTACT_ITEMS.map(item => {
            const isPlaceholder = item.value.startsWith('[ADD YOUR')
            const inner = (
              <>
                {/* Icon */}
                <span
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg"
                  style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
                >
                  {item.icon}
                </span>
                {/* Text */}
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-0.5">
                    {item.label}
                  </div>
                  <div
                    className={`text-sm font-medium truncate ${
                      isPlaceholder ? 'italic text-[var(--text-muted)]' : ''
                    }`}
                  >
                    {item.value}
                  </div>
                </div>
              </>
            )

            return item.href ? (
              <a key={item.label} href={item.href} className="contact-link">
                {inner}
              </a>
            ) : (
              <div key={item.label} className="contact-link" style={{ cursor: isPlaceholder ? 'default' : 'auto' }}>
                {inner}
              </div>
            )
          })}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-[var(--text-muted)] text-sm stagger-3">
          Feel free to reach out — I&apos;m always happy to connect!
        </p>
      </div>
    </section>
  )
}
