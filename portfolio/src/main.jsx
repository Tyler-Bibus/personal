// Import order matters: Bootstrap first so the cyberpunk theme in
// index.css -> styles/cyber.css is layered on top of it.
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
);
