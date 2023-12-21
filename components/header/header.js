import './header.css'

const Navbar = `
  <nav>
<h2>Ricardo Gonzalez-Carrascosa</h2>
<ul>
<li>
<a href="/home" id="homeLink">Home</a>
</li>
<li>
<a href="/experience" id="experienceLink">Experience</a>
</li>
<li>
<a href="/projects" id="projectsLink">Projects</a>
</li>
<li>
<a href="/skills" id="skillsLink">Skills</a>
</li>
</ul>
</nav>
`

export const renderHeader = () => {
  return Navbar
}
