import { useState } from 'react'

const projects = [
  {
    title: 'PLAMBO',
    subtitle: 'AI-powered enterprise workspace',
    meta: 'July 2025 — Present',
    room: '01',
    riddle: 'I travel in little pieces, carrying a live answer from a server to a chat. What am I?',
    clue: 'Three letters. A way for the server to send events as they happen.',
    answers: ['sse', 'server sent events', 'server-sent events'],
    description: [
      'Enterprise analytics and collaboration platform on React 19, with multi-client project management and AI workflow automation.',
      'Real-time AI chat over Server-Sent Events with streaming responses, markdown rendering and conversation management.',
      'Dashboards from CSV, XLSX and Parquet uploads, with schema editing, natural-language queries and 14 Recharts visualizations.',
      'Multi-provider generation (OpenAI, Gemini, Claude) for images, video and content, with async completion notifications.',
      'Keycloak JWT login, role-based authorization and protected routing; performance tuned with requestAnimationFrame batching, memoization and stream buffering.'
    ],
    tags: ['React 19', 'Material UI v7', 'Framer Motion', 'Recharts', 'SSE', 'Keycloak', 'OpenAI', 'Gemini', 'Claude']
  },
  {
    title: 'VYAKHYAN',
    subtitle: 'AI-powered business intelligence',
    meta: '2025 — Present',
    room: '02',
    riddle: 'No chart can hide from me. Ask in plain words; I turn your question into a picture. What am I?',
    clue: 'Look for the feature that lets you ask your data a question.',
    answers: ['askai', 'ask ai', 'ai', 'ask'],
    description: [
      'Modular analytics dashboard in React, Material UI and Context API.',
      'AskAI turns natural-language questions into charts and insights.',
      'Bar, line, pie, donut and gauge charts with drill-down analytics and a Data Tree.'
    ],
    tags: ['React', 'ECharts', 'ApexCharts']
  },
  {
    title: 'ELECTRONIC TEST SYSTEM',
    subtitle: 'Assessments & surveys',
    meta: '2024',
    room: '03',
    riddle: 'I ask the questions, gather each answer, then help you see how the class did. What am I?',
    clue: 'It is the thing you take when someone wants to test what you know.',
    answers: ['test', 'assessment', 'exam', 'survey'],
    description: [
      'Assessment and survey system with workflows built for a smoother user experience.',
      'Backend processes and SQL for user data and analytics, tested across browsers.'
    ],
    tags: ['React.js', 'SQL', 'Bootstrap']
  }
]

function ProjectDrawer({ project }) {
  const [unlocked, setUnlocked] = useState(false)
  const [answer, setAnswer] = useState('')
  const [showClue, setShowClue] = useState(false)
  const [hasError, setHasError] = useState(false)

  function tryUnlock(event) {
    event.preventDefault()
    const guess = answer.trim().toLowerCase().replace(/[.,!?]/g, '')
    const isCorrect = project.answers.some(solution => solution.toLowerCase() === guess)

    if (isCorrect) {
      setUnlocked(true)
      setHasError(false)
      return
    }

    setHasError(true)
  }

  return (
    <article className={`archive-drawer ${unlocked ? 'is-open' : ''}`}>
      <div className="drawer-face">
        <div className="drawer-topline">
          <span className="drawer-number">FILE {project.room} <i /></span>
          <span className="lock-status"><span className="lock-symbol" aria-hidden="true">{unlocked ? '◇' : '▣'}</span> {unlocked ? 'OPEN' : 'SEALED'}</span>
        </div>
        <div className="drawer-plate">
          <span className="plate-screw" />
          <span className="plate-title">{project.title}</span>
          <span className="plate-subtitle">{project.subtitle}</span>
          <span className="plate-screw" />
        </div>
        <div className="drawer-handle" aria-hidden="true"><i /><i /><i /></div>
        {!unlocked && (
          <div className="lock-panel">
            <p className="lock-instruction">A small riddle guards this drawer.</p>
            <p className="riddle">{project.riddle}</p>
            <form className="unlock-form" onSubmit={tryUnlock}>
              <label className="visually-hidden" htmlFor={`answer-${project.room}`}>Your answer</label>
              <input
                id={`answer-${project.room}`}
                value={answer}
                onChange={event => {
                  setAnswer(event.target.value)
                  setHasError(false)
                }}
                autoComplete="off"
                placeholder="Whisper your answer..."
                aria-describedby={hasError ? `feedback-${project.room}` : undefined}
                aria-invalid={hasError}
              />
              <button className="unlock-button" type="submit">Unlock <span aria-hidden="true">↗</span></button>
            </form>
            <div className="lock-footer">
              <button
                className="clue-button"
                type="button"
                aria-expanded={showClue}
                onClick={() => setShowClue(value => !value)}
              >
                {showClue ? 'Hide clue' : 'Need a clue?'} <span aria-hidden="true">{showClue ? '−' : '+'}</span>
              </button>
              <span className="lock-feedback" id={`feedback-${project.room}`} aria-live="polite">
                {hasError ? 'Not quite. Listen to the riddle again.' : ''}
              </span>
            </div>
            {showClue && <p className="clue-text">{project.clue}</p>}
          </div>
        )}
        {unlocked && (
          <div className="project-reveal">
            <div className="reveal-heading"><span className="reveal-light" /> FILE DECLASSIFIED <span className="reveal-date">{project.meta}</span></div>
            <ul>
              {project.description.map(detail => <li key={detail}>{detail}</li>)}
            </ul>
            <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            <button className="close-drawer" type="button" onClick={() => setUnlocked(false)}>Close the drawer <span aria-hidden="true">↑</span></button>
          </div>
        )}
      </div>
      <div className="drawer-shadow" aria-hidden="true" />
    </article>
  )
}

function Projects() {
  return (
    <section id="projects" className="archive-section">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="section-kicker">THE PROJECT ARCHIVE <span>— EST. 2024</span></p>
            <h2>Three things in the dark.</h2>
          </div>
          <p className="archive-instructions">Each drawer has a tiny lock.<br />A clue is always within reach.</p>
        </div>
        <div className="archive-shelf" aria-hidden="true"><span>SHRUTI DAHULE · SELECTED WORKS</span><span>3 DRAWERS</span></div>
        <div className="drawer-grid">
          {projects.map(project => <ProjectDrawer key={project.room} project={project} />)}
        </div>
        <p className="archive-endnote"><span>✳</span> You found your way through. The rest of the archive is still being written.</p>
      </div>
    </section>
  )
}

export default Projects
