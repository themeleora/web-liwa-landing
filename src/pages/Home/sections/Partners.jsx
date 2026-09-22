import { Link } from 'react-router-dom';
import Eyebrow from '../../../components/Eyebrow/Eyebrow.jsx';
import styles from './Partners.module.css';

const TIMELINE = [
  { title: 'Schools & Universities', body: 'Campus routes, student commutes, research collaboration.' },
  { title: 'Local Communities & LGUs', body: 'Barangay-level knowledge that no map layer holds.' },
  { title: 'Mobility Organizations', body: 'Transit operators and route planners on the ground.' },
  { title: "Women's & Safety Organizations", body: 'Advocates who already do this work every day.' },
  { title: 'Researchers & Technology Partners', body: 'People testing what safer navigation can mean.' },
];

export default function Partners() {
  return (
    <div id="partners" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.imageCol}>
          <div className={styles.glowRing} />
          <img src="/images/screen-splash-small.png" alt="LIWA app splash screen" className={styles.splashImg} />
        </div>
        <div className={styles.contentCol}>
          <Eyebrow label="Partners" />
          <h2 className={styles.heading}>Light travels further together.</h2>
          <p className={styles.intro}>LIWA is looking to learn and build with:</p>
          <div className={styles.timeline}>
            <div className={styles.timelineLine} />
            {TIMELINE.map((entry) => (
              <div key={entry.title} className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineTitle}>{entry.title}</div>
                <div className={styles.timelineBody}>{entry.body}</div>
              </div>
            ))}
          </div>
          <Link to="/contact" className={styles.cta}>
            Partner With LIWA &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
