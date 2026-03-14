import data from '../data/data.json';
import './Skills.css';

const categories = ['Frontend', 'Backend', 'Database', 'Tools', 'Design'];

export default function Skills() {
  const { skills } = data;

  return (
    <main className="skills page-container">
      <div className="page-header">
        <h1>My <span className="accent">Skills</span></h1>
        <div className="page-header__line"></div>
        <p className="page-header__sub">Technologies and tools I work with</p>
      </div>

      {categories.map(cat => {
        const catSkills = skills.filter(s => s.category === cat);
        if (!catSkills.length) return null;
        return (
          <div key={cat} className="skills__category">
            <h2 className="skills__category-title">{cat}</h2>
            <div className="skills__list">
              {catSkills.map(skill => (
                <div key={skill.id} className="skill-item">
                  <div className="skill-item__header">
                    <span className="skill-item__name">{skill.name}</span>
                    <span className="skill-item__percent">{skill.level}%</span>
                  </div>
                  <div className="skill-item__bar">
                    <div
                      className="skill-item__fill"
                      style={{ '--skill-level': `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </main>
  );
}
