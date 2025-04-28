import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>,
);
