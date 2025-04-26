import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Showcase from '@/components/Showcase';
import AboutUs from '@/components/AboutUs';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <Showcase />
        <AboutUs />
        <ContactForm />
      </div>
    </main>
  );
}
