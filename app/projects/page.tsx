// app/projects/page.tsx
export default function ProjectsPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero hero-projects">
        <div className="container">
          <h1 className="hero-title">Our Projects</h1>
          <p className="hero-subtitle">
            Real results from real clients. Explore our portfolio of work.
          </p>
        </div>
      </section>

      {/* FEATURED PROJECTS - 6 TOTAL */}
      <section className="section featured-projects">
        <div className="container">
          <div className="projects-grid">
            {/* PROJECT 1 */}
            <div className="project-card">
              <h3>TechFlow Agency</h3>
              <p>
                Complete rebrand and rebuild of a digital agency website. 
                Featuring advanced animations, CMS integration, and SEO optimization.
              </p>
              <div className="project-tags">
                <span className="tag">Next.js</span>
                <span className="tag">React</span>
                <span className="tag">Tailwind</span>
              </div>
            </div>

            {/* PROJECT 2 */}
            <div className="project-card">
              <h3>FashionHub Store</h3>
              <p>Full-stack e-commerce platform with Stripe payments and inventory management.</p>
              <div className="project-tags">
                <span className="tag">Next.js</span>
                <span className="tag">Stripe</span>
              </div>
            </div>

            {/* PROJECT 3 */}
            <div className="project-card">
              <h3>Analytics Dashboard</h3>
              <p>Real-time data visualization dashboard for business intelligence.</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Chart.js</span>
              </div>
            </div>

            {/* PROJECT 4 */}
            <div className="project-card">
              <h3>HealthTrack App</h3>
              <p>Mobile-first health & fitness tracking app with progress analytics and goal setting.</p>
              <div className="project-tags">
                <span className="tag">React Native</span>
                <span className="tag">Firebase</span>
                <span className="tag">PWA</span>
              </div>
            </div>

            {/* NEW PROJECT 5 */}
            <div className="project-card">
              <h3>SmartHR Platform</h3>
              <p>Employee management SaaS with payroll, attendance tracking, and performance reviews.</p>
              <div className="project-tags">
                <span className="tag">Next.js</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">TypeScript</span>
              </div>
            </div>

            {/* NEW PROJECT 6 */}
            <div className="project-card">
              <h3>FoodieConnect</h3>
              <p>Restaurant discovery app with reviews, reservations, and loyalty program integration.</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">Mapbox</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT CATEGORIES - 6 TOTAL */}
      <section className="section categories-section">
        <div className="container">
          <h2 className="title">By Category</h2>
          <div className="categories-grid">
            <div className="category-card">
              <h3>Websites</h3>
              <p>Corporate sites, landing pages, portfolios</p>
              <span className="category-count">12</span>
            </div>
            <div className="category-card">
              <h3>E-Commerce</h3>
              <p>Online stores and marketplaces</p>
              <span className="category-count">8</span>
            </div>
            <div className="category-card">
              <h3>Web Apps</h3>
              <p>SaaS platforms and dashboards</p>
              <span className="category-count">15</span>
            </div>
            <div className="category-card">
              <h3>Design Systems</h3>
              <p>UI kits and design systems</p>
              <span className="category-count">5</span>
            </div>
            <div className="category-card">
              <h3>Mobile Apps</h3>
              <p>React Native & PWA applications</p>
              <span className="category-count">7</span>
            </div>
            <div className="category-card">
              <h3>Marketing Sites</h3>
              <p>Campaign landing pages & funnels</p>
              <span className="category-count">10</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <h2 className="title">Your Project Here?</h2>
          <p className="subtitle">Let's create something amazing together</p>
          <div className="cta-buttons">
            <a href="/contact" className="hero-button primary">Start Project</a>
            <a href="/services" className="hero-button secondary">Our Services</a>
          </div>
        </div>
      </section>
    </>
  );
}
