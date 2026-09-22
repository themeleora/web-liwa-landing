import { Link } from 'react-router-dom';
import PageBackground from '../../components/PageBackground/PageBackground.jsx';
import Eyebrow from '../../components/Eyebrow/Eyebrow.jsx';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <PageBackground>
      <div className={styles.hero}>
        <div className={styles.glow} />
        <div className={styles.inner}>
          <Eyebrow label="404" />
          <img src="/images/logo-icon-dark.svg" alt="" className={`${styles.icon} anim-swing`} />
          <h1 className={styles.heading}>This page doesn't exist.</h1>
          <p className={styles.subtext}>
            The page you're looking for may have moved, or the link might be off. Let's get you back on track.
          </p>
          <Link to="/home" className={styles.cta}>
            Back to Home
          </Link>
        </div>
      </div>
    </PageBackground>
  );
}
