import './About.css';

export default function About() {
  return (
    <main className="about page-container">
      <div className="page-header">
        <h1>About <span className="accent">Me</span></h1>
        <div className="page-header__line"></div>
      </div>

      <div className="about__grid">
        <div className="about__avatar-wrap">
          <div className="about__avatar">
            <span>NB</span>
          </div>
          <div className="about__availability">
            <span className="dot"></span> Available for work
          </div>
        </div>

        <div className="about__text">
          <p>
            Hi! I'm <strong>Nika_Geims</strong>, a passionate developer based in Tbilisi,
            Georgia. I love turning complex problems into simple, beautiful, and intuitive web interfaces.
          </p>
          <p>
            My journey in web development started with curiosity about how websites work, and quickly
            evolved into a deep passion for React, modern CSS, and clean code architecture.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new design trends, contributing to open source,
            or learning new technologies to stay at the cutting edge.
          </p>

          <div className="about__info-grid">
            <div className="info-item"><span>📍</span><strong>Location:</strong> Tbilisi, Georgia</div>
            <div className="info-item"><span>🎓</span><strong>Education:</strong> Computer Science</div>
            <div className="info-item"><span>💼</span><strong>Experience:</strong> 1+ Years</div>
            <div className="info-item"><span>🌐</span><strong>Languages:</strong> Georgian, English</div>
          </div>

          <a href="/contact" className="btn btn--primary" style={{ display: 'inline-block', marginTop: '1.5rem' }}>
            Let's Work Together
          </a>
        </div>
      </div>
    </main>
  );
}
