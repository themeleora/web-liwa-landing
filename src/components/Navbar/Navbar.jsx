import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const SURVEY_URL = 'https://forms.gle/Eu3ESnJPz4DRac1C8';

const LINKS = [
  { to: '/home', label: 'LIWA' },
  { to: '/about', label: 'About Us' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact Us' },
];

function MenuIcon({ open }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <div className={styles.wrap}>
      <div className={styles.bar}>
        <Link to="/home" className={styles.logoLink}>
          <img src="/images/liwa-logo.svg" alt="LIWA" className={styles.logo} />
        </Link>
        <div className={styles.links}>
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`${styles.link} ${location.pathname === link.to ? styles.linkActive : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <a href={SURVEY_URL} target="_blank" rel="noopener" className={styles.cta}>
          Take the Survey
        </a>
        <button
          type="button"
          className={styles.menuToggle}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {open && (
        <div id="mobile-nav-panel" className={styles.mobilePanel}>
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`${styles.mobileLink} ${location.pathname === link.to ? styles.mobileLinkActive : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <a href={SURVEY_URL} target="_blank" rel="noopener" className={styles.mobileCta}>
            Take the Survey
          </a>
        </div>
      )}
    </div>
  );
}
