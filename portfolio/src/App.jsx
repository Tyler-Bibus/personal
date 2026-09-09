import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CyberBackground from './components/CyberBackground';
import useKonami from './hooks/useKonami';

import Home from './pages/Home';
import WorkExperience from './pages/WorkExperience';
import NonSchoolProjects from './pages/NonSchoolProjects';
import WebDesignProjects from './pages/WebDesignProjects';
import CpuProject from './pages/CpuProject';
import AndroidProject from './pages/AndroidProject';
import MLAccelerator from './pages/MLAccelerator';
import LLMChatBot from './pages/LLMChatBot';
import SeniorDesign from './pages/SeniorDesign';
import Resume from './pages/Resume';

import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

/** Jump to the top whenever the route changes. */
function RouteScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function App() {
  const [overdrive, setOverdrive] = useState(false);

  // ── easter egg: konami code kicks the whole page into overdrive ──
  useKonami(() => setOverdrive(true));

  useEffect(() => {
    if (!overdrive) return undefined;
    document.documentElement.classList.add('overdrive');
    const t = setTimeout(() => setOverdrive(false), 6000);
    return () => {
      clearTimeout(t);
      document.documentElement.classList.remove('overdrive');
    };
  }, [overdrive]);

  // ── easter egg: a note for anyone who opens devtools ──
  useEffect(() => {
    console.log(
      '%c  T Y L E R   B I B U S  ',
      'background:#ff2bd6;color:#04010a;font:bold 20px Audiowide,monospace;padding:8px 14px;'
    );
    console.log(
      '%cSource: github.com/Tyler-Bibus/personal\nTry ↑↑↓↓←→←→BA.',
      'color:#b026ff;font:13px monospace;'
    );
  }, []);

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <CyberBackground />
      <RouteScrollReset />
      <Navbar />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web-design-projects" element={<WebDesignProjects />} />
          <Route path="/cpu-project" element={<CpuProject />} />
          <Route path="/android-project" element={<AndroidProject />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/non-school-projects" element={<NonSchoolProjects />} />
          <Route path="/ml-accelerator" element={<MLAccelerator />} />
          <Route path="/llm-chat-bot" element={<LLMChatBot />} />
          <Route path="/senior-design" element={<SeniorDesign />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>

      <Footer />
      <ScrollToTop />

      <AnimatePresence>
        {overdrive && (
          <motion.div
            className="overdrive-toast"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            /// system overdrive engaged
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
