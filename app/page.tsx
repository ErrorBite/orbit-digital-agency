export default function HomePage() {
  return (
    <>
      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <h1 className="hero-title">We Build Digital Experiences</h1>
          <p className="hero-subtitle">
            Orbit Digital Agency helps businesses grow with modern websites, clean design, 
            and scalable solutions that drive results.
          </p>
          <a href="/contact" className="hero-button">Contact Us</a>
        </div>
      </section>

      {/* ABOUT SECTION WITH VIDEO */}
      <section className="section about-section">
        <div className="container">
          <h2 className="title">About Orbit Digital</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="subtitle">
                We are a creative digital agency focused on delivering high-quality web 
                solutions for startups and businesses worldwide. Our team combines innovative 
                design with cutting-edge technology.
              </p>
              <a href="/about" className="link-more">Learn More →</a>
            </div>
            <div className="about-video">
              <video 
                className="intro-video"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="/videos/intro-agency.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION WITH ORIGINAL LOGOS */}
      <section className="section services-section">
        <div className="container">
          <h2 className="title">Our Services</h2>
          <div className="services-wrapper">
            <div className="grid">
              <a href="/services#web-development" className="service-card">
                <div className="service-icon web-dev">
                  <img src="/images/icons/web-dev.svg.png" alt="Web Development" />
                </div>
                <h3>Web Development</h3>
                <p>Modern, fast websites using Next.js & React</p>
              </a>
              
              <a href="/services#ui-ux-design" className="service-card">
                <div className="service-icon design">
                  <img src="/images/icons/ui-ux.svg.png" alt="UI/UX Design" />
                </div>
                <h3>UI/UX Design</h3>
                <p>Clean, intuitive designs for better UX</p>
              </a>
              
              <a href="/services#digital-marketing" className="service-card">
                <div className="service-icon marketing">
                  <img src="/images/icons/marketing.svg.png" alt="Digital Marketing" />
                </div>
                <h3>Digital Marketing</h3>
                <p>SEO, social media & growth strategies</p>
              </a>
              

            </div>
            <div className="services-footer">
              <a href="/services" className="hero-button secondary">View All Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION WITH CORRECT PATHS */}
      <section className="section projects-section">
        <div className="container">
          <h2 className="title">Featured Projects</h2>
          <div className="projects-wrapper">
            <div className="projects-grid">
              <a href="/projects#agency-site" className="project-card">
                <div 
                  className="project-image agency" 
                  style={{backgroundImage: 'url(/projects/agency-site.jpg)'}}
                ></div>
                <div className="project-info">
                  <h3>Digital Agency Site</h3>
                  <p>Modern corporate website with animations</p>
                </div>
              </a>
              
              <a href="/projects#ecommerce" className="project-card">
                <div 
                  className="project-image ecommerce" 
                  style={{backgroundImage: 'url(/projects/ecommerce.jpg)'}}
                ></div>
                <div className="project-info">
                  <h3>E-Commerce Platform</h3>
                  <p>Full-stack store with payment integration</p>
                </div>
              </a>
            </div>
            <div className="projects-footer">
              <a href="/projects" className="hero-button secondary">View All Projects</a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="title">What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"Transformed our online presence completely!"</p>
              <div className="testimonial-author">
                <span className="author-name">Sarah Chen</span>
                <span className="author-role">CEO, TechStart</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"Professional team, delivered ahead of schedule."</p>
              <div className="testimonial-author">
                <span className="author-name">Michael Rodriguez</span>
                <span className="author-role">Founder, GrowEasy</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"Outstanding design and development work."</p>
              <div className="testimonial-author">
                <span className="author-name">Priya Sharma</span>
                <span className="author-role">Marketing Director</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section cta-section">
        <div className="container">
          <h2 className="title">Ready to Start?</h2>
          <p className="subtitle">Let's create something amazing together</p>
          <div className="cta-buttons">
            <a href="/contact" className="hero-button primary">Get Started</a>
            <a href="/services" className="hero-button secondary">View Services</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Orbit Digital</h3>
              <p>Building digital experiences that drive growth</p>
            </div>
            <div className="footer-links">
              <div>
                <h4>Services</h4>
                <ul>
                  <li><a href="/services">Web Development</a></li>
                  <li><a href="/services">UI/UX Design</a></li>
                </ul>
              </div>
              <div>
                <h4>Company</h4>
                <ul>
                  <li><a href="/about">About</a></li>
                  <li><a href="/projects">Projects</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-contact">
              <h4>Contact</h4>
              <p>hello@orbitdigital.com</p>
              <p>+91 98765 43210</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Orbit Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
