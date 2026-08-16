import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const LINKS = [
  { href: 'mailto:tylerbibus@hotmail.com', icon: FaEnvelope, label: 'tylerbibus@hotmail.com' },
  { href: 'https://www.linkedin.com/in/tyler-bibus-a63087248/', icon: FaLinkedin, label: 'in/tyler-bibus' },
  { href: 'https://github.com/Tyler-Bibus', icon: FaGithub, label: 'github.com/Tyler-Bibus' },
];

function Footer() {
  return (
    <footer className="cyber-footer">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-12 col-md-6">
            <p className="kicker mb-3">// establish_uplink</p>
            <div className="d-flex flex-column gap-2">
              {LINKS.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  className="footer-link"
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="col-12 col-md-6 text-md-end">
            <p className="mono mb-1" style={{ color: 'var(--faint)', fontSize: '.85rem' }}>
              tyler@portfolio:~$ <span className="caret" />
            </p>
            <p className="mono mb-1" style={{ color: 'var(--dim)', fontSize: '.85rem' }}>
              © {new Date().getFullYear()} Tyler Bibus — Ames, IA
            </p>
            <p className="mono mb-0" style={{ color: 'var(--faint)', fontSize: '.78rem' }}>
              built with react · vite · far too many keyframes
            </p>
            <p className="mono mt-2 mb-0" style={{ color: 'var(--faint)', fontSize: '.72rem', letterSpacing: '.12em' }}>
              hint: the portrait is clickable. so is ↑↑↓↓←→←→ba
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
