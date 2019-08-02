import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, HashRouter } from 'react-router-dom'

import logo from '../assets/img/logo/1.png'

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
      btnIcon: 'fa fa-2x fa-bars',
      menuHeader: 'menu-header',
      popup: 'app-popup'
    }
  }

  opMenu = () => {
    if (this.state.btnStatus === true) {
      this.setState({
        btnStatus: false,
        btnIcon: 'fa fa-2x fa-times',
        menuHeader: 'menu-header active'
      })
    } else {
      this.setState({
        btnStatus: true,
        btnIcon: 'fa fa-2x fa-bars',
        menuHeader: 'menu-header'
      })
    }
  }

  opPopup = () => {
    if (this.state.popup === 'app-popup') { 
      this.setState({
        popup: 'app-popup show'
      })
    } else {
      this.setState({
        popup: 'app-popup'
      })
    }
  }

  componentDidMount() {
    this.opPopup()
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
                    <a
                      href="https://www.google.com/search?q=komunitas%20ccl%20bandung&safe=strict&npsic=0&rflfq=1&rlha=0&rllag=-6859906,107595747,5&tbm=lcl&rldimm=8450555000989738893&ved=2ahUKEwif87npkuXjAhX9ILcAHdYeA3sQvS4wAHoECAoQIA&rldoc=1&tbs=lrf:!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2#rlfi=hd:;si:8450555000989738893;mv:!1m2!1d-6.859878!2d107.5957993!2m2!1d-6.8599343!2d107.5956959!3m12!1m3!1d41.263080841965824!2d107.59574759999998!3d-6.85990615!2m3!1f0!2f0!3f0!3m2!1i3!2i2!4f13.1;tbs:lrf:!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2" 
                      target="_blank">
                      <button className="btn btn-small btn-transparant btn-no-radius">
                        <i className="fa fa-lw fa-map-marker-alt margin-right-5px" />
                        <span className="txt-site txt-11 app-desktop">
                          JL. Setiabudhi Gang Bapak Eni
                        </span>
                      </button>
                    </a>
                  </div>
                  <div className="col-2 content-right">
                    <button className="btn btn-small btn-transparant btn-no-radius">
                      <i className="fa fa-lg fa-envelope margin-right-5px" />
                      <span className="txt-site txt-11 app-desktop">
                        cclledeng@yahoo.com
                      </span>
                    </button>
                    <a href="https://www.facebook.com/groups/66166846679/" target="_blank">
                      <button className="btn btn-small btn-transparant btn-no-radius">
                        <i className="fab fa-lg fa-facebook" />
                      </button>
                    </a>
                    <a href="https://www.instagram.com/komunitas_ccl/" target="_blank">
                      <button className="btn btn-small btn-transparant btn-no-radius">
                        <i className="fab fa-lg fa-instagram" />
                      </button>
                    </a>
                    <a href="https://twitter.com/CCLbandung" target="_blank">
                      <button className="btn btn-small btn-transparant btn-no-radius">
                        <i className="fab fa-lg fa-twitter" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="main h-grid">
                <div className="col-1">
                  <NavLink to={'/'}>
                    <div className="logo-header">
                      <div style={{backgroundImage: 'url('+logo+')'}} className="image image-60px"></div>
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
            <div className={this.state.popup} onClick={this.opPopup}>
              <div className="a-p-content">
                <button className="close btn btn-small-circle btn-sekunder" onClick={this.opPopup}>
                  <i className="fa fa-lw fa-times" />
                </button>
                <h1 className="txt-site txt-main txt-font-yogyakarta">
                  Sampurasun
                </h1>
              </div>
            </div>
          </div>
          
          <div className="footer">
            <div className="main">
              <div className="grid grid-2x gap-30px grid-mobile-none">
                <div className="col-1">
                  <h1 className="txt-site txt-main txt-font-nova margin-bottom-5px">
                    Celah-Celah Langit
                  </h1>
                  <div className="app-line margin-bottom-15px"></div>
                  <p className="txt-site txt-12 txt-primary margin-bottom-15px">
                    Komunitas Celah-Celah Langit (CCL) merupakan komunitas yang bergerak di bidang kesenian, khususnya teater.
                  </p>
                  <p className="txt-site txt-12 txt-primary margin-bottom-15px">
                    Komunitas Celah-Celah Langit CCL adalah komunitas yang Kolektif, gotong royong dan “sauyunan”.
                  </p>
                  <p className="txt-site txt-12 txt-primary margin-bottom-15px">
                    Komunitas Celah-Celah CCL adalah komunitas nirlaba, tanpa ada sepeserpun benefit yang dihasilkan. 
                  </p>
                </div>
                <div className="col-2">

                  <div className="grid grid-2x gap-15px">
                    <div className="col-1">
                      <a className="footer-link margin-30px" href="#" target="_blank">
                        <div className="txt-site txt-main">
                          <i className="fa fa-lw fa-phone width width-30px" />
                          <span className="txt-site txt-14 txt-bold txt-main">No. Telp</span>
                        </div>
                        <div className="txt-site txt-primary txt-11">
                          081-324-589-517 / 081-223-939-056
                        </div>
                      </a>

                      <a 
                        className="footer-link margin-30px" 
                        href="https://www.google.com/search?q=komunitas%20ccl%20bandung&safe=strict&npsic=0&rflfq=1&rlha=0&rllag=-6859906,107595747,5&tbm=lcl&rldimm=8450555000989738893&ved=2ahUKEwif87npkuXjAhX9ILcAHdYeA3sQvS4wAHoECAoQIA&rldoc=1&tbs=lrf:!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2#rlfi=hd:;si:8450555000989738893;mv:!1m2!1d-6.859878!2d107.5957993!2m2!1d-6.8599343!2d107.5956959!3m12!1m3!1d41.263080841965824!2d107.59574759999998!3d-6.85990615!2m3!1f0!2f0!3f0!3m2!1i3!2i2!4f13.1;tbs:lrf:!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2" 
                        target="_blank">
                        <div className="txt-site txt-main">
                          <i className="fa fa-lw fa-map-marker-alt width width-30px" />
                          <span className="txt-site txt-14 txt-bold txt-main">Alamat</span>
                        </div>
                        <div className="txt-site txt-primary txt-11">
                          JL. Setiabudhi Gang Bapak Eni, No. 8/169 A, Ledeng, Kec. Cidadap, Kota Bandung, Jawa Barat 40131
                        </div>
                      </a>

                      <a className="footer-link margin-30px" href="#" target="_blank">
                        <div className="txt-site txt-main">
                          <i className="fa fa-lw fa-envelope width width-30px" />
                          <span className="txt-site txt-14 txt-bold txt-main">Email</span>
                        </div>
                        <div className="txt-site txt-primary txt-11">
                          cclledeng@yahoo.com
                        </div>
                      </a>
                    </div>
                    <div className="col-2">
                      <a 
                        className="footer-link margin-30px" 
                        href="https://www.instagram.com/komunitas_ccl/" 
                        target="_blank">
                        <div className="txt-site txt-main">
                          <i className="fab fa-lw fa-instagram width width-30px" />
                          <span className="txt-site txt-14 txt-bold txt-main">Instagram</span>
                        </div>
                        <div className="txt-site txt-primary txt-11">
                          @komunitas_ccl
                        </div>
                      </a>

                      <a 
                        className="footer-link margin-30px" 
                        href="https://twitter.com/CCLbandung" 
                        target="_blank">
                        <div className="txt-site txt-main">
                          <i className="fab fa-lw fa-twitter width width-30px" />
                          <span className="txt-site txt-14 txt-bold txt-main">Twitter</span>
                        </div>
                        <div className="txt-site txt-primary txt-11">
                          @CCLbandung
                        </div>
                      </a>

                      <a 
                        className="footer-link margin-30px" 
                        href="https://www.facebook.com/groups/66166846679/" 
                        target="_blank">
                        <div className="txt-site txt-main">
                          <i className="fab fa-lw fa-facebook width width-30px" />
                          <span className="txt-site txt-14 txt-bold txt-main">Facebook</span>
                        </div>
                        <div className="txt-site txt-primary txt-11">
                          Grup Facebook
                        </div>
                      </a>
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
