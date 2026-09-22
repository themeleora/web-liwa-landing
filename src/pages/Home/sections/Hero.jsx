import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const FLOAT_CARDS = [
  {
    id: 'safety',
    position: 'left',
    anim: 'anim-bob-a',
    title: 'Safety-by-Design',
    body: 'Recognized at the National Grand Challenge Showcase.',
    path: 'M11.6 2.3a1 1 0 01.8 0l7 3a1 1 0 01.6.9v5.4c0 4.9-3.5 9.4-7.4 10.6a1 1 0 01-.6 0C8.1 21 4.6 16.5 4.6 11.6V6.2a1 1 0 01.6-.9l6.4-3zm4.7 7.1a1.3 1.3 0 00-1.9-1.7l-3.6 3.7-1.3-1.3a1.3 1.3 0 00-1.8 1.8l2.2 2.2a1.3 1.3 0 001.8 0l4.6-4.7z',
  },
  {
    id: 'local',
    position: 'botRight',
    anim: 'anim-bob-c',
    title: 'Local Insights',
    body: 'Route context powered by everyday commuters.',
    path: 'M9 11.5a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zm7.5.5a3 3 0 100-6 3 3 0 000 6zM9 13.5c-3.6 0-7 1.9-7 4.3V20h14v-2.2c0-2.4-3.4-4.3-7-4.3zm7.5.5c-.8 0-1.6.1-2.3.3 1.4 1 2.3 2.3 2.3 4V20H22v-1.9c0-2-2.6-3.6-5.5-3.6z',
  },
  {
    id: 'privacy',
    position: 'topRight',
    anim: 'anim-bob-b',
    title: 'Privacy First',
    body: 'Anonymous reporting and user-controlled sharing.',
    path: 'M12 1.8A4.7 4.7 0 007.3 6.5V9H6.4A2.4 2.4 0 004 11.4v8.2A2.4 2.4 0 006.4 22h11.2a2.4 2.4 0 002.4-2.4v-8.2A2.4 2.4 0 0017.6 9h-.9V6.5A4.7 4.7 0 0012 1.8zm0 2.4a2.3 2.3 0 012.3 2.3V9H9.7V6.5A2.3 2.3 0 0112 4.2zm0 9.3a2 2 0 011 3.7v1.6a1 1 0 01-2 0v-1.6a2 2 0 011-3.7z',
  },
];

export default function Hero() {
  return (
    <div id="top" className={styles.hero}>
      <div className={`${styles.glow} ${styles.glowCenter}`} />
      <div className={`${styles.glow} ${styles.glowRight}`} />
      <div className={`${styles.glow} ${styles.glowLeft}`} />

      <div className={styles.inner}>
        <p className={styles.pretitle}>A little more light. A little more choice.</p>
        <h1 className={styles.headline}>
          Bringing <span className={styles.accentWord}>liwanag</span>
          <br />
          to the way we move.
        </h1>
        <p className={styles.subtext}>
          LIWA is a privacy-first navigation experience being built for women and gender-diverse commuters.
        </p>

        <div className={styles.ctaRow}>
          <Link to="/home#survey" className={styles.ctaPrimary}>
            Help Shape LIWA
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l1.6 4.7L18.3 8.3 13.6 9.9 12 14.6 10.4 9.9 5.7 8.3 10.4 6.7 12 2zm6.2 11.2l.9 2.5 2.5.9-2.5.9-.9 2.5-.9-2.5-2.5-.9 2.5-.9.9-2.5zM6 14.4l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z" />
            </svg>
          </Link>
          <Link to="/home#features" className={styles.ctaSecondary}>
            See How LIWA Works
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.6A2.6 2.6 0 1112 6.4a2.6 2.6 0 010 5.2z" />
            </svg>
          </Link>
        </div>

        <div className={styles.mosaicWrap}>
          <div className={styles.mosaicRow}>
            <div className={styles.phoneSide}>
              <div className={styles.phoneFrameSide}>
                <img src="/images/screen-map-safety-context.png" alt="LIWA map with safety context" className={styles.phoneImgSide} />
              </div>
            </div>
            <div className={styles.phoneCenter}>
              <div className={styles.phoneFrameCenter}>
                <img src="/images/screen-splash.png" alt="LIWA splash screen" className={styles.phoneImgCenter} />
              </div>
            </div>
            <div className={styles.phoneSide}>
              <div className={styles.phoneFrameSide}>
                <img src="/images/screen-onboarding.png" alt="LIWA onboarding screen" className={styles.phoneImgSide} />
              </div>
            </div>
          </div>

          <div className={styles.floatLayer}>
            {FLOAT_CARDS.map((card) => (
              <div key={card.id} className={`${styles.floatCard} ${styles[card.position]}`}>
                <div className={`${styles.floatCardInner} ${card.anim}`}>
                  <span className={styles.floatIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d={card.path} />
                    </svg>
                  </span>
                  <div>
                    <div className={styles.floatTitle}>{card.title}</div>
                    <div className={styles.floatBody}>{card.body}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
