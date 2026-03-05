function Home() {
    return (
         // Main home section
        <section id="home" className="home-section">
            <div className="hero-content">

                <h3 className="hero-subtitle">Welcome to my Magical Portfolio</h3>

                <h1 className="hero-title">Hi! I'm Tarushi Vashist</h1>

                <h2 className="hero-role">Frontend Developer</h2>

                <p className="hero-intro">
                    Building modern and interactive web experiences with creativity, logic, and a touch of magic!
                </p>
                <div className="hero-buttons">
                    <a href="#projects"><button className="btn-primary">View Projects</button></a>
                    <a href="#about"><button className="btn-secondary">More About Me</button></a>
                </div>
            </div>

            {/* Floating particles effect */}
            <div className="sparkles">
                 <div className="sparkle s1"></div>
                <div className="sparkle s2"></div>
        <div className="sparkle s3"></div>
            </div>
        </section>
    )
}

export default Home
