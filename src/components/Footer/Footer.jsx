import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient.js';
import styles from './Footer.module.css';

const SURVEY_URL = 'https://forms.gle/Eu3ESnJPz4DRac1C8';

const SOCIAL_ICONS = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/liwa_ph',
    path: 'M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.23 1 .5 1.5.95.45.45.72.9.95 1.5.17.4.36 1 .42 2.2.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2a4 4 0 01-.95 1.5 4 4 0 01-1.5.95c-.4.17-1 .36-2.2.42-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42a4 4 0 01-1.5-.95 4 4 0 01-.95-1.5c-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.23-.6.5-1.05.95-1.5A4 4 0 015.14 2.7c.4-.17 1-.36 2.2-.42C8.64 2.2 9 2.2 12 2.2zm0 3.4a6.4 6.4 0 100 12.8 6.4 6.4 0 000-12.8zm0 2.25a4.15 4.15 0 110 8.3 4.15 4.15 0 010-8.3zM18.9 5.3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/liwaph',
    path: 'M13.4 21.9v-8.2h2.8l.42-3.26h-3.22V8.36c0-.94.26-1.58 1.61-1.58h1.72V3.86c-.3-.04-1.32-.13-2.51-.13-2.48 0-4.18 1.51-4.18 4.29v2.39H7.23v3.26h2.81v8.24h3.36z',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/liwa-ph',
    path: 'M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9.5h4V21H3V9.5zM9.5 9.5h3.8v1.6h.05a4.2 4.2 0 013.78-2.1c4 0 4.72 2.5 4.72 5.8V21h-4v-5.5c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.5-2.25 3.1V21h-4V9.5z',
  },
  {
    label: 'Gmail',
    href: 'mailto:withliwa@gmail.com',
    path: 'M3.4 5h17.2c.77 0 1.4.63 1.4 1.4v11.2c0 .77-.63 1.4-1.4 1.4h-2.1V9.9L12 14.3 5.5 9.9v9.1H3.4c-.77 0-1.4-.63-1.4-1.4V6.4C2 5.63 2.63 5 3.4 5zm1.3 1.6L12 11.6l7.3-5H4.7z',
  },
];

const PAGE_LINKS = [
  { to: '/home', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact Us' },
];

const SITE_LINKS = [
  { to: '/home#features', label: 'Features' },
  { to: '/home#vision', label: 'The Big Idea' },
  { to: '/home#who', label: "Who It's For" },
];

export default function Footer() {
  const location = useLocation();
  const isContact = location.pathname.startsWith('/contact');

  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const submitEmail = async () => {
    const value = email.trim();
    if (!value) return;
    const { error } = await supabase.from('newsletter_signups').insert({ email: value });
    setSent(error ? 'error' : true);
  };

  return (
    <div className={`${styles.footer} ${isContact ? styles.footerStandalone : styles.footerWithBanner}`}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <img src="/images/liwa-logo-2.svg" alt="LIWA" className={styles.brandLogo} />
            <div className={styles.tagline}>
              Bringing liwanag to the way we move.<br />
              Researching. Listening. Building with care.
            </div>
            <div className={styles.socials}>
              {SOCIAL_ICONS.map((icon) => (
                <a
                  key={icon.label}
                  href={icon.href}
                  target={icon.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={icon.href.startsWith('mailto:') ? undefined : 'noopener'}
                  aria-label={icon.label}
                  title={icon.label}
                  className={styles.socialIcon}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.linkCol}>
            <div className={styles.colLabel}>Pages</div>
            {PAGE_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className={styles.footerLink}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.linkCol}>
            <div className={styles.colLabel}>On the site</div>
            {SITE_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className={styles.footerLink}>
                {link.label}
              </Link>
            ))}
            <a href={SURVEY_URL} target="_blank" rel="noopener" className={styles.footerLink}>
              Take the Survey
            </a>
          </div>

          <div className={styles.newsletterCol}>
            <div className={styles.colLabel}>Stay in the loop</div>
            <div className={styles.newsletterRow}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSent(false);
                }}
                className={styles.newsletterInput}
              />
              <span onClick={submitEmail} className={styles.newsletterSubmit}>
                &rarr;
              </span>
            </div>
            <div className={styles.newsletterNote}>
              {sent === true ? "Thanks — we'll be in touch." : sent === 'error' ? 'Something went wrong — please try again.' : ''}
            </div>
          </div>
        </div>

        <div className={styles.watermarkRow}>
          <div className={styles.bottomBar}>
            <span className={styles.bottomText}>© 2026 LIWA. Developed by Meleora</span>
            <span className={styles.bottomText}>Built on the principle of choice, not surveillance.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
