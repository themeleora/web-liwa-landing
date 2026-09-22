import styles from './PageLoader.module.css';

export default function PageLoader({ closing }) {
  return (
    <div className={`${styles.overlay} ${closing ? styles.closing : ''}`} aria-hidden="true">
      <div className={styles.content}>
        <img src="/images/heading-accent.svg" alt="" className={`${styles.icon} anim-twinkle`} />
        <img src="/images/liwa-logo-2.svg" alt="LIWA" className={styles.wordmark} />
        <div className={styles.dots}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      </div>
    </div>
  );
}
