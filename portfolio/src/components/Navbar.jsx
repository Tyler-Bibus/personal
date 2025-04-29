import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-md border-b-2 border-crimson animate-fade" style={{ backgroundColor: '#121212', zIndex: 1000 }}>
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand text-white font-bold text-xl" to="/">
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
                to="/non-school-projects"
                style={{
                  border: '1px solid #DC143C',
                }}
                onMouseEnter={(e) => (e.target.style.border = '1px solid #8B0000')}
                onMouseLeave={(e) => (e.target.style.border = '1px solid #DC143C')}
              >
                Non-School Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white rounded-md transition-colors duration-300 px-3 py-2"
                to="/android-project"
                style={{
                  border: '1px solid #DC143C',
                }}
                onMouseEnter={(e) => (e.target.style.border = '1px solid #8B0000')}
                onMouseLeave={(e) => (e.target.style.border = '1px solid #DC143C')}
              >
                Android App
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white rounded-md transition-colors duration-300 px-3 py-2"
                to="/cpu-project"
                style={{
                  border: '1px solid #DC143C',
                }}
                onMouseEnter={(e) => (e.target.style.border = '1px solid #8B0000')}
                onMouseLeave={(e) => (e.target.style.border = '1px solid #DC143C')}
              >
                CPU Project
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white rounded-md transition-colors duration-300 px-3 py-2"
                to="/web-design-projects"
                style={{
                  border: '1px solid #DC143C',
                }}
                onMouseEnter={(e) => (e.target.style.border = '1px solid #8B0000')}
                onMouseLeave={(e) => (e.target.style.border = '1px solid #DC143C')}
              >
                Web App
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <br></br>
    </nav>
  );
}

export default Navbar;

