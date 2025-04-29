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
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

function App() {
  return (
    <div className="d-flex flex-column vh-100 bg-dark text-white">
      <Navbar />
      <main className="flex-grow-1">
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

