import styles from './SuccessNote.module.css';

export default function SuccessNote({ message, variant = 'standard' }) {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <span className={styles.iconCircle}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className={styles.message}>{message}</span>
    </div>
  );
}
