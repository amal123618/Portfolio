import { 
  SiPython, SiDjango, SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiFlask, SiMysql, SiMongodb, SiReact, SiVite, SiGit, SiGithub, SiJsonwebtokens, SiPostman
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

const skills = [
  'Python','Django','HTML','CSS','JavaScript','Bootstrap','Flask','MySQL','MongoDB','REST APIs','React','Vite','Git','GitHub','JWT','Postman'
]

const colorMap = {
  'Python': '#3776AB',
  'Django': '#092E20',
  'HTML': '#E34F26',
  'CSS': '#1572B6',
  'JavaScript': '#F7DC6F',
  'Bootstrap': '#7952B3',
  'Flask': '#000000',
  'MySQL': '#4479A1',
  'MongoDB': '#47A248',
  'REST APIs': '#3498DB',
  'React': '#61DAFB',
  'Vite': '#646CFF',
  'Git': '#F05032',
  'GitHub': '#181717',
  'JWT': '#000000',
  'Postman': '#FF6C37',
}

export default function Skills(){
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-slider">
          <div className="skills-track">
            {[...skills, ...skills].map((s, idx) => {
              const Icon = iconFor(s)
              return (
                <span className="skill-logo" key={`${s}-${idx}`} title={s}>
                  {Icon && <Icon style={{ color: colorFor(s), fontSize: 72 }} />}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function iconFor(name){
  const map = {
    'Python': SiPython,
    'Django': SiDjango,
    'HTML': SiHtml5,
    'CSS': SiCss3,
    'JavaScript': SiJavascript,
    'Bootstrap': SiBootstrap,
    'Flask': SiFlask,
    'MySQL': SiMysql,
    'MongoDB': SiMongodb,
    'REST APIs': TbApi,
    'React': SiReact,
    'Vite': SiVite,
    'Git': SiGit,
    'GitHub': SiGithub,
    'JWT': SiJsonwebtokens,
    'Postman': SiPostman,
  }
  return map[name] || null
}

function colorFor(name){
  return colorMap[name] || 'var(--primary)'
}
