import styles from './Eyebrow.module.css';

const PIN_PATH = 'M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.6A2.6 2.6 0 1112 6.4a2.6 2.6 0 010 5.2z';

export default function Eyebrow({ label, variant = 'standard' }) {
  return (
    <div className={`${styles.pill} ${styles[variant]}`}>
      <span className={styles.iconCircle}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d={PIN_PATH} />
        </svg>
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
