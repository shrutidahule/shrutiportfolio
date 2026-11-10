function Navigation({ scrolled }) {
  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <b>Shruti Dahule</b>
      <div>
        <a href="#work">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navigation
