function Skills() {
  const skills = [
    { category: 'Languages', items: 'C, JavaScript' },
    { category: 'Frameworks', items: 'React.js, Angular, Vue.js, Node.js, Express.js, Spring Boot' },
    { category: 'Databases', items: 'MySQL, SQL Server, MongoDB' },
    { category: 'Generative AI', items: 'LLMs, prompt engineering, AI content generation, OpenAI, Gemini, Claude' },
    { category: 'APIs and auth', items: 'REST APIs, Keycloak, JWT' },
    { category: 'Tools', items: 'Visual Studio, Eclipse, MySQL Workbench, Git, GitHub' },
    { category: 'Web', items: 'HTML, CSS, Bootstrap' }
  ]

  return (
    <section id="skills">
      <div className="wrap">
        <h2>Skills</h2>
        <dl className="skills">
          {skills.map((skill, index) => (
            <div key={index}>
              <dt>{skill.category}</dt>
              <dd>{skill.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Skills
