import './experience.css'
import { experiences } from '../../data/experienceList'

const experienceHTML = `
<section class= "experiences">
  <h2>Places I worked: </h2>
  <div class= "work-container">

  </div>
  <h2>Where I studied: </h2>
  <div class= "studies-container">

  </div>
</section>
`
const experienceStudiesCard = (experience) => {
  let studiesHTML = `
<a class='studiesCard' target=“_blank” href=${experience.url}>
  <img src="${experience.companyLogo}" alt="${experience.company}"></img>
  <h3> ${experience.description} </h3>
  <h4>${experience.company}</h4>
  <h4>${experience.year}</h4>
</a>
`
  return studiesHTML
}

const workCard = (experience) => {
  let studiesHTML = `
<a class='workCard' target=“_blank” href=${experience.url}>
  <img src="${experience.companyLogo}" alt="${experience.company}"></img>
  <h3>${experience.role}</h3>
  <h4>${experience.company} | ${experience.year}</h4>
  <p> ${experience.description} </p>
  
</a>
`
  return studiesHTML
}

export const renderExperiences = () => {
  document.querySelector('#app').innerHTML = experienceHTML
  const studiesContainer = document.querySelector('.studies-container')
  const workContainer = document.querySelector('.work-container')
  experiences.forEach((experience) => {
    if (experience.type == 'job') {
      workContainer.innerHTML += workCard(experience)
    }
    if (experience.type == 'studies') {
      studiesContainer.innerHTML += experienceStudiesCard(experience)
    }
  })
}
