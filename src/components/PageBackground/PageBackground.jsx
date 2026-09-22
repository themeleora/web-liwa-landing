import styles from './PageBackground.module.css';

export default function PageBackground({ children, overlapNav = false }) {
  return (
    <div className={`${styles.wrap} ${overlapNav ? styles.overlapNav : ''}`}>
      <div className={styles.blobLayer}>
        <div className={`${styles.blob} ${styles.blobA}`} />
        <div className={`${styles.blob} ${styles.blobB}`} />
        <div className={`${styles.blob} ${styles.blobC}`} />
      </div>
      {children}
    </div>
  );
}
