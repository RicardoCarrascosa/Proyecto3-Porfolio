import './home.css'

export const personalData = {
  name: 'Ricardo Gonzalez-Carrascosa',
  carrer: 'Industrial Engineer',
  linkedInUrl: 'www.linkedin.com/todo',
  GitHubUrl: 'www.github.com/todo',
  aboutMe:
    'I am an Industrial Engineer passionate about Motorsport. I consider myself as a hardworking, analytical and well organized person. I have high communication skills which make me have an easy and fast integration in a team working. My experiences make myself an independent, ambitious and responsible worker.',

  contactEmail: 'ricardogonzalezcarrascosa@unemail.es',
  contactPhone: '+34-123456789',
  profilePicture: './assets/profilePicture.png'
}

const homeHTML = `
  <section class= "personal">
    <H1>${personalData.name}</H1>
    <h2>${personalData.carrer}</h2>
    <p>${personalData.aboutMe}</p>
  </section>
  <section class= "findMe">
    <h3>Where to find me:</h3>
    <ul>
      <li>Email: ${personalData.contactEmail} </li>
      <li>Phone: ${personalData.contactPhone} </li>
      <li>Linkedin: ${personalData.linkedInUrl} </li>
      <li>GitHub: ${personalData.GitHubUrl} </li>
    </ul>
  </section>
  `

export const renderHome = () => {
  document.querySelector('#app').innerHTML = homeHTML
}
