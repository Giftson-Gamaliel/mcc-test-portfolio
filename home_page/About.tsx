'use client'

import React from 'react'
import { useScrollReveal } from './useScrollReveal'

export default function About() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id="about" ref={ref} className="animate-section py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <h2 className="section-heading stagger-1">About Me</h2>

        <div className="card p-7 sm:p-10 stagger-2">
          {/* Accent side line */}
          <div className="flex gap-6">
            <div
              className="hidden sm:block w-1 flex-shrink-0 rounded-full self-stretch"
              style={{ background: 'linear-gradient(180deg, var(--accent-1), var(--accent-2))' }}
            />
            <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
              I&apos;m <span className="text-[var(--text-primary)] font-semibold">Giftson Gamaliel</span>,
              a final-year B.Sc. Computer Science student at{' '}
              <span className="text-[var(--accent-1)] font-medium">Madras Christian College, Chennai</span>,
              maintaining a <span className="text-[var(--text-primary)] font-semibold">9.2 CGPA</span> and
              building a strong foundation in programming, software engineering, and data analysis.
              I gained hands-on industry experience as a{' '}
              <span className="text-[var(--text-primary)] font-semibold">Data Scientist Intern</span>{' '}
              at Brassy Technologies (May–June 2026), where I worked on data preprocessing, exploratory
              data analysis, and collaborating with the data science team to prepare structured datasets
              for analytics. Skilled in Java, Python, C, and SQL, I enjoy applying technology to
              solve real-world problems and am actively seeking an entry-level role in software
              development or data science. Outside academics, I serve as{' '}
              <span className="text-[var(--text-primary)] font-medium">Choir Secretary</span> at Bishop
              Heber Chapel and am a passionate Gospel Singer and Pianist who loves participating in
              cultural and departmental events.
            </p>
          </div>

          {/* Quick stats */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 stagger-3">
            {[
              { value: '9.2',    label: 'CGPA'            },
              { value: '2027',   label: 'Graduating'      },
              { value: '15+',    label: 'Skills'          },
              { value: '2+',     label: 'Projects/Intern' },
            ].map(stat => (
              <div
                key={stat.label}
                className="rounded-xl bg-[var(--bg-muted)] border border-[var(--border)] px-4 py-4 text-center"
              >
                <div
                  className="text-2xl font-bold mb-1 text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))' }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
