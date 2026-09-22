import PageBackground from '../../components/PageBackground/PageBackground.jsx';
import WaitlistBanner from '../../components/WaitlistBanner/WaitlistBanner.jsx';
import Hero from './sections/Hero.jsx';
import Features from './sections/Features.jsx';
import WhoItsFor from './sections/WhoItsFor.jsx';
import Vision from './sections/Vision.jsx';
import Survey from './sections/Survey.jsx';
import Partners from './sections/Partners.jsx';

export default function Home() {
  return (
    <PageBackground overlapNav>
      <Hero />
      <Features />
      <WhoItsFor />
      <Vision />
      <Survey />
      <Partners />
      <WaitlistBanner />
    </PageBackground>
  );
}
