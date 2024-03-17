import './footer.css'
import { personalData } from '../../data/personalData'

const footerHtml = `
    <h3>Where to find me:</h3>
    <div class = "findMe-container">
        <a href="mailto:${personalData.contactEmail}" target=“_blank” >
          <img src = '../../assets/icons/email.png' alt='Email'></img>
        </a>
        <a href="tel:${personalData.contactPhone}" target=“_blank” >
          <img src = '../../assets/icons/phone.png' alt='Phone'></img>
        </a>
        <a href="${personalData.linkedInUrl}" target=“_blank” >
          <img src = '../../assets/icons/linkedin.png' alt='LinkedIn'></img>
        </a>
        <a href="${personalData.GitHubUrl}" target=“_blank” >
          <img src = '../../assets/icons/github-mark.png' alt='GitHub'></img>
        </a>
    </div>
  
  `

export const renderFooter = () => {
  document.querySelector('footer').innerHTML = footerHtml
}
