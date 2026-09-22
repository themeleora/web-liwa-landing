import PageBackground from '../../components/PageBackground/PageBackground.jsx';
import SimpleHero from '../../components/SimpleHero/SimpleHero.jsx';
import LegalDocument from '../../components/LegalDocument/LegalDocument.jsx';
import { EFFECTIVE_DATE, LAST_UPDATED, INTRO, SECTIONS } from './privacyContent.js';

export default function Privacy() {
  return (
    <PageBackground>
      <SimpleHero
        eyebrow="Legal"
        heading="Privacy Policy"
        subtext="How MELEORA collects, uses, and protects information in connection with the LIWA website and validation survey."
      />
      <LegalDocument effectiveDate={EFFECTIVE_DATE} lastUpdated={LAST_UPDATED} intro={INTRO} sections={SECTIONS} />
    </PageBackground>
  );
}
