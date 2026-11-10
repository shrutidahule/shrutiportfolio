import { useState, useEffect, useRef } from 'react'

function Work() {
  const [visibleJobs, setVisibleJobs] = useState(new Set())
  const jobRefs = useRef([])

  const workExperience = [
    {
      when: 'July 2025 – Present',
      title: 'Full Stack Developer',
      company: 'Navaantrix Pvt Ltd',
      responsibilities: [
        'Built a Business Intelligence dashboard in React, Material UI and Context API for enterprise retail analytics.',
        'Managed global state (filters, user data, themes, layouts) with Context API and useReducer.',
        'Integrated REST APIs through Axios interceptors with domain/client injection and centralized error handling.',
        'Contributed to Navaantrix BI, an AI-driven business intelligence platform, and built its ECharts and ApexCharts visualizations.',
        'Worked with the team on requirements, UI reviews and feature demos.'
      ]
    },
    {
      when: 'Jan 2024 – June 2024',
      title: 'Full Stack Developer',
      company: 'IT-NetworkZ Infosystem Pvt Ltd',
      responsibilities: [
        'Developed an Electronic Test System for assessments and surveys using React, HTML and Bootstrap.',
        'Implemented REST APIs with senior developers, plus backend logic and SQL for data and test management.'
      ]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = jobRefs.current.indexOf(entry.target)
            if (index !== -1) {
              setVisibleJobs(prev => new Set([...prev, index]))
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    jobRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="work">
      <div className="wrap">
        <h2>Where I've worked</h2>
        {workExperience.map((job, index) => (
          <div
            key={index}
            ref={el => jobRefs.current[index] = el}
            className={`job ${visibleJobs.has(index) ? 'visible' : ''}`}
          >
            <div className="when">{job.when}</div>
            <div>
              <h3>{job.title}</h3>
              <div className="co">{job.company}</div>
              <ul>
                {job.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work
