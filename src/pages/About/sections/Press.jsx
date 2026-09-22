import { useState } from 'react';
import Eyebrow from '../../../components/Eyebrow/Eyebrow.jsx';
import styles from './Press.module.css';

const ARROW_PATH = 'M7.5 5h11.5v11.5h-2.6V9.5l-9.6 9.6-1.9-1.9 9.6-9.6H7.5V5z';

const ARTICLES = [
  {
    href: 'https://www.rappler.com/bulletin-board/events/filipino-tech-innovators-safety-by-design-digital-solutions/',
    img: '/images/press-1-photo.png',
    source: 'Rappler',
    readTime: '4 min read',
    headline: 'Filipino tech innovators pitch digital solutions for safety by design.',
    description: 'Eleven finalist teams showed how prevention-first design can reshape digital safety.',
    tags: ['Safety by Design', 'Events'],
    date: 'Jan 29, 2026',
  },
  {
    href: 'https://www.rappler.com/moveph/emerging-apps-women-children-safety/',
    img: '/images/press-2-rappler.jpg',
    source: 'Rappler',
    readTime: '5 min read',
    headline: 'Emerging apps for women and children’s safety.',
    description: 'A look at the tools being built for safer everyday movement and reporting.',
    tags: ['MovePH', 'Mobility'],
    date: 'Feb 2026',
  },
  {
    href: 'https://jocellebatapasigue.com/2026/02/01/safety-by-design-how-filipino-tech-leaders-are-rebuilding-digital-safety-for-women/',
    img: '/images/press-3-photo.jpg',
    source: 'Jocelle Batapa Sigue',
    readTime: '17 min read',
    headline: 'Safety by Design: How Filipino tech leaders are rebuilding digital safety for women.',
    description: 'LIWA placed second for privacy-first navigation built around commuters’ real routes.',
    tags: ['Feature', 'Privacy'],
    date: 'Feb 1, 2026',
  },
];

export default function Press() {
  const [arrowHover, setArrowHover] = useState(false);

  return (
    <div id="press" className={styles.section}>
      <div className={styles.card}>
        <div className={styles.header}>
          <Eyebrow label="With LIWA, it started with a question" />
          <h3 className={styles.question}>
            Can technology help us move more safely — without making us more exposed?
          </h3>
          <p className={styles.intro}>
            We're exploring how technology can help women and gender-diverse commuters make more informed decisions
            about how they move, while keeping people in control of their information.
          </p>
        </div>

        <div className={styles.grid}>
          {ARTICLES.map((article) => (
            <a key={article.href} href={article.href} target="_blank" rel="noopener" className={styles.articleCard}>
              <div className={styles.imgWrap}>
                <img src={article.img} alt="Article photo" className={styles.img} />
              </div>
              <div className={styles.meta}>
                <span>{article.source}</span>
                <span>&bull;</span>
                <span>{article.readTime}</span>
              </div>
              <div className={styles.headline}>{article.headline}</div>
              <div className={styles.description}>{article.description}</div>
              <div className={styles.footerRow}>
                {article.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
                <span className={styles.date}>{article.date}</span>
                <span className={styles.arrowCircle}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="#fff">
                    <path d={ARROW_PATH} />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.readMoreWrap}>
          <a
            href={ARTICLES[0].href}
            target="_blank"
            rel="noopener"
            className={styles.readMoreLink}
            onMouseEnter={() => setArrowHover(true)}
            onMouseLeave={() => setArrowHover(false)}
          >
            Read the stories behind LIWA
            <span
              className={styles.readMoreArrow}
              style={{ transform: arrowHover ? 'translateX(6px)' : 'translateX(0)' }}
            >
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
