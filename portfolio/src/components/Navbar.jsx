import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import GlitchText from './GlitchText';

const PROJECT_LINKS = [
  { to: '/senior-design',       label: 'senior_design.sv' },
  { to: '/ml-accelerator',      label: 'cnn_accelerator.vhd' },
  { to: '/cpu-project',         label: 'mips_cpu.vhd' },
  { to: '/llm-chat-bot',        label: 'discord_llm.py' },
  { to: '/android-project',     label: 'gs_finder.java' },
  { to: '/web-design-projects', label: 'game_finder.jsx' },
];

function Navbar() {
  const [open, setOpen] = useState(false);       // mobile collapse
  const location = useLocation();

  // close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <nav className="cyber-nav navbar navbar-expand-lg py-2">
      <div className="container">
        <Link className="cyber-nav__brand navbar-brand" to="/">
          <span className="neon-m mono">&gt;</span>
          <GlitchText text="TYLER BIBUS" hover />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`} />
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${open ? 'show' : ''}`}>
          <ul className="navbar-nav align-items-lg-center gap-lg-4 gap-2 mt-3 mt-lg-0">
            <li className="nav-item">
              <NavLink
                to="/work-experience"
                className={({ isActive }) => `cyber-nav__link nav-link ${isActive ? 'is-active' : ''}`}
              >
                Experience
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/resume"
                className={({ isActive }) => `cyber-nav__link nav-link ${isActive ? 'is-active' : ''}`}
              >
                Resume
              </NavLink>
            </li>
            <li className="nav-item">
              <ProjectsDropdown />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

function ProjectsDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="position-relative">
      <button
        type="button"
        className="cyber-nav__link nav-link"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        Projects <span className="mono">{open ? '[-]' : '[+]'}</span>
      </button>

      {open && (
        <ul className="cyber-menu list-unstyled mb-0">
          <li className="px-2 pt-1 pb-2 mono" style={{ fontSize: '.68rem', color: 'var(--faint)', letterSpacing: '.14em' }}>
            ~/projects — {PROJECT_LINKS.length} records
          </li>
          {PROJECT_LINKS.map((p) => (
            <li key={p.to}>
              <Link className="cyber-menu__item" to={p.to} onClick={() => setOpen(false)}>
                {p.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
