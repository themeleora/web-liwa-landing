import PageBackground from '../../components/PageBackground/PageBackground.jsx';
import GradientHero from '../../components/GradientHero/GradientHero.jsx';
import PartnerForm from './sections/PartnerForm.jsx';
import FaqAccordion from './sections/FaqAccordion.jsx';

export default function Contact() {
  return (
    <PageBackground overlapNav>
      <GradientHero
        eyebrow="Say hello"
        heading="Contact Us"
        subtext="Questions, ideas, research collaborations, or partnerships — we read everything."
      />
      <PartnerForm />
      <FaqAccordion />
    </PageBackground>
  );
}
