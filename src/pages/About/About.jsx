import PageBackground from '../../components/PageBackground/PageBackground.jsx';
import GradientHero from '../../components/GradientHero/GradientHero.jsx';
import WaitlistBanner from '../../components/WaitlistBanner/WaitlistBanner.jsx';
import Intro from './sections/Intro.jsx';
import Press from './sections/Press.jsx';

export default function About() {
  return (
    <PageBackground overlapNav>
      <GradientHero
        eyebrow="Who we are"
        heading="About Us"
        subtext="A privacy-first navigation concept by MELEORA — and the thinking behind it."
      />
      <Intro />
      <Press />
      <WaitlistBanner />
    </PageBackground>
  );
}
