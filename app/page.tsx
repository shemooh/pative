import Navbar from './components/Navbar';     // ← From app/ to components/
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Systems from './components/Portfolio';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <Hero />
      <Services />
      <Systems />
      <Stats />
      <CTA />
      <Footer />
     
    </div>
  );
}
