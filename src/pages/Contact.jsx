import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Here you would integrate a backend or email service
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <main className="contact page-container">
      <div className="page-header">
        <h1>Get In <span className="accent">Touch</span></h1>
        <div className="page-header__line"></div>
        <p className="page-header__sub">Have a project in mind? Let's talk.</p>
      </div>

      <div className="contact__grid">
        <div className="contact__info">
          <div className="contact-card">
            <span className="contact-card__icon">📧</span>
            <h3>Email</h3>
            <p>geimsnika@gmail.com</p>
          </div>
          <div className="contact-card">
            <span className="contact-card__icon">💼</span>
            <h3>LinkedIn</h3>
            <p>https://www.linkedin.com/in/nika-geims-19202b338/</p>
          </div>
          <div className="contact-card">
            <span className="contact-card__icon">🐙</span>
            <h3>GitHub</h3>
            <p>https://github.com/NikaGeims</p>
          </div>
        </div>

        <div className="contact__form-wrap">
          {submitted ? (
            <div className="contact__success">
              <span>✅</span>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I'll get back to you soon.</p>
              <button className="btn btn--outline" onClick={() => setSubmitted(false)}>
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn--primary btn--full">
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
