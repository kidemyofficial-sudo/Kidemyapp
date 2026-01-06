import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { RegistrationForm } from './components/RegistrationForm';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Programs } from './components/Programs';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { BackgroundDecoration } from './components/BackgroundDecoration';

export default function App() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  const scrollToPrograms = () => {
    const programSection = document.getElementById('program');
    if (programSection) {
      programSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegister = (programName: string = '') => {
    setSelectedProgram(programName);
    setIsRegistrationOpen(true);
  };

  return (
    <div className="min-h-screen relative">
      <BackgroundDecoration />
      <Navbar onRegisterClick={scrollToPrograms} />
      <HeroCarousel onRegisterClick={scrollToPrograms} />
      <RegistrationForm
        open={isRegistrationOpen}
        onOpenChange={setIsRegistrationOpen}
        selectedProgram={selectedProgram}
      />
      <Features />
      <HowItWorks />
      <Programs onRegisterClick={handleRegister} />
      <Testimonials />
      <CTA onRegisterClick={scrollToPrograms} />
      <Footer />
    </div>
  );
}