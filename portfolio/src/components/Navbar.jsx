import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-md border-b-2 border-crimson animate-fade" style={{ backgroundColor: '#121212', zIndex: 1000 }}>
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand text-white font-bold text-xl px-3" to="/"
                style={{
                  border: '1px solid #DC143C',
                }}
                onMouseEnter={(e) => (e.target.style.border = '1px solid #8B0000')}
                onMouseLeave={(e) => (e.target.style.border = '1px solid #DC143C')}>
          Tyler Bibus
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler border-crimson"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse justify-content-end bg-[#141414] md:bg-transparent p-3 md:p-0" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <Link
                className="nav-link text-white rounded-md transition-colors duration-300 px-3 py-2"
                to="/work-experience"
                style={{
                  border: '1px solid #DC143C',
                }}
                onMouseEnter={(e) => (e.target.style.border = '1px solid #8B0000')}
                onMouseLeave={(e) => (e.target.style.border = '1px solid #DC143C')}
              >
                Work Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white rounded-md transition-colors duration-300 px-3 py-2"
                to="/resume"
                style={{
                  border: '1px solid #DC143C',
                }}
                onMouseEnter={(e) => (e.target.style.border = '1px solid #8B0000')}
                onMouseLeave={(e) => (e.target.style.border = '1px solid #DC143C')}
              >
                Resume
              </Link>
            </li>
              <li className="nav-item">
              <Link
                className="nav-link text-white rounded-md transition-colors duration-300 px-3 py-2"
                to="/reflections"
                style={{
                  border: '1px solid #DC143C',
                }}
                onMouseEnter={(e) => (e.target.style.border = '1px solid #8B0000')}
                onMouseLeave={(e) => (e.target.style.border = '1px solid #DC143C')}
              >
                Reflections
              </Link>
            </li>
              <li className="nav-item dropdown" id="projectsDropdownWrapper">
                {/* React-controlled dropdown (works without Bootstrap JS) */}
                {/** We'll render a button and toggle the menu via state. */}
                <ProjectsDropdown />
              </li>
          </ul>
        </div>
      </div>
      <br></br>
    </nav>
  );
}

export default Navbar;

function ProjectsDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    function handleKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        className="nav-link dropdown-toggle text-white rounded-md transition-colors duration-300 px-3 py-2 bg-transparent"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        style={{ border: '1px solid #DC143C' }}
        onMouseEnter={(e) => (e.target.style.border = '1px solid #8B0000')}
        onMouseLeave={(e) => (e.target.style.border = '1px solid #DC143C')}
      >
        Projects
      </button>

      <ul
        className={`dropdown-menu dropdown-menu-end dropdown-menu-dark bg-[#141414] absolute right-0 mt-2 min-w-[200px] z-50 ${open ? 'block show' : 'hidden'}`}
        aria-labelledby="projectsDropdown"
        style={{ border: '1px solid #DC143C' }}
      >
        {/* <li>
          <Link className="dropdown-item text-white px-4 py-2 block" to="/non-school-projects" onClick={() => setOpen(false)}>Non-School Projects</Link>
        </li> */}
        <li>
          <Link className="dropdown-item text-white px-4 py-2 block" to="/android-project" onClick={() => setOpen(false)}>Android App</Link>
        </li>
        <li>
          <Link className="dropdown-item text-white px-4 py-2 block" to="/cpu-project" onClick={() => setOpen(false)}>CPU Project</Link>
        </li>
        <li>
          <Link className="dropdown-item text-white px-4 py-2 block" to="/web-design-projects" onClick={() => setOpen(false)}>Web App</Link>
        </li>
        <li>
          <Link className="dropdown-item text-white px-4 py-2 block" to="/llm-chat-bot" onClick={() => setOpen(false)}>LLM Chat Bot</Link>
        </li>
        <li>
          <Link className="dropdown-item text-white px-4 py-2 block" to="/ml-accelerator" onClick={() => setOpen(false)}>ML Accelerator</Link>
        </li>
        <li>
          <Link className="dropdown-item text-white px-4 py-2 block" to="/senior-design" onClick={() => setOpen(false)}>Senior Design</Link>
        </li>
      </ul>
    </div>
  );
}

