import Eyebrow from '../../../components/Eyebrow/Eyebrow.jsx';
import styles from './Features.module.css';

const LEFT_ITEMS = [
  {
    title: 'Navigation',
    body: 'Understand your options.',
    path: 'M21.3 2.7a1 1 0 00-1.2-1.2L3.6 6.9a1 1 0 00-.1 1.9l6.9 2.8 2.8 6.9a1 1 0 001.9-.1L21.3 2.7z',
  },
  {
    title: 'Safety Context',
    body: 'See information that may matter to your journey.',
    path: 'M11.6 2.3a1 1 0 01.8 0l7 3a1 1 0 01.6.9v5.4c0 4.9-3.5 9.4-7.4 10.6a1 1 0 01-.6 0C8.1 21 4.6 16.5 4.6 11.6V6.2a1 1 0 01.6-.9l6.4-3zm4.7 7.1a1.3 1.3 0 00-1.9-1.7l-3.6 3.7-1.3-1.3a1.3 1.3 0 00-1.8 1.8l2.2 2.2a1.3 1.3 0 001.8 0l4.6-4.7z',
  },
  {
    title: 'Community Knowledge',
    body: 'Learn from people who know the places they move through.',
    path: 'M9 11.5a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zm7.5.5a3 3 0 100-6 3 3 0 000 6zM9 13.5c-3.6 0-7 1.9-7 4.3V20h14v-2.2c0-2.4-3.4-4.3-7-4.3zm7.5.5c-.8 0-1.6.1-2.3.3 1.4 1 2.3 2.3 2.3 4V20H22v-1.9c0-2-2.6-3.6-5.5-3.6z',
  },
];

const RIGHT_ITEMS = [
  {
    title: 'Privacy & Control',
    body: 'Stay in control of your information and what you share.',
    path: 'M12 1.8A4.7 4.7 0 007.3 6.5V9H6.4A2.4 2.4 0 004 11.4v8.2A2.4 2.4 0 006.4 22h11.2a2.4 2.4 0 002.4-2.4v-8.2A2.4 2.4 0 0017.6 9h-.9V6.5A4.7 4.7 0 0012 1.8zm0 2.4a2.3 2.3 0 012.3 2.3V9H9.7V6.5A2.3 2.3 0 0112 4.2zm0 9.3a2 2 0 011 3.7v1.6a1 1 0 01-2 0v-1.6a2 2 0 011-3.7z',
  },
  {
    title: 'Emergency Support',
    body: 'Access help when you choose to ask for it.',
    path: 'M12 1.9a3.1 3.1 0 00-3.1 3.1v.5h6.2V5A3.1 3.1 0 0012 1.9zM5.6 8.1A2.2 2.2 0 017.8 6h8.4a2.2 2.2 0 012.2 2.1l.7 11.5A2.4 2.4 0 0116.7 22H7.3a2.4 2.4 0 01-2.4-2.4l.7-11.5zM12 9.3a1.2 1.2 0 00-1.2 1.2v2.6a1.2 1.2 0 002.4 0v-2.6A1.2 1.2 0 0012 9.3zm0 7.1a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z',
  },
  {
    title: 'Responsible Technology',
    body: 'Use technology to support judgment—not replace it.',
    path: 'M12 2l1.9 5.4L19.3 9l-5.4 1.9L12 16.3l-1.9-5.4L4.7 9l5.4-1.6L12 2zm6.6 12.1l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6zM5.4 15.6l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z',
  },
];

function FeatureItem({ item, align }) {
  return (
    <div className={`${styles.item} ${align === 'right' ? styles.itemRight : styles.itemLeft}`}>
      <span className={styles.icon}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d={item.path} />
        </svg>
      </span>
      <div className={styles.itemText}>
        <div className={styles.itemTitle}>{item.title}</div>
        <div className={styles.itemBody}>{item.body}</div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <div id="features" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <Eyebrow label="Meet LIWA" />
          <h2 className={styles.heading}>Navigation, with more light.</h2>
          <p className={styles.intro}>
            We're exploring how technology can help people make more informed travel decisions through:
          </p>
        </div>
        <div className={styles.grid}>
          <div className={styles.col}>
            {LEFT_ITEMS.map((item) => (
              <FeatureItem key={item.title} item={item} align="right" />
            ))}
          </div>
          <div className={styles.centerCol}>
            <div className={styles.centerBlob} />
            <img
              src="/images/screen-active-navigation.png"
              alt="LIWA active navigation with live route, safety context and check-in toggles"
              className={styles.centerImg}
            />
          </div>
          <div className={styles.col}>
            {RIGHT_ITEMS.map((item) => (
              <FeatureItem key={item.title} item={item} align="left" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
