// app/about/page.tsx
export default function AboutPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero hero-about">
        <div className="container">
          <h1 className="hero-title">About Orbit Digital</h1>
          <p className="hero-subtitle">
            We craft digital experiences that transform businesses and drive growth.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section story-section">
        <div className="container">
          <div className="content-grid">
            <div className="text-content">
              <h2 className="title">Our Story</h2>
              <p className="subtitle">
                Founded in 2022, Orbit Digital started with a simple mission: to 
                bridge the gap between beautiful design and powerful technology. 
                Today, we serve 50+ clients worldwide, delivering solutions that 
                scale with their ambitions.
              </p>
              <div className="stats-grid">
                <div className="stat">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Delivered</div>
                </div>
                <div className="stat">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
                <div className="stat">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="image-content">
              <div className="about-hero-image"></div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="section team-section">
        <div className="container">
          <h2 className="title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar leader"></div>
              <div className="team-info">
                <h3>Alex Johnson</h3>
                <p className="team-role">Founder & CEO</p>
                <p>15+ years in digital strategy and leadership.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-avatar designer"></div>
              <div className="team-info">
                <h3>Priya Sharma</h3>
                <p className="team-role">Lead Designer</p>
                <p>Specializes in modern UI/UX and motion design.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-avatar developer"></div>
              <div className="team-info">
                <h3>Rahul Patel</h3>
                <p className="team-role">Lead Developer</p>
                <p>Full-stack expert with React & Next.js.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="section process-section">
        <div className="container">
          <h2 className="title">How We Work</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Discovery</h3>
              <p>Understand your goals, audience, and challenges.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Design</h3>
              <p>Create wireframes and stunning visual designs.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Development</h3>
              <p>Build fast, scalable solutions with modern tech.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Launch</h3>
              <p>Deploy, optimize, and support your success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <h2 className="title">Ready to Work Together?</h2>
          <p className="subtitle">Let's discuss your next project</p>
          <a href="/contact" className="hero-button primary">Start Project</a>
        </div>
      </section>
    </>
  );
}
