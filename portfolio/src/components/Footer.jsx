function Footer() {
  return (
    <footer className="bg-dark text-graytext py-6 mt-auto animate-fade">
      <hr/>
      <div className="container">
        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <h3 className="text-crimson text-lg font-bold mb-3">Contact Me</h3>
            <div className="d-flex justify-content-center justify-content-md-start gap-4 pb-2">
              <div>
                <a
                  href="mailto:tylerbibus@hotmail.com"
                  className="text-graytext hover-text-crimson transition-colors duration-300"
                  aria-label="Email Tyler Bibus"
                >
                  <i className="bi bi-envelope-fill text-crimson fs-1"></i>
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/tyler-bibus-a63087248/"
                  className="text-graytext hover-text-crimson transition-colors duration-300"
                  target="_blank"
                  aria-label="Tyler Bibus LinkedIn Profile"
                >
                  <i className="bi bi-linkedin text-crimson fs-1"></i>
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/tyler-bibus"
                  className="text-graytext hover-text-crimson transition-colors duration-300"
                  target="_blank"
                  aria-label="Tyler Bibus GitHub Profile"
                >
                  <i className="bi bi-github text-crimson fs-1"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="col-12 col-md-6 text-center text-md-end">
            <p className="text-graytext mb-2">
              © {new Date().getFullYear()} Tyler Bibus
            </p>
            <p className="text-graytext text-sm">
              Built with <span className="text-crimson">♥</span> using React & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
