import React from 'react'
import { BrowserRouter as Switch, Router, Route, NavLink, HashRouter } from 'react-router-dom'

import Home from '../components/pages/Home'
import Acara from '../components/pages/Acara'
import Aktifitas from '../components/pages/Aktifitas'
import Fasilitas from '../components/pages/Fasilitas'
import Kontak from '../components/pages/Kontak'
import Penghargaan from '../components/pages/Penghargaan'
import Profile from '../components/pages/Profile'
import Program from '../components/pages/Program'

function App() {
  return (
    <HashRouter history={ Router.browserHistory }>
      <div className="app">

        <div className="header">
          <div className="place">
            <div className="main h-grid">
              <div className="col-1">
                <div className="logo-header">
                  <h3>Logo</h3>
                </div>
              </div>
              <div className="col-2">
                <ul className="menu-header">
                  <li>
                    <NavLink to={'/'}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/acara'}>Acara</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/aktifitas'}>Aktifitas</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/fasilitas'}>Fasilitas</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/program'}>Program</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/penghargaan'}>Penghargaan</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/tentang'}>Tentang Kami</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/kontak'}>Kontak</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="body">
          <div>
            {/* router */}
            <Route exact path="/" component={ Home } />
            <Route exact path="/acara" component={ Acara } />
            <Route exact path="/aktifitas" component={ Aktifitas } />
            <Route exact path="/fasilitas" component={ Fasilitas } />
            <Route exact path="/kontak" component={ Kontak } />
            <Route exact path="/penghargaan" component={ Penghargaan } />
            <Route exact path="/tentang" component={ Profile } />
            <Route exact path="/program" component={ Program } />
          </div>
        </div>
        
        <div className="footer">
          <div className="main">Footer</div>
        </div>

      </div>
    </HashRouter>
  );
}

export default App
