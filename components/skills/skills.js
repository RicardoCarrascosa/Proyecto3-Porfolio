import './skills.css'
import { skillList } from '../../data/skillsList'

const skillHTML = `
<section class= "Skills">
  <h2>Skills: </h2>
  <div class= "skill-container">

  </div>
</section>
`
const skillContainerRender = (skill) => {
  let ratingStars = ''
  for (let i = 0; i < skill.rating; i++) {
    ratingStars += '⭐'
  }
  const TemplateSkills = `
  <div class='skill'>
    <img src = "${skill.logoUrl}" alt =''>${skill.name}</img>
    <p> ${ratingStars} </p>
  </div>
  `
  return TemplateSkills
}

export const renderSkills = () => {
  document.querySelector('#app').innerHTML = skillHTML
  const skillContainer = document.querySelector('.skill-container')

  skillList.forEach((skill) => {
    skillContainer.innerHTML += skillContainerRender(skill)
  })
}
