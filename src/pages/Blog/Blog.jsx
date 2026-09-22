import PageBackground from '../../components/PageBackground/PageBackground.jsx';
import WaitlistBanner from '../../components/WaitlistBanner/WaitlistBanner.jsx';
import ComingSoonHero from './sections/ComingSoonHero.jsx';

export default function Blog() {
  return (
    <PageBackground>
      <ComingSoonHero />
      <WaitlistBanner />
    </PageBackground>
  );
}
