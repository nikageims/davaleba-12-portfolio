import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <main className="home">
      <div className="home__content">
        <p className="home__greeting">👋 Hello, I'm</p>
        <h1 className="home__name">Nika_Geims</h1>
        <h2 className="home__title">
          <span className="home__title-prefix">{'< '}</span>
          Developer
          <span className="home__title-suffix">{' />'}</span>
        </h2>
        <p className="home__description">
          I craft beautiful, responsive web experiences with clean code and
          modern technologies. Passionate about React, UI design, and
          performance.
        </p>
        <div className="home__actions">
          <Link to="/projects" className="btn btn--primary">View Projects</Link>
          <Link to="/contact" className="btn btn--outline">Contact Me</Link>
        </div>
        <div className="home__stats">
          <div className="stat">
            <span className="stat__number">100+</span>
            <span className="stat__label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat__number">1+</span>
            <span className="stat__label">Years Exp.</span>
          </div>
          <div className="stat">
            <span className="stat__number">15+</span>
            <span className="stat__label">Technologies</span>
          </div>
        </div>
      </div>
      <div className="home__visual" aria-hidden="true">
        <div className="home__blob"></div>
        <div className="home__code-card">
          <pre>{`const developer = {
  name: "Nika",
  skills: ["React", "JS", "CSS", "HTML", "json", "pythone"],
  passion: "Building cool things",
  status: "Available 🟢"
};`}</pre>
        </div>
      </div>
    </main>
  );
}
