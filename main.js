import './style.css'

import { renderHeader } from './components/header/header'
import { renderFooter } from './components/footer/footer'
import { renderHome } from './components/home/home'
import { renderProject } from './components/projects/project'
import { renderSkills } from './components/skills/skills'
import { renderExperiences } from './components/experience/experience'

const pageSel = (test) => {
  let pageUrl = document.URL
  console.log(pageUrl.includes('/home'))
  if (pageUrl.includes('/home')) {
    renderHome()
  } else if (pageUrl.includes('/experience')) {
    renderExperiences()
  } else if (pageUrl.includes('/projects')) {
    renderProject()
  } else if (pageUrl.includes('/skills')) {
    renderSkills()
  } else {
    renderHome()
  }
}
//  Render the elements
renderHeader()

document.querySelector('#homeLink').addEventListener('click', pageSel())
document.querySelector('#experienceLink').addEventListener('click', pageSel())
document.querySelector('#projectsLink').addEventListener('click', pageSel())
document.querySelector('#skillsLink').addEventListener('click', pageSel())

renderFooter()
