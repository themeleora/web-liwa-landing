import { useState } from 'react';
import Eyebrow from '../../../components/Eyebrow/Eyebrow.jsx';
import styles from './FaqAccordion.module.css';

const FAQS = [
  ['What is LIWA?', 'LIWA is a privacy-first commuter safety platform being developed by MELEORA. It explores how navigation can provide more context about a journey, helping people make more informed travel decisions.'],
  ['How is LIWA different from regular navigation apps?', 'Most navigation apps show you where to go, how long it will take, and which route to follow. LIWA redesigns that experience with safety and privacy in mind, adding context such as community reports, lighting, activity, time of day, and other conditions people have encountered along a route. LIWA also includes reporting & emergency-oriented features and is designed to limit unnecessary exposure of who you are or where you go, including risks associated with technology-facilitated gender-based violence (TFGBV). LIWA makes safety context part of the journey itself, while giving people more agency over what they share, and greater privacy in the process.'],
  ['Does LIWA tell me which route is safe?', 'No. LIWA is designed to provide context, not make the decision for you. Safety can change depending on the time, place, circumstances, and information available. Our goal is to help you see more of these factors so you can make a decision that feels right for you.'],
  ['Who is LIWA for?', 'We are still learning who LIWA can serve best. We are currently exploring the experiences of people who want more context when making travel decisions, particularly when traveling alone, at night, through unfamiliar places, or when choosing between different routes or modes of transportation.\n\nYour experiences help us understand where LIWA can be most useful.'],
  ['Where does LIWA get its information?', 'LIWA explores bringing together different sources of relevant travel and safety context, including community knowledge. It is also designed to acknowledge what it does not know. Rather than presenting information as absolute, LIWA aims to make relevant context and uncertainty clearer to the person making the decision.'],
  ['Will LIWA track my location?', 'Privacy is a core part of how we are designing LIWA. The goal is not to require constant visibility or continuous location sharing. Any location-based support we explore is intended to remain within the user’s control, so you can understand what you share and when you share it.'],
  ['Can I report safety concerns through LIWA?', 'We are currently exploring how community reporting can be part of LIWA while protecting privacy and maintaining the quality of shared information. We are also studying how reports can be handled responsibly, including questions around anonymity, moderation, and information sharing.'],
  ['What happens if I need help during a journey?', 'LIWA is exploring ways to provide support while keeping the user in control. This may include options for contacting a trusted person or choosing what information to share when support is needed. The intention is to give you options without automatically sharing your information or escalating a situation without your direction.'],
  ['Is LIWA available now?', 'LIWA is currently in its early development stage. We are iterating on the concept, testing ideas, and learning from feedback to refine the product before building its first working version. We want to take the time to build something that responds to real needs.'],
  ['Why is LIWA conducting a survey?', 'The survey helps us understand how people actually experience travel, what affects their sense of safety and uncertainty, what they currently do when concerns arise, and what they expect from privacy-conscious services.\n\nYour experience gives us a better foundation for deciding what LIWA should become.'],
  ['How can I help?', 'You can help by sharing your experiences through our survey, giving us feedback, or reaching out with questions, ideas, or partnership opportunities.\n\nLIWA is still taking shape, and every thoughtful response helps us understand how it can better support the way people move.'],
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div id="faq" className={styles.section}>
      <div className={styles.inner}>
        <Eyebrow label="Learn more" />
        <h2 className={styles.heading}>Frequently Asked Questions</h2>
        <div className={styles.grid}>
          {FAQS.map(([question, answer], i) => {
            const open = openIndex === i;
            return (
              <div
                key={question}
                className={styles.card}
                style={{
                  boxShadow: open
                    ? 'inset 0 0 0 1px rgba(108,99,255,.22), 0 24px 48px rgba(108,99,255,.14), 0 4px 12px rgba(30,27,57,.06)'
                    : 'inset 0 0 0 1px rgba(108,99,255,.12)',
                  transform: open ? 'translateY(-2px)' : 'translateY(0)',
                }}
              >
                <div
                  onClick={() => setOpenIndex(open ? null : i)}
                  className={styles.cardHeader}
                >
                  <div className={styles.question}>{question}</div>
                  <div className={styles.iconCircle}>
                    <span
                      className={styles.iconGlyph}
                      style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    >
                      +
                    </span>
                  </div>
                </div>
                <div
                  className={styles.body}
                  style={{
                    maxHeight: open ? '620px' : '0px',
                    opacity: open ? 1 : 0,
                  }}
                >
                  <div className={styles.answer}>{answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
