import { useEffect, useState } from 'react';
import axios from 'axios';
import './Projects.css';

const GITHUB_USERNAME = 'NikaGeims';

// Language color map for badges
const LANG_COLORS = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python:     '#3572a5',
  HTML:       '#e34c26',
  CSS:        '#563d7c',
  React:      '#61dafb',
  Java:       '#b07219',
  'C++':      '#f34b7d',
  C:          '#555555',
  Shell:      '#89e051',
};

function LangBadge({ lang }) {
  const color = LANG_COLORS[lang] || '#7c6cf0';
  return (
    <span className="tech-badge" style={{ '--badge-color': color }}>
      <span className="tech-badge__dot" style={{ background: color }}></span>
      {lang}
    </span>
  );
}

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

function ForkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 6a4 4 0 0 1-1-7.874V2a4 4 0 0 0 0 8v1.126A4.002 4.002 0 0 1 6 19v.874a4 4 0 1 1-2 0V19a4 4 0 0 1-1-7.874V10a4 4 0 0 0 4-4H9a4 4 0 0 0 4 4v.126A4.002 4.002 0 0 1 13 18v.874a4 4 0 1 1-2 0V18a2 2 0 1 0-2 0v.874a4 4 0 0 1-1 0V18a4 4 0 0 1-1-7.874V10a6 6 0 0 1-4-5.659V2a4 4 0 0 1 2-3.465z"/>
    </svg>
  );
}

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
        params: { sort: 'updated', per_page: 30 },
      })
      .then(res => {
        // Filter out forks, sort by stars then updated
        const filtered = res.data
          .filter(r => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(filtered);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="projects page-container">
        <div className="page-header">
          <h1>My <span className="accent">Projects</span></h1>
          <div className="page-header__line"></div>
        </div>
        <div className="projects__loading">
          <div className="spinner"></div>
          <p>Loading from GitHub...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="projects page-container">
        <div className="page-header">
          <h1>My <span className="accent">Projects</span></h1>
          <div className="page-header__line"></div>
        </div>
        <div className="projects__error">
          <span>⚠️</span>
          <p>Could not load repositories: {error}</p>
          <p className="projects__error-sub">
            Check your username or GitHub API rate limit.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="projects page-container">
      <div className="page-header">
        <h1>My <span className="accent">Projects</span></h1>
        <div className="page-header__line"></div>
        <p className="page-header__sub">
          {repos.length} public repositories · fetched live from{' '}
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="page-header__gh-link"
          >
            @{GITHUB_USERNAME}
          </a>
        </p>
      </div>

      <div className="projects__grid">
        {repos.map(repo => (
          <article key={repo.id} className="project-card">
            {/* Header row: folder icon + link icons */}
            <div className="project-card__header">
              <span className="project-card__icon">📁</span>
              <div className="project-card__links">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View on GitHub"
                  className="icon-link"
                >
                  <GitHubIcon />
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                    className="icon-link"
                  >
                    <ExternalIcon />
                  </a>
                )}
              </div>
            </div>

            {/* Title & description */}
            <h2 className="project-card__title">{repo.name}</h2>
            <p className="project-card__description">
              {repo.description || 'No description provided.'}
            </p>

            {/* Footer: language badge + stars/forks */}
            <div className="project-card__footer">
              <div className="project-card__tags">
                {repo.language && <LangBadge lang={repo.language} />}
              </div>
              <div className="project-card__stats">
                {repo.stargazers_count > 0 && (
                  <span className="repo-stat">
                    <StarIcon /> {repo.stargazers_count}
                  </span>
                )}
                {repo.forks_count > 0 && (
                  <span className="repo-stat">
                    <ForkIcon /> {repo.forks_count}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
