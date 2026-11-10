function Projects() {
  const projects = [
    {
      title: 'PLAMBO – AI-Powered Enterprise Workspace',
      meta: 'July 2025 – Present',
      size: 'big',
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
      title: 'Vyakhyan',
      meta: 'AI-powered Business Intelligence Platform · 2025 – Present',
      size: 'featured-teal',
      description: [
        'Modular analytics dashboard in React, Material UI and Context API.',
        'AskAI turns natural-language questions into charts and insights.',
        'Bar, line, pie, donut and gauge charts with drill-down analytics and a Data Tree.'
      ],
      tags: ['React', 'ECharts', 'ApexCharts']
    },
    {
      title: 'Electronic Test System',
      meta: 'Assessments and surveys · 2024',
      size: 'featured-amber',
      description: [
        'Assessment and survey system with workflows built for a smoother user experience.',
        'Backend processes and SQL for user data and analytics, tested across browsers.'
      ],
      tags: ['React.js', 'SQL', 'Bootstrap']
    }
  ]

  return (
    <section id="projects">
      <div className="wrap">
        <h2>Projects</h2>
        <div className="proj">
          {projects.map((project, index) => (
            <article key={index} className={`card ${project.size}`}>
              <h3>{project.title}</h3>
              <div className="meta">{project.meta}</div>
              <ul>
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
