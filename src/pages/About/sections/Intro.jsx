import { Link } from 'react-router-dom';
import Eyebrow from '../../../components/Eyebrow/Eyebrow.jsx';
import styles from './Intro.module.css';

export default function Intro() {
  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Eyebrow label="Meleora" />
          <h2 className={styles.heading}>Toward better things.</h2>
          <p className={styles.body}>
            A venture built on the belief that better is always possible — LIWA is one of the things we are building
            toward it.
          </p>
          <Link to="/contact" className={styles.cta}>
            Partner with LIWA &rarr;
          </Link>
        </div>
        <div className={styles.right}>
          <p className={styles.paragraph}>
            MELEORA is a venture built on the belief that better is always possible. We explore ideas and build
            technology, tools, and experiences that expand what people can do and where they can go.
          </p>
          <p className={styles.paragraph}>
            We're curious about how people move through the world and the systems they move through, paying
            attention to what works, what doesn't, and what could be different.
          </p>
          <p className={styles.paragraph}>
            We build for people who move through the world on their own terms, creating possibilities that can make
            everyday life work a little better.
          </p>
        </div>
      </div>
    </div>
  );
}
