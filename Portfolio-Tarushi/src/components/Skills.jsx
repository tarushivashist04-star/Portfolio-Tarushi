function Skills() {
    //technical list array
    const skills = [
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '✨' },
        { name: 'JavaScript', icon: '⚡' },
        { name: 'React', icon: '⚛️' }
    ]

    return (
        <section id="skills" className="skills-section">
            {/*Section heading */}
            <h2 className="section-title">My Skills</h2>
            {/*skills card */}
            <div className="skills-grid">
             
        {/* Loop for skill array and display each */}   
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card glowing-card">
                        <div className="skill-icon">{skill.icon}</div>
                        <h3>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
