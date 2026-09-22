import Eyebrow from '../Eyebrow/Eyebrow.jsx';
import styles from './SimpleHero.module.css';

export default function SimpleHero({ eyebrow, heading, subtext, showIcon = false }) {
  return (
    <div className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.inner}>
        <Eyebrow label={eyebrow} />
        {showIcon && (
          <img src="/images/logo-icon-dark.svg" alt="LIWA" className={`${styles.icon} anim-swing`} />
        )}
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.subtext}>{subtext}</p>
      </div>
    </div>
  );
}
