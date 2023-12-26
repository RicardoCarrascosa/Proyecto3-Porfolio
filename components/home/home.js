import './home.css'

import { personalData } from '../../data/personalData'

const homeHTML = `
  <section class= "personal">
    <H1>${personalData.name}</H1>
    <h2>${personalData.carrer}</h2>
    <p>${personalData.aboutMe}</p>
  </section>
  `
export const renderHome = () => {
  document.querySelector('#app').innerHTML = homeHTML
}
