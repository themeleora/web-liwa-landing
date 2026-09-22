import styles from './Survey.module.css';

const SURVEY_URL = 'https://forms.gle/Eu3ESnJPz4DRac1C8';

export default function Survey() {
  return (
    <div id="survey" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.pill}>
          <span className={styles.pillIcon}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.5l2.7 6.1 6.6.6-5 4.4 1.5 6.5L12 16.7 6.2 20.1l1.5-6.5-5-4.4 6.6-.6L12 2.5z" />
            </svg>
          </span>
          <span className={styles.pillLabel}>We're listening</span>
        </div>
        <h1 className={styles.heading}>
          Before we build, we're listening.
          <img src="/images/heading-accent.svg" alt="" className={`${styles.accentIcon} anim-twinkle-sm`} />
        </h1>
        <p className={styles.subtext}>
          LIWA is still being shaped. We're talking to women and gender-diverse commuters about how they actually
          experience safety, uncertainty, privacy, and everyday travel.
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeading}>Your experience can shape LIWA.</div>
        <a href={SURVEY_URL} target="_blank" rel="noopener" className={styles.cardCta}>
          <span>Take the Survey</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l1.6 4.7L18.3 8.3 13.6 9.9 12 14.6 10.4 9.9 5.7 8.3 10.4 6.7 12 2zm6.2 11.2l.9 2.5 2.5.9-2.5.9-.9 2.5-.9-2.5-2.5-.9 2.5-.9.9-2.5zM6 14.4l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z" />
          </svg>
        </a>
        <p className={styles.cardBody}>
          Tell us what you experience. Tell us what you already do. Tell us what you wish existed.
        </p>
      </div>
    </div>
  );
}
