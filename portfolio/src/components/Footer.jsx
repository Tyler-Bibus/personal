function Footer() {
    return (
      <footer className="bg-dark text-graytext py-6 mt-auto">
        <div className="container">
          <div className="row g-4">
            {/* Contact Info */}
            <div className="col-12 col-md-6 text-center text-md-start">
              <h3 className="text-crimson text-lg font-bold mb-3 animate-fade">Contact Me</h3>
              <ul className="list-unstyled space-y-2">
                <li>
                  <a
                    href="mailto:tbibus@iastate.edu"
                    className="text-graytext hover:text-crimson transition-colors duration-300"
                    aria-label="Email Tyler Bibus"
                  >
                    <i className="bi bi-envelope-fill me-2"></i>
                    tbibus@iastate.edu
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/tyler-bibus"
                    className="text-graytext hover:text-crimson transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Tyler Bibus LinkedIn Profile"
                  >
                    <i className="bi bi-linkedin me-2"></i>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/tylerbibus"
                    className="text-graytext hover:text-crimson transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Tyler Bibus GitHub Profile"
                  >
                    <i className="bi bi-github me-2"></i>
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Copyright */}
            <div className="col-12 col-md-6 text-center text-md-end">
              <p className="text-graytext mb-2 animate-fade">
                &copy; {new Date().getFullYear()} Tyler Bibus
              </p>
              <p className="text-graytext text-sm">
                Built with <span className="text-crimson">&hearts;</span> using React & TailwindCSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  