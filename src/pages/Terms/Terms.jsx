import PageBackground from '../../components/PageBackground/PageBackground.jsx';
import SimpleHero from '../../components/SimpleHero/SimpleHero.jsx';
import LegalDocument from '../../components/LegalDocument/LegalDocument.jsx';
import { EFFECTIVE_DATE, LAST_UPDATED, INTRO, SECTIONS } from './termsContent.js';

export default function Terms() {
  return (
    <PageBackground>
      <SimpleHero
        eyebrow="Legal"
        heading="Terms of Service"
        subtext="The terms that govern your access to and use of the LIWA website and its forms."
      />
      <LegalDocument effectiveDate={EFFECTIVE_DATE} lastUpdated={LAST_UPDATED} intro={INTRO} sections={SECTIONS} />
    </PageBackground>
  );
}
