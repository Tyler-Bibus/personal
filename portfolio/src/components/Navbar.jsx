import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-md border-b-2 border-crimson" style={{ backgroundColor: '#121212', zIndex: 1000 }}>
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand text-crimson font-bold text-xl animate-fade" to="/">
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
                className="nav-link text-graytext border border-crimson rounded-md hover:text-white transition-colors duration-300 px-3 py-2"
                to="/work-experience"
              >
                Work Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-graytext border border-crimson rounded-md hover:text-white transition-colors duration-300 px-3 py-2"
                to="/non-school-projects"
              >
                Non-School Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-graytext border border-crimson rounded-md hover:text-white transition-colors duration-300 px-3 py-2"
                to="/android-project"
              >
                Android App
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-graytext border border-crimson rounded-md hover:text-white transition-colors duration-300 px-3 py-2"
                to="/cpu-project"
              >
                CPU Project
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-graytext border border-crimson rounded-md hover:text-white transition-colors duration-300 px-3 py-2"
                to="/web-design-projects"
              >
                Web App
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

