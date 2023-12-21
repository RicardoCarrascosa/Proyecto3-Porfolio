import './style.css'

import { renderHeader } from './components/header/header'
import { renderHome } from './components/home/home'
import { renderProject } from './components/projects/project'
import { renderSkills } from './components/skills/skills'
//  Render the elements
document.querySelector('header').innerHTML = renderHeader()

renderHome()
renderProject()
renderSkills()
