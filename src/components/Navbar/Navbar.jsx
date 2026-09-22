import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const SURVEY_URL = 'https://forms.gle/Eu3ESnJPz4DRac1C8';

const LINKS = [
  { to: '/home', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const location = useLocation();

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
      </div>
    </div>
  );
}
