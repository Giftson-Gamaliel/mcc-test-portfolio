'use client'

import React from 'react'
import { useScrollReveal } from './useScrollReveal'

const projects = [
  {
    title: 'Data Scientist Intern – Brassy Technologies',
    description:
      'Assisted in data preprocessing and cleaning of raw datasets using Python to improve data quality. Performed exploratory data analysis (EDA) to identify trends and support data-driven decision-making. Collaborated with the data science team to prepare structured datasets for downstream analytics tasks.',
    tags: ['Python', 'Data Preprocessing', 'EDA'],
    type: 'Internship',
    period: 'May – Jun 2026',
    link: '#',
    github: '#',
  },
  {
    title: 'Hands-on Workshop on Internet of Things (IoT)',
    description:
      'Participated in a practical IoT workshop organised by the Department of Computer Science, Madras Christian College, gaining experience with IoT concepts, device connectivity, and data communication.',
    tags: ['IoT', 'Embedded Systems', 'Networking'],
    type: 'Workshop',
    period: 'MCC, Chennai',
    link: '#',
    github: '#',
  },
  {
    title: 'Two-Day Workshop on Robotics & IoT',
    description:
      'Attended a workshop on Robotics and IoT organised by the Department of Physics (Aided) in collaboration with the Institution\'s Innovation Council (IIC), Madras Christian College, covering robotics design and IoT integration.',
    tags: ['Robotics', 'IoT', 'Innovation'],
    type: 'Workshop',
    period: 'MCC, Chennai',
    link: '#',
    github: '#',
  },
]

export default function Project() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id="projects" ref={ref} className="animate-section py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <h2 className="section-heading stagger-1">Projects &amp; Experience</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, i) => (
            <div
              key={proj.title}
              className={`card flex flex-col p-6 stagger-${i + 2}`}
            >
              {/* Header row */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <span
                  className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border"
                  style={{
                    background: proj.type === 'Internship'
                      ? 'rgba(56,189,248,0.1)' : 'rgba(129,140,248,0.1)',
                    borderColor: proj.type === 'Internship'
                      ? 'rgba(56,189,248,0.3)' : 'rgba(129,140,248,0.3)',
                    color: proj.type === 'Internship'
                      ? 'var(--accent-1)' : 'var(--accent-2)',
                  }}
                >
                  {proj.type}
                </span>
                <span className="text-[11px] text-[var(--text-muted)] whitespace-nowrap">
                  {proj.period}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[var(--text-primary)] font-semibold text-base leading-snug mb-2">
                {proj.title}
              </h3>

              {/* Description */}
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-grow mb-4">
                {proj.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {proj.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2 py-0.5 rounded bg-[var(--bg-muted)] text-[var(--text-muted)] border border-[var(--border)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-auto">
                {proj.link !== '#' && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[var(--accent-1)] hover:underline underline-offset-2"
                  >
                    Live ↗
                  </a>
                )}
                {proj.github !== '#' && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[var(--accent-2)] hover:underline underline-offset-2"
                  >
                    GitHub ↗
                  </a>
                )}
                {proj.link === '#' && proj.github === '#' && (
                  <span className="text-[11px] text-[var(--text-muted)] italic">Links not available</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
