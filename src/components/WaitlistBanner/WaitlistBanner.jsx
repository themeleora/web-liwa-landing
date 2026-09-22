import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient.js';
import { useAsyncStatus } from '../../hooks/useAsyncStatus.js';
import Spinner from '../Spinner/Spinner.jsx';
import SuccessNote from '../SuccessNote/SuccessNote.jsx';
import styles from './WaitlistBanner.module.css';

const SURVEY_URL = 'https://forms.gle/Eu3ESnJPz4DRac1C8';

export default function WaitlistBanner() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const { isLoading, run } = useAsyncStatus();

  const joinWaitlist = () => {
    const value = email.trim().toLowerCase();
    if (!value.includes('@')) return setSent('invalid');
    run(async () => {
      const { error } = await supabase.from('waitlist_signups').insert({ email: value });
      // Postgres unique_violation — this email is already on the waitlist.
      setSent(error ? (error.code === '23505' ? 'duplicate' : 'error') : true);
    });
  };

  const note =
    sent === 'invalid'
      ? 'Please enter a valid email address.'
      : sent === 'duplicate'
      ? "You're already on the waitlist — we'll be in touch."
      : sent === 'error'
      ? 'Something went wrong — please try again.'
      : '';

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <div className={styles.gridOverlay} />
        <div className={styles.content}>
          <div className={styles.left}>
            <img src="/images/heading-accent.svg" alt="" className={`${styles.accentIcon} anim-twinkle`} />
            <h2 className={styles.heading}>Move with liwanag.</h2>
            <p className={styles.subtext}>Safer context. Better information. More control.</p>
            <a href={SURVEY_URL} target="_blank" rel="noopener" className={styles.surveyButton}>
              Take the Survey
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l1.6 4.7L18.3 8.3 13.6 9.9 12 14.6 10.4 9.9 5.7 8.3 10.4 6.7 12 2zm6.2 11.2l.9 2.5 2.5.9-2.5.9-.9 2.5-.9-2.5-2.5-.9 2.5-.9.9-2.5zM6 14.4l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z" />
              </svg>
            </a>
          </div>
          <div id="waitlist" className={styles.right}>
            <h3 className={styles.subheading}>Come along with us.</h3>
            <p className={styles.subtext}>
              Join the waitlist and be among the first to hear when we're ready to bring more clarity to everyday travel.
            </p>
            <div className={styles.form}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSent(false);
                }}
                className={styles.input}
              />
              <button
                type="button"
                onClick={joinWaitlist}
                className={styles.joinButton}
                disabled={isLoading}
                aria-busy={isLoading}
              >
                {isLoading ? (
                  <>
                    <Spinner size={16} />
                    Joining…
                  </>
                ) : (
                  'Join Waitlist'
                )}
              </button>
            </div>
            {sent === true ? (
              <SuccessNote message="You're on the list — we'll be in touch." variant="onGradient" />
            ) : (
              <div className={styles.note}>{note}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
