export default function ContactPage() {
  return (
    <>
      <section className="hero" style={{background: 'linear-gradient(135deg, #0b4da2 0%, #1e63f0 100%)'}}>
        <div className="container">
          <h1 className="hero-title" style={{color: 'white'}}>Contact Us</h1>
          <p className="hero-subtitle" style={{color: 'rgba(255,255,255,0.95)'}}>Let's talk about your project or idea.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <form className="form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows={6} required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}
