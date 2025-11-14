const data = [
  {
    title: 'Event based ecommerce platform',
    desc: 'Developed a platform for event organizers to streamline shopping with customizable bundles, themed product suggestions, and guest management tools for events like weddings, parties, and seasonal holidays.',
    link: 'https://eventshop.onrender.com',
    img: '/assets/images/J.png'
  },
  {
    title: 'Blog app',
    desc: 'Short description of the project highlighting stack and impact.',
    link: 'https://blog-11-2006.onrender.com',
    img: '/assets/images/Blogi.jpg'
  }
];

export default function Projects(){
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid projects">
          {data.map((p,i) => (
            <div className="card project" key={i}>
              <div className="thumb"><img src={p.img} alt={p.title} loading="lazy" /></div>
              <div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-actions">
                  <a className="btn-primary" href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.title}`}>
                    View project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
