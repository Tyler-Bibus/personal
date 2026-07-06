import { Routes, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WorkExperience from './pages/WorkExperience';
import NonSchoolProjects from './pages/NonSchoolProjects';
import WebDesignProjects from './pages/WebDesignProjects';
import CpuProject from './pages/CpuProject';
import AndroidProject from './pages/AndroidProject';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import MLAccelerator from './pages/MLAccelerator';
import LLMChatBot from './pages/LLMChatBot.jsx'
import SeniorDesign from './pages/SeniorDesign.jsx';
import Resume from './pages/Resume.jsx';

function App() {
  const [isTruth, setIsTruth] = useState(false);



  return (
    <div className="d-flex flex-column min-h-[100vh] bg-dark text-white">
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
    </div>
  );
}

export default App;

