function Projects() {
    const projects = [
        {
            title: 'Smart Health AI System',
            description: 'An AI Health Assistant',
            tags: ['React', 'CSS3', 'API'],
           
        },
        {
            title: 'Ecommerce store',
            description: 'Clones of Ecommerce Website',
            tags: ['HTML5', 'CSS3', 'JavaScript'],
           
        },
        {
            title: 'Smart Health AI System',
            description: 'Real-Time hospital navigation system.',
            tags: ['React', 'CSS Animations','API'],
    
        }
    ]

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">My Projects</h2>
            {/* Container for all project cards */}
            <div className="projects-grid">
                 {/* Loop for projects array and display each */}
                {projects.map((project, index) => (
                    <div key={index} className="project-card magical-border">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tags">
                            {/* Loop through tags */}
                            {project.tags.map((tag, tIndex) => (
                                <span key={tIndex} className="tag">{tag}</span>
                            ))}
                        </div>
                        
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
