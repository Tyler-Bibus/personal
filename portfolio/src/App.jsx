import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WorkExperience from './pages/WorkExperience';
import NonSchoolProjects from './pages/NonSchoolProjects';
import WebDesignProjects from './pages/WebDesignProjects';
import CpuProject from './pages/CpuProject';
import AndroidProject from './pages/AndroidProject';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

function App() {
  return (
    <div className="font-sans flex flex-col min-h-screen bg-dark text-white">
      <Navbar />
      <main className="flex-grow transition-all duration-500 ease-in-out opacity-100 animate-fade">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web-design-projects" element={<WebDesignProjects />} />
          <Route path="/cpu-project" element={<CpuProject />} />
          <Route path="/android-project" element={<AndroidProject />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/non-school-projects" element={<NonSchoolProjects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

