import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ScrollLayout } from './components/layout/ScrollLayout';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Preloader } from './components/ui/Preloader';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* 1. Premium Architectural Preloader */}
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <Router>
          <ScrollLayout>
            {/* Global Technical Drafting Border Lines */}
            <div className="fixed left-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none z-[90] hidden xl:block" />
            <div className="fixed right-[3.5%] top-0 w-[1px] h-full bg-accent/5 pointer-events-none z-[90] hidden xl:block" />

            {/* Navigation Header */}
            <Navbar />

            {/* Page Switcher */}
            <main className="min-h-screen">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>

            {/* Global Footer */}
            <Footer />
          </ScrollLayout>
        </Router>
      )}
    </>
  );
}

export default App;
