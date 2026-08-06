import React, { useEffect, useRef, useState } from 'react';
import './Footer.css';
import logoImg from '../assets/Logo_1.png';

const Footer = () => {
  const canvasRef = useRef(null);
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  // 3D Canvas Mesh Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 1,
      baseAlpha: Math.random() * 0.5 + 0.2
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 124, 60, ${p.baseAlpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#e07c3c';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(224, 124, 60, ${1 - dist / 110 * 0.5})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        const mouseDist = Math.hypot(p.x - mouseX, p.y - mouseY);
        if (mouseDist < 140) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(246, 178, 107, ${1 - mouseDist / 140})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    const current = footerRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  // Magnetic Button Effect
  const handleMagneticMove = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    target.style.transform = `translate3d(${x * 0.3}px, ${y * 0.3}px, 0) scale(1.15)`;
  };

  const handleMagneticReset = (e) => {
    e.currentTarget.style.transform = `translate3d(0,0,0) scale(1)`;
  };

  return (
    <footer className={`futuristic-footer ${isVisible ? 'active-view' : ''}`} ref={footerRef}>
      <canvas ref={canvasRef} className="footer-mesh-canvas" />

      {/* Cyber Neon Line Separator */}
      <div className="cyber-border-line">
        <div className="cyber-node node-left"></div>
        <div className="cyber-glow-beam"></div>
        <div className="cyber-node node-right"></div>
      </div>

      {/* Grid Layout */}
      <div className="footer-glass-grid">
        {/* Brand Card */}
        <div className="glass-card brand-card cyber-anim" style={{ '--stagger': '0.1s' }}>
          <div className="hologram-logo">
            <img src={logoImg} alt="Curry Grill" className="brand-logo" />
            <div className="brand-title">
              <h2>Curry Grill</h2>
              <span className="cyber-tag">v2.0 NEXT-GEN</span>
            </div>
          </div>
          <p className="futuristic-text">
            Haute gastronomie Indo-Pakistanaise. Fusion d'héritage culinaire et de haute précision gustative.
          </p>
          <div className="cyber-badge-container">
            <div className="cyber-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#f6b26b"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <span>Gastronomie Authentique</span>
            </div>
          </div>
        </div>

        
          {/* Navigation */}
          <div className="glass-card cyber-anim" style={{ '--stagger': '0.2s' }}>
            <h4 className="card-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e07c3c" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              Navigation
            </h4>
            <ul className="cyber-list">
              {[
                { label: 'Accueil', id: 'home' },
                { label: 'Menu Midi', id: 'menu-midi' },
                { label: 'Menu Complet', id: 'menu-complet' },
                { label: 'Contact', id: 'contact' }
              ].map((item, idx) => (
                <li key={idx}>
                  <a href={`#${item.id}`} onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(item.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    else if (item.id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
                    else window.location.hash = item.id;
                  }}>
                    <span className="list-arrow">›</span>
                    <span className="link-text">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        {/* Contact Terminal */}
        <div className="glass-card cyber-anim" style={{ '--stagger': '0.3s' }}>
          <h4 className="card-heading">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e07c3c" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> 
            Terminal Contact
          </h4>
          <div className="contact-terminal">
            <div className="terminal-row">
              <label>LOCATION</label>
              <p>28 Place Charles De Gaulle, 59270 Bailleul</p>
            </div>
            <div className="terminal-row">
              <label>HOTLINE</label>
              <p>03 10 44 15 52</p>
            </div>
            <div className="terminal-row">
              <label>EMAIL</label>
              <p>currygrill18@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Hours & Socials */}
        <div className="glass-card cyber-anim" style={{ '--stagger': '0.4s' }}>
          <h4 className="card-heading">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e07c3c" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> 
            Horaires
          </h4>
          <div className="cyber-hours-box">
            <div className="hours-status"><span className="pulse-dot"></span> EN SERVICE</div>
            <div className="hours-time">
              <span>Lun - Dim:</span>
              <p>12:00 - 14:30 | 18:00 - 22:30</p>
            </div>
          </div>

          <div className="magnetic-social-hub">
            <h5>Réseaux Sociaux</h5>
            <div className="social-nodes">
              {[
                {
                  name: 'Facebook',
                  href: 'https://facebook.com/currygrill18',
                  color: '#1877F2',
                  svg: (
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99H7.9V12h2.538V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562V12h2.773l-.443 2.889h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  )
                },
                {
                  name: 'Instagram',
                  href: 'https://instagram.com',
                  color: '#E1306C',
                  svg: (
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm5.5-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
                    </svg>
                  )
                },
                {
                  name: 'Twitter',
                  href: 'https://twitter.com',
                  color: '#1DA1F2',
                  svg: (
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 5.9c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.4-1.8-.7.4-1.5.7-2.3.9C18.4 4.8 17.6 4.5 16.7 4.5c-1.6 0-2.8 1.3-2.8 2.9 0 .2 0 .4.1.6-2.3-.1-4.3-1.2-5.7-2.9-.2.4-.3.8-.3 1.2 0 1.1.6 2.1 1.5 2.7-.6 0-1.1-.2-1.6-.4 0 1.5 1.1 2.8 2.6 3.1-.5.1-1 .2-1.5.2-.4 0-.8 0-1.1-.1.8 2.4 3 4 5.7 4.1-2.1 1.6-4.7 2.6-7.6 2.6-.5 0-1 0-1.5-.1C4.9 21.6 7.6 22.5 10.6 22.5c7.1 0 11-6 11-11.1v-.5c.8-.6 1.4-1.3 1.9-2.2-.7.3-1.4.5-2.1.6z" />
                    </svg>
                  )
                },
                {
                  name: 'LinkedIn',
                  href: 'https://linkedin.com',
                  color: '#0A66C2',
                  svg: (
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.98 3.5C4.98 4.6 4.12 5.5 3 5.5S1 4.6 1 3.5 1.86 1.5 3 1.5s1.98.9 1.98 2zM1 8.98h4v12H1v-12zM8.98 8.98h3.84v1.67h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.66 4.78 6.12v7.27h-4v-6.44c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.38v6.56h-4v-12z" />
                    </svg>
                  )
                }
              ].map((soc, index) => (
                <a
                  key={index}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="social-node-btn"
                  style={{ ['--node-color']: soc.color }}
                  aria-label={soc.name}
                  onMouseMove={handleMagneticMove}
                  onMouseLeave={handleMagneticReset}
                >
                  {soc.svg}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="cyber-bottom-bar cyber-anim" style={{ '--stagger': '0.5s' }}>
        <div className="bottom-content">
          <p className="copyright-notice">
            © {currentYear} <strong>Curry Grill</strong>. All rights reserved.
          </p>
          <div className="hyperlinks">
            <a href="#">Confidentialité</a>
            <span>/</span>
            <a href="#">Conditions</a>
          </div>
          <p className="tech-credit">
            Crafted by <span className="brand-highlight">Bellanix Tech</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;