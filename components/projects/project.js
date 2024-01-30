import './project.css'
import { projects } from '../../data/projectList'

const projectHTML = `
<section class= "projects">
  <h2>Projects I have done: </h2>
  <div class= "project-container">
  </div>
</section>
`
const programingProjectCard = (project) => {
  // Encontrar estilo diferenciador entre esto y diseño
  let ppcHTML = `
<a class='projectCard programming' target=“_blank” href="${project.link}">

  <h2>${project.name} </h2>
  <img src="${project.image}" alt="${project.name}"></img>
  <p> ${project.description}</p>
  <h3> ${project.languages}</h3>
  <h4> ${project.company} | ${project.year}</h4>
</a>
`
  return ppcHTML
}
const designProjectCard = (project) => {
  let dpcHTML = `
  <a class='projectCard design' target=“_blank” href="${project.link}">
    <h2>${project.name}</h2>
    <img src="${project.image}" alt="${project.name}"></img>
    <p> ${project.description}</p>
    <h3> ${project.languages} </h3>
    <h4> ${project.company} | ${project.year}</h4>
  </a>
  `
  return dpcHTML
}

export const renderProject = () => {
  document.querySelector('#app').innerHTML = projectHTML
  const projectContainer = document.querySelector('.project-container')

  projects.forEach((project) => {
    if (project.type == 'programming') {
      projectContainer.innerHTML += programingProjectCard(project)
    } else if (project.type == 'Design') {
      projectContainer.innerHTML += designProjectCard(project)
    }
  })
}
