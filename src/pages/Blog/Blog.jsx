import PageBackground from '../../components/PageBackground/PageBackground.jsx';
import WaitlistBanner from '../../components/WaitlistBanner/WaitlistBanner.jsx';
import SimpleHero from '../../components/SimpleHero/SimpleHero.jsx';

export default function Blog() {
  return (
    <PageBackground>
      <SimpleHero
        eyebrow="Blog"
        heading="Coming soon."
        subtext="We are writing about what we learn while building LIWA — research notes, privacy decisions, and what commuters tell us. The first posts land soon."
        showIcon
      />
      <WaitlistBanner />
    </PageBackground>
  );
}
