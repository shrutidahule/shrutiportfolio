function Education() {
  const education = [
    {
      period: '2020 – 2024',
      degree: 'B.Tech in Information Technology',
      institution: 'Kavikulguru Institute of Technology and Science, Nagpur · CGPA 8.28'
    },
    {
      period: '2019 – 2020',
      degree: '12th · Narayana Junior College',
      institution: 'Hyderabad · 75%'
    },
    {
      period: '2017 – 2018',
      degree: '10th (CBSE) · Infant Jesus English Public High School',
      institution: 'Chandrapur'
    }
  ]

  return (
    <section id="education">
      <div className="wrap">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="edu">
            <span>{edu.period}</span>
            <div>
              <strong>{edu.degree}</strong>
              <br />
              <span>{edu.institution}</span>
            </div>
          </div>
        ))}
        <p className="languages-info">Languages: English, Hindi, Marathi</p>
      </div>
    </section>
  )
}

export default Education
