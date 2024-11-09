import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Formulaire from './FrontEnd/Formulaire';
import Experts1 from './FrontEnd/Experts1';
import Experts2 from './FrontEnd/Experts2';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        {/* Navbar avec Bootstrap */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light mt-4">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">Mon Application</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/formulaire" className="nav-link">Formulaire</Link>
                </li>
                <li className="nav-item">
                  <Link to="/experts1" className="nav-link">Experts 1</Link>
                </li>
                <li className="nav-item">
                  <Link to="/experts2" className="nav-link">Experts 2</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        {/* Routes */}
        <Routes>
          <Route path="/formulaire" element={<Formulaire />} />
          <Route path="/experts1" element={<Experts1 />} />
          <Route path="/experts2" element={<Experts2 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
