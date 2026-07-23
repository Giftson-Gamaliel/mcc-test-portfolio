'use client'

import React from 'react'
import { useScrollReveal } from './useScrollReveal'

const SKILL_GROUPS = [
  {
    category: 'Programming Languages',
    icon: '⌨️',
    skills: ['Java', 'Python', 'C', 'SQL'],
  },
  {
    category: 'Web Development',
    icon: '🌐',
    skills: ['HTML', 'CSS'],
  },
  {
    category: 'Core CS Concepts',
    icon: '📐',
    skills: [
      'Software Engineering',
      'Operating Systems',
      'Data Mining',
      'Big Data Analytics',
      '.NET Framework',
    ],
  },
  {
    category: 'Tools & Domains',
    icon: '🔧',
    skills: [
      'Data Preprocessing',
      'Data Analysis',
      'Internet of Things (IoT)',
      'Robotics',
    ],
  },
]

export default function Skills() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section
      id="skills"
      ref={ref}
      className="animate-section py-24 px-6 bg-[var(--bg-surface)]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading stagger-1">Technical Skills</h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {SKILL_GROUPS.map((group, gi) => (
            <div
              key={group.category}
              className={`card p-6 stagger-${gi + 2}`}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-xl" role="img" aria-label={group.category}>
                  {group.icon}
                </span>
                <h3 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-widest">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
