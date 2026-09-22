import Eyebrow from '../../../components/Eyebrow/Eyebrow.jsx';
import styles from './ComingSoonHero.module.css';

export default function ComingSoonHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.inner}>
        <Eyebrow label="Blog" />
        <img src="/images/logo-icon-dark.svg" alt="LIWA" className={`${styles.icon} anim-swing`} />
        <h1 className={styles.heading}>Coming soon.</h1>
        <p className={styles.subtext}>
          We are writing about what we learn while building LIWA — research notes, privacy decisions, and what
          commuters tell us. The first posts land soon.
        </p>
      </div>
    </div>
  );
}
