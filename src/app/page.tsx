import Hero from '@/components/Hero';
import BrandStory from '@/components/BrandStory';
import FeaturedSection from '@/components/FeaturedSection';
import SignatureCollection from '@/components/SignatureCollection';
import Philosophy from '@/components/Philosophy';

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-ivory">
      <Hero />
      <BrandStory />
      <FeaturedSection />
      <SignatureCollection />
      <Philosophy />
    </main>
  );
}
