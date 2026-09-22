import Eyebrow from '../Eyebrow/Eyebrow.jsx';
import styles from './GradientHero.module.css';

export default function GradientHero({ eyebrow, heading, subtext }) {
  return (
    <div className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.inner}>
        <Eyebrow label={eyebrow} variant="onGradientHero" />
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.subtext}>{subtext}</p>
      </div>
    </div>
  );
}
