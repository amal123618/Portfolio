import { SiGithub } from 'react-icons/si'
const profile = '/assets/images/amal.jpg'

export default function Hero(){
  return (
    <section className="container hero" id="home">
      <div>
        
        <h1>Hi, I'm <span>Amaljith</span></h1>
        <div className="pill">Python Full Stack Developer</div>
        <p className="subtitle">Building robust backends and elegant UIs</p>
        <div className="btn-row">
          <a className="btn" href="/assets/documents/AMALJITH KV PYTHON DEVOLOPER.pdf" download="AMALJITH_KV_PYTHON_DEVELOPER_CV.pdf">
            Download CV
          </a>
          <a className="btn-secondary" href="#contact">Contact Me</a>
          <a className="btn-secondary" href="https://github.com/amal123618" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <SiGithub /> GitHub
          </a>
        </div>
      </div>
      <div className="center">
        <div className="photo">
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </section>
  )
}
