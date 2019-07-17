import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, HashRouter } from 'react-router-dom'

import Home from '../components/pages/Home'
import Acara from '../components/pages/Acara'
import Aktifitas from '../components/pages/Aktifitas'
import Fasilitas from '../components/pages/Fasilitas'
import Kontak from '../components/pages/Kontak'
import Penghargaan from '../components/pages/Penghargaan'
import Profile from '../components/pages/Profile'
import Program from '../components/pages/Program'

class App extends Component {

  constructor () {
    super()
    this.state = {
      btnStatus: true,
      btnIcon: 'fa fa-lg fa-bars',
      menuHeader: 'menu-header'
    }
  }

  opMenu = () => {
    if (this.state.btnStatus === true) {
      this.setState({
        btnStatus: false,
        btnIcon: 'fa fa-lg fa-times',
        menuHeader: 'menu-header active'
      })
    } else {
      this.setState({
        btnStatus: true,
        btnIcon: 'fa fa-lg fa-bars',
        menuHeader: 'menu-header'
      })
    }
  }

  render() {
    return (
      <HashRouter history={ Router.browserHistory }>
        <div className="app">

          <div className="header">
            <div className="place">
              
              <div className="info">
                <div className="main grid grid-2x">
                  <div className="col-1">
                    <button className="btn btn-small btn-transparant btn-no-radius">
                      <i className="fa fa-lw fa-phone margin-right-5px" />
                      <span className="txt-site txt-11 app-desktop">
                        081-324-589-517 / 081-223-939-056
                      </span>
                    </button>
                    <button className="btn btn-small btn-transparant btn-no-radius">
                      <i className="fa fa-lw fa-map-marker-alt margin-right-5px" />
                      <span className="txt-site txt-11 app-desktop">
                        Jl.Kujang Rompang No.14 Bandung
                      </span>
                    </button>
                  </div>
                  <div className="col-2 content-right">
                    <button className="btn btn-small btn-transparant btn-no-radius">
                      <i className="fa fa-lg fa-envelope margin-right-5px" />
                      <span className="txt-site txt-11 app-desktop">
                        cclledeng@yahoo.com
                      </span>
                    </button>
                    <button className="btn btn-small btn-transparant btn-no-radius">
                      <i className="fab fa-lg fa-facebook" />
                    </button>
                    <button className="btn btn-small btn-transparant btn-no-radius">
                      <i className="fab fa-lg fa-instagram" />
                    </button>
                    <button className="btn btn-small btn-transparant btn-no-radius">
                      <i className="fab fa-lg fa-twitter" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="main h-grid">
                <div className="col-1">
                  <NavLink to={'/'}>
                    <div className="logo-header">
                      <h3>Logo</h3>
                    </div>
                  </NavLink>
                </div>
                <div className="col-2">
                  <div className="h-btn post-top">
                    <button 
                      onClick={this.opMenu}
                      className="btn btn-circle btn-grey">
                      <i className={this.state.btnIcon} />
                    </button>
                  </div>
                  <ul className={this.state.menuHeader}>
                    
                      <li onClick={this.opMenu}>
                        <NavLink to={'/home'}>Home</NavLink>
                      </li>
                    
                    
                      <li onClick={this.opMenu}>
                        <NavLink to={'/acara'}>Acara</NavLink>
                      </li>
                    
                    
                      <li onClick={this.opMenu}>
                        <NavLink to={'/penghargaan'}>Penghargaan</NavLink>
                      </li>
                    
                    
                      <li onClick={this.opMenu}>
                        <NavLink to={'/aktifitas'}>Aktifitas</NavLink>
                      </li>
                    
                    
                      <li onClick={this.opMenu}>
                        <NavLink to={'/fasilitas'}>Fasilitas</NavLink>
                      </li>
                    
                    
                      <li onClick={this.opMenu}>
                        <NavLink to={'/program'}>Program</NavLink>
                      </li>
                    
                    
                      <li onClick={this.opMenu}>
                        <NavLink to={'/tentang'}>Tentang Kami</NavLink>
                      </li>
                    
                    {/* <li>
                      <NavLink to={'/kontak'}>Kontak</NavLink>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="body">
            <div>
              {/* router */}
              <Route exact path="/" component={ Home } />
              <Route exact path="/home" component={ Home } />
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
            <div className="main">
              <div className="grid grid-2x gap-30px grid-mobile-none">
                <div className="col-1">
                  <h1 className="txt-site txt-main margin-bottom-5px">
                    Tentang Kami
                  </h1>
                  <div className="app-line margin-bottom-15px"></div>
                  <p className="txt-site txt-14 txt-primary margin-bottom-15px">
                    Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
                  </p>
                  <p className="txt-site txt-14 txt-primary margin-bottom-15px">
                    Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
                  </p>
                </div>
                <div className="col-2">

                  <div className="grid grid-2x gap-15px">
                    <div className="col-1">
                      <div className="margin-30px">
                        <div className="txt-site txt-main">
                          <i className="fa fa-lw fa-phone width width-30px" />
                          <span className="txt-site txt-14 txt-bold txt-main">No. Telp</span>
                        </div>
                        <div className="txt-site txt-primary txt-11">
                          081-324-589-517 / 081-223-939-056
                        </div>
                      </div>

                      <div className="margin-30px">
                        <div className="txt-site txt-main">
                          <i className="fa fa-lw fa-map-marker-alt width width-30px" />
                          <span className="txt-site txt-14 txt-bold txt-main">Alamat</span>
                        </div>
                        <div className="txt-site txt-primary txt-11">
                          Jl.Kujang Rompang No.14 Bandung
                        </div>
                      </div>

                      <div className="margin-30px">
                        <div className="txt-site txt-main">
                          <i className="fa fa-lw fa-envelope width width-30px" />
                          <span className="txt-site txt-14 txt-bold txt-main">Email</span>
                        </div>
                        <div className="txt-site txt-primary txt-11">
                          cclledeng@yahoo.com
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="margin-30px">
                        <div className="txt-site txt-main">
                          <i className="fab fa-lw fa-instagram width width-30px" />
                          <span className="txt-site txt-14 txt-bold txt-main">Instagram</span>
                        </div>
                        <div className="txt-site txt-primary txt-11">
                          @komunitas_ccl
                        </div>
                      </div>

                      <div className="margin-30px">
                        <div className="txt-site txt-main">
                          <i className="fab fa-lw fa-twitter width width-30px" />
                          <span className="txt-site txt-14 txt-bold txt-main">Twitter</span>
                        </div>
                        <div className="txt-site txt-primary txt-11">
                          @CCLbandung
                        </div>
                      </div>

                      <div className="margin-30px">
                        <div className="txt-site txt-main">
                          <i className="fab fa-lw fa-facebook width width-30px" />
                          <span className="txt-site txt-14 txt-bold txt-main">Facebook</span>
                        </div>
                        <div className="txt-site txt-primary txt-11">
                          Grup Facebook
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </HashRouter>
    )
  }
}

export default App
