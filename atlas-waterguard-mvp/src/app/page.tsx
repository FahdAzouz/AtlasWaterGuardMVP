import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Impact from './components/Impact';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Impact />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
