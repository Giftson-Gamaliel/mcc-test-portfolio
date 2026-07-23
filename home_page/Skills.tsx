'use client'

import React from 'react'
import { useScrollReveal } from './useScrollReveal'

const SKILL_GROUPS = [
  {
    category: 'Programming Languages',
    icon: '⌨️',
    skills: ['Python', 'Java', 'C', 'SQL'],
  },
  {
    category: 'Data Science & ML',
    icon: '🤖',
    skills: [
      'Scikit-Learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Random Forest',
      'EDA',
      'Feature Engineering',
    ],
  },
  {
    category: 'Web & Frameworks',
    icon: '🌐',
    skills: ['HTML', 'CSS', '.NET Framework', 'Next.js'],
  },
  {
    category: 'Tools & Platforms',
    icon: '🔧',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Google Colab'],
  },
  {
    category: 'CS Fundamentals',
    icon: '📐',
    skills: [
      'Data Structures',
      'Algorithms',
      'Software Engineering',
      'Operating Systems',
      'DBMS',
      'Data Mining',
    ],
  },
  {
    category: 'Domains',
    icon: '🔬',
    skills: ['Data Preprocessing', 'Data Analysis', 'IoT', 'Robotics', 'Big Data Analytics'],
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
