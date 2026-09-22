import Eyebrow from '../../../components/Eyebrow/Eyebrow.jsx';
import styles from './Vision.module.css';

const BADGES = [
  {
    id: 'context',
    label: 'More context',
    className: 'badgeContext',
    path: 'M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.6A2.6 2.6 0 1112 6.4a2.6 2.6 0 010 5.2z',
  },
  {
    id: 'possibilities',
    label: 'More possibilities',
    className: 'badgePossibilities',
    path: 'M12 2l2.4 6.1L21 10l-6.6 1.9L12 18l-2.4-6.1L3 10l6.6-1.9L12 2z',
  },
  {
    id: 'control',
    label: 'More control',
    className: 'badgeControl',
    path: 'M12 2l8 3.6v5.7c0 4.9-3.4 9.3-8 10.7-4.6-1.4-8-5.8-8-10.7V5.6L12 2zm-1.2 13.4l5.3-5.3-1.7-1.7-3.6 3.6-1.6-1.6-1.7 1.7 3.3 3.3z',
  },
];

export default function Vision() {
  return (
    <div id="vision" className={styles.section}>
      <div className={styles.card}>
        <div className={styles.imgWrap}>
          <img src="/images/screen-arrival.png" alt="LIWA arrival screen on a phone" className={styles.phoneImg} />
          {BADGES.map((badge) => (
            <div key={badge.id} className={`${styles.badge} ${styles[badge.className]}`}>
              <span className={styles.badgeIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d={badge.path} />
                </svg>
              </span>
              <span className={styles.badgeLabel}>{badge.label}</span>
            </div>
          ))}
        </div>
        <div className={styles.content}>
          <Eyebrow label="The big idea" variant="onDarkVision" />
          <h2 className={styles.heading}>We don't want to decide for you.</h2>
          <p className={styles.highlightLine}>
            We want you to <span className={styles.highlight}>see more</span>.
          </p>
          <p className={styles.body}>Because better information gives people more room to choose.</p>
        </div>
      </div>
    </div>
  );
}
