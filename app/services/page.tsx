// app/services/page.tsx 
export default function ServicesPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero hero-services">
        <div className="container">
          <h1 className="hero-title">Our Services</h1>
          <p className="hero-subtitle">
            Comprehensive digital solutions tailored for your business growth.
          </p>
        </div>
      </section>

      {/* WEB DEVELOPMENT */}
      <section className="section service-detail">
        <div className="container">
          <div className="services-grid">
            <div className="service-content">
              <h2 className="title">Web Development</h2>
              <p className="subtitle">
                We build fast, modern websites and web applications using the latest 
                technologies like Next.js, React, and TypeScript. From landing pages 
                to complex SaaS platforms, we deliver scalable solutions.
              </p>
              <div className="service-features">
                <div className="feature">
                  <div className="feature-icon code">01</div>
                  <span>Next.js 15 & React 19</span>
                </div>
                <div className="feature">
                  <div className="feature-icon performance">02</div>
                  <span>Performance Optimized</span>
                </div>
                <div className="feature">
                  <div className="feature-icon responsive">03</div>
                  <span>Fully Responsive</span>
                </div>
                <div className="feature">
                  <div className="feature-icon seo">04</div>
                  <span>SEO Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI/UX DESIGN */}
      <section className="section service-detail alternate">
        <div className="container">
          <div className="services-grid">
            <div className="service-content">
              <h2 className="title">UI/UX Design</h2>
              <p className="subtitle">
                We create intuitive, beautiful interfaces that users love. Our design 
                process includes research, wireframing, prototyping, and testing to 
                ensure your product delights users and converts visitors.
              </p>
              <div className="service-features">
                <div className="feature">
                  <div className="feature-icon research">01</div>
                  <span>User Research</span>
                </div>
                <div className="feature">
                  <div className="feature-icon figma">02</div>
                  <span>Figma Prototypes</span>
                </div>
                <div className="feature">
                  <div className="feature-icon design-system">03</div>
                  <span>Design Systems</span>
                </div>
                <div className="feature">
                  <div className="feature-icon testing">04</div>
                  <span>Usability Testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIGITAL MARKETING */}
      <section className="section service-detail">
        <div className="container">
          <div className="services-grid">
            <div className="service-content">
              <h2 className="title">Digital Marketing</h2>
              <p className="subtitle">
                Drive traffic and conversions with data-driven marketing strategies. 
                From SEO optimization to social media campaigns and PPC management, 
                we help businesses grow their online presence effectively.
              </p>
              <div className="service-features">
                <div className="feature">
                  <div className="feature-icon seo">01</div>
                  <span>SEO Optimization</span>
                </div>
                <div className="feature">
                  <div className="feature-icon social">02</div>
                  <span>Social Media</span>
                </div>
                <div className="feature">
                  <div className="feature-icon ads">03</div>
                  <span>Google Ads</span>
                </div>
                <div className="feature">
                  <div className="feature-icon analytics">04</div>
                  <span>Analytics Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <h2 className="title">Ready to Get Started?</h2>
          <div className="cta-buttons">
            <a href="/contact" className="hero-button primary">Discuss Project</a>
            <a href="#pricing" className="hero-button secondary">View Pricing</a>
          </div>
        </div>
      </section>
    </>
  );
}
