import './header.css'

window.onscroll = function () {
  myFunction()
}
var header = document.querySelector('header')
// Get the offset position of the navbar
var sticky = header.offsetTop
function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add('sticky')
  } else {
    header.classList.remove('sticky')
  }
}

const Navbar = `
<nav>

      <a href="/home" id="homeLink">Ricardo Gonzalez-Carrascosa</a>

      <a href="/experience" id="experienceLink">Experience</a>

      <a href="/projects" id="projectsLink">Projects</a>

      <a href="/skills" id="skillsLink">Skills</a>

</nav>
`
export const renderHeader = () => {
  document.querySelector('header').innerHTML = Navbar
}
