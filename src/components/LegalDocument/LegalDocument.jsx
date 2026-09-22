import styles from './LegalDocument.module.css';

function Block({ block }) {
  switch (block.type) {
    case 'h3':
      return <h3 className={styles.subheading}>{block.text}</h3>;
    case 'label':
      return <div className={styles.label}>{block.text}</div>;
    case 'emphasis':
      return <p className={styles.emphasis}>{block.text}</p>;
    case 'ul':
      return (
        <ul className={styles.list}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case 'contact':
      return (
        <div className={styles.contactBlock}>
          {block.name && <div className={styles.contactName}>{block.name}</div>}
          <a href={`mailto:${block.email}`} className={styles.contactEmail}>
            {block.email}
          </a>
        </div>
      );
    default:
      return <p className={styles.paragraph}>{block.text}</p>;
  }
}

export default function LegalDocument({ effectiveDate, lastUpdated, intro, sections }) {
  return (
    <div className={styles.section}>
      <div className={styles.doc}>
        <div className={styles.meta}>
          <span className={styles.metaPill}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
            </svg>
            Effective&nbsp;<strong>{effectiveDate}</strong>
          </span>
          <span className={styles.metaPill}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 10.59l4.24 4.24-1.41 1.41L11 13V7h2v5.59z" />
            </svg>
            Last updated&nbsp;<strong>{lastUpdated}</strong>
          </span>
        </div>

        {intro.map((text) => (
          <p key={text} className={styles.paragraph}>
            {text}
          </p>
        ))}

        {sections.map((section) => (
          <div key={section.heading} className={styles.sectionBlock}>
            <h2 className={styles.heading}>{section.heading}</h2>
            {section.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        ))}

        <div className={styles.signature}>
          <div className={styles.signatureName}>MELEORA</div>
          <div className={styles.signatureTagline}>Toward better things.</div>
        </div>
      </div>
    </div>
  );
}
