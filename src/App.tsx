import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AmbientGlow } from './components/AmbientGlow';
import { PageLoader } from './components/PageLoader';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { IT } from './pages/IT';
import { Digital } from './pages/Digital';
import { Creative } from './pages/Creative';
import { Media } from './pages/Media';
import { Staffing } from './pages/Staffing';
import { Solutions } from './pages/Solutions';
import { Process } from './pages/Process';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { NotFound } from './pages/NotFound';
import { Careers } from './pages/Careers';
export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080609] text-white flex flex-col relative selection:bg-[#7900E8] selection:text-[#FFD500]">
      {/* Initial Page Loading Branding Animation */}
      <PageLoader />

      {/* Atmospheric Ambient Lighting & Grid */}
      <AmbientGlow />

      {/* Route-level Scroll Restorer */}
      <ScrollToTop />

      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Dynamic Content Views */}
      <main className="flex-grow relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/it" element={<IT />} />
          <Route path="/services/digital" element={<Digital />} />
          <Route path="/services/creative" element={<Creative />} />
          <Route path="/services/media" element={<Media />} />
          <Route path="/services/staffing" element={<Staffing />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/process" element={<Process />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Corporate Multi-Column Footer */}
      <Footer />
    </div>
  );
};

export default App;
