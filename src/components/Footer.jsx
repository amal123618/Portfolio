import { SiLinkedin, SiGithub, SiWhatsapp } from 'react-icons/si'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brand">Amal<span>jith</span></div>
        <nav className="socials">
          <a href="https://www.linkedin.com/in/amaljith-kv/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <SiLinkedin />
          </a>
          <a href="https://wa.me/7994773594" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <SiWhatsapp />
          </a>
          <a href="https://github.com/amal123618" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <SiGithub />
          </a>
        </nav>
      </div>
    </footer>
  )
}
