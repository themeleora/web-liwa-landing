import { useState } from 'react';
import { supabase } from '../../../lib/supabaseClient.js';
import styles from './PartnerForm.module.css';

const ORG_TYPES = [
  'School / University',
  'Local Community / LGU',
  'Mobility Organization',
  "Women's & Safety Organization",
  'Researcher / Tech Partner',
  'Other',
];

const INTEREST_OPTIONS = [
  'Community knowledge-sharing',
  'Transit & route planning',
  'Safety advocacy',
  'Research collaboration',
  'Campus & student commutes',
  'Technology & data partnership',
];

const STEP_LABELS = ['About you', 'Your organization', 'Partnership interest'];

const EMPTY_FORM = {
  fName: '', fEmail: '', fLoc: '',
  fOrg: '', fType: '', fRole: '', fLink: '',
  fMsg: '', fHeard: '', picked: [],
};

export default function PartnerForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(EMPTY_FORM);
  const [cSent, setCSent] = useState(false);

  const field = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setCSent(false);
  };

  const toggleInterest = (label) => {
    setForm((f) => ({
      ...f,
      picked: f.picked.includes(label) ? f.picked.filter((x) => x !== label) : [...f.picked, label],
    }));
    setCSent(false);
  };

  const goBack = () => {
    if (step > 1) {
      setStep((s) => s - 1);
      setCSent(false);
    }
  };

  const goNext = async () => {
    if (step === 1) {
      if (!form.fName.trim() || !form.fEmail.trim()) return setCSent('need1');
      setStep(2);
      setCSent(false);
      return;
    }
    if (step === 2) {
      if (!form.fOrg.trim()) return setCSent('need2');
      setStep(3);
      setCSent(false);
      return;
    }
    const { error } = await supabase.from('partner_inquiries').insert({
      full_name: form.fName.trim(),
      email: form.fEmail.trim(),
      location: form.fLoc.trim() || null,
      organization_name: form.fOrg.trim(),
      organization_type: form.fType || null,
      role: form.fRole.trim() || null,
      website_link: form.fLink.trim() || null,
      interests: form.picked,
      message: form.fMsg.trim() || null,
      heard_about: form.fHeard.trim() || null,
    });
    setCSent(error ? 'error' : true);
  };

  const cNote =
    cSent === 'need1'
      ? 'Please add your name and email to continue.'
      : cSent === 'need2'
      ? 'Please add your organization name to continue.'
      : cSent === 'error'
      ? 'Something went wrong — please try again.'
      : cSent === true
      ? "Thanks — your inquiry is with us. We'll reply soon."
      : '';

  return (
    <div className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.infoCol}>
          <h2 className={styles.heading}>Partner with us</h2>
          <p className={styles.intro}>
            Schools, LGUs, mobility groups, advocates and researchers — tell us how you already serve commuters and
            where LIWA could help. We read every inquiry and reply to the ones that need a conversation.
          </p>
          <div className={styles.contactRows}>
            <div className={styles.contactRow}>
              <span className={styles.contactIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 5.5A1.5 1.5 0 013.5 4h17A1.5 1.5 0 0122 5.5v13a1.5 1.5 0 01-1.5 1.5h-17A1.5 1.5 0 012 18.5v-13zm2.6.5L12 12l7.4-6H4.6z" />
                </svg>
              </span>
              <a href="mailto:withliwa@gmail.com" className={styles.emailLink}>
                withliwa@gmail.com
              </a>
            </div>
            <div className={styles.contactRow}>
              <span className={styles.contactIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.6A2.6 2.6 0 1112 6.4a2.6 2.6 0 010 5.2z" />
                </svg>
              </span>
              Metro Manila, Philippines
            </div>
          </div>
        </div>

        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <div className={styles.stepLabel}>{STEP_LABELS[step - 1]}</div>
            <div className={styles.stepCount}>Step {step} of 3</div>
          </div>

          <div className={styles.progressRow}>
            {[1, 2, 3].map((n) => (
              <div key={n} className={`${styles.progressBar} ${n <= step ? styles.progressBarFilled : ''}`} />
            ))}
          </div>

          {step === 1 && (
            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label className={styles.label}>
                  Full name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Juana Dela Cruz"
                  value={form.fName}
                  onChange={field('fName')}
                  className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>
                  Email address <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  placeholder="you@organization.org"
                  value={form.fEmail}
                  onChange={field('fEmail')}
                  className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>
                  Location <span className={styles.optional}>(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="City / province — where you operate"
                  value={form.fLoc}
                  onChange={field('fLoc')}
                  className={styles.input}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label className={styles.label}>
                  Organization / institution name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Where you work or study"
                  value={form.fOrg}
                  onChange={field('fOrg')}
                  className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>
                  Organization type <span className={styles.optional}>(optional)</span>
                </label>
                <select value={form.fType} onChange={field('fType')} className={styles.select}>
                  <option value="">Select one</option>
                  {ORG_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>
                  Role / position <span className={styles.optional}>(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Program Lead, Faculty, Barangay Officer"
                  value={form.fRole}
                  onChange={field('fRole')}
                  className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>
                  Website / social link <span className={styles.optional}>(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="https://"
                  value={form.fLink}
                  onChange={field('fLink')}
                  className={styles.input}
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className={styles.fieldGroup}>
              <div className={styles.chipField}>
                <label className={styles.label}>
                  How would you like to partner with LIWA? <span className={styles.optional}>(optional)</span>
                </label>
                <div className={styles.chipRow}>
                  {INTEREST_OPTIONS.map((option) => {
                    const on = form.picked.includes(option);
                    return (
                      <div
                        key={option}
                        onClick={() => toggleInterest(option)}
                        className={`${styles.chip} ${on ? styles.chipOn : ''}`}
                      >
                        <span className={`${styles.chipBox} ${on ? styles.chipBoxOn : ''}`}>&#10003;</span>
                        {option}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>
                  Tell us more about your interest <span className={styles.optional}>(optional)</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="What are you hoping to build, share, or learn with us?"
                  value={form.fMsg}
                  onChange={field('fMsg')}
                  className={styles.textarea}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>
                  How did you hear about LIWA? <span className={styles.optional}>(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="A colleague, an article, an event…"
                  value={form.fHeard}
                  onChange={field('fHeard')}
                  className={styles.input}
                />
              </div>
            </div>
          )}

          <div className={`${styles.navRow} ${step > 1 ? styles.navRowSpread : styles.navRowEnd}`}>
            {step > 1 && (
              <div onClick={goBack} className={styles.backButton}>
                Back
              </div>
            )}
            <div onClick={goNext} className={styles.nextButton}>
              {step < 3 ? 'Continue' : 'Send message'}
            </div>
          </div>
          <div className={styles.note}>{cNote}</div>
        </div>
      </div>
    </div>
  );
}
