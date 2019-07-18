import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

// banner
import banner1 from '../../assets/img/banner/1.JPG'
import banner2 from '../../assets/img/banner/2.JPG'
import banner3 from '../../assets/img/banner/3.jpg'

// acara
import acara1 from '../../assets/img/acara/1.jpg'
import acara2 from '../../assets/img/acara/2.jpg'
import acara3 from '../../assets/img/acara/3.jpg'
import acara4 from '../../assets/img/acara/4.jpg'
import acara5 from '../../assets/img/acara/5.jpg'
import acara6 from '../../assets/img/acara/6.jpg'

// penghargaan
import penghargaan1 from '../../assets/img/penghargaan/1.jpg'
import penghargaan2 from '../../assets/img/penghargaan/2.jpg'

// aktifitas
import aktivitas1 from '../../assets/img/aktivitas/1.jpg'
import aktivitas2 from '../../assets/img/aktivitas/2.jpg'
import aktivitas3 from '../../assets/img/aktivitas/3.jpg'

// fasilitas
import fasilitas1 from '../../assets/img/fasilitas/1.jpg'
import fasilitas2 from '../../assets/img/fasilitas/2.JPG'
import fasilitas3 from '../../assets/img/fasilitas/3.JPG'

class Pages extends Component {
  constructor () {
    super()
    this.state = {}
  }

  onCircle = (val) => {
    // var dt = []
    // for (let index = 0; index < val; index++) {
    //   dt.push(
    //     <div className="df-card">
    //       <div 
    //         style={{backgroundImage: 'url("../../assets/img/acara/'+(index+1)+'.jpg")'}}
    //         className="margin-left-5px margin-right-5px image image-160px image-circle background-dark-grey"></div>
    //     </div>
    //   )
    // }
    return(
      <div className="df-card">
          <div 
            style={{backgroundImage: 'url('+val+')'}}
            className="margin-left-5px margin-right-5px image image-160px image-circle background-dark-grey"></div>
      </div>
    )
  }

  onContent = (val, title, desc) => {
    // var dt = []
    // for (let index = 0; index < val; index++) {
    //   dt.push(
    //     <div className="df-card card">
    //       <div className="image image-middle background-dark-grey"></div>
    //       <div className="padding-15px">
    //         <h3 className="txt-site txt-main">Title</h3>
    //         <p className="txt-site txt-11 txt-primary">Description</p>
    //       </div>
    //     </div>
    //   )
    // }
    return(
      <div className="df-card card no-hover">
          <div 
            style={{backgroundImage: 'url('+val+')'}}
            className="image image-middle background-dark-grey"></div>
          <div className="padding-15px">
            <h3 className="txt-site txt-main">{ title }</h3>
            <p className="txt-site txt-11 txt-primary">{ desc }</p>
          </div>
      </div>
    )
  }

  render() {
    return (
      <div>

        <div className="banner">
          <Carousel 
            infiniteLoop={true} 
            showThumbs={false} 
            centerMode={false}
            autoPlay={true}
            showIndicators={true}
            showStatus={false}
            >
                <div>
                    <img src={banner1} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={banner2} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={banner3} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
          </Carousel>
        </div>
        <div className="main padding-top-30px padding-bottom-30px">

          <div className="padding-15px"></div>

          <div className="width width-center">
            <h1 className="txt-site txt-center txt-main margin-bottom-5px">Acara</h1>
            {/* <p className="txt-site txt-center txt-14 txt-primary">Description</p> */}
            <div className="app-line center"></div>
          </div>

          <div className="padding-15px"></div>

          <div className="padding-5px"></div>

          <div className="display-flex mobile-flex">
            { this.onCircle(acara1) }
            { this.onCircle(acara2) }
            { this.onCircle(acara3) }
            { this.onCircle(acara4) }
            { this.onCircle(acara5) }
            <Link to={'/acara'}>
              <div className="df-card">
                <div className="margin-left-5px margin-right-5px image image-160px image-circle background-grey border-all">
                  <i className="txt-site txt-big txt-middle txt-primary fa fa-2x fa-arrow-right"></i>
                </div>
              </div>
            </Link>
          </div>

          <div className="padding-30px"></div>

          <div className="grid grid-2x gap-30px grid-mobile-none">
            <div className="col-1">
              <div className="grid grid-2x gap-15px">
                <div className="col-1">
                  <div 
                    style={{backgroundImage: 'url('+penghargaan1+')'}}
                    className="margin-15px image image-full image-radius background-dark-grey"></div>
                </div>
                <div className="col-2">
                  <div 
                    style={{backgroundImage: 'url('+penghargaan2+')'}}
                    className="margin-15px image image-full image-radius background-dark-grey"></div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h1 className="txt-site txt-main margin-top-15px margin-bottom-5px">
                Penghargaan
              </h1>
              <div className="app-line"></div>
              <p className="txt-site txt-14 txt-primary margin-15px">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
              </p>
              <p className="txt-site txt-14 txt-primary margin-bottom-15px">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
              </p>
              <div className="content-right">
                <Link to={'/penghargaan'}>
                  <button className="btn btn-sekunder btn-radius">
                    Lihat Selengkapnya
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="padding-30px"></div>

          <div className="grid grid-2x gap-30px grid-mobile-none">
            <div className="col-1">
              <h1 className="txt-site txt-main margin-top-15px margin-bottom-5px">
                Tentang Kami
              </h1>
              <div className="app-line"></div>
              <p className="txt-site txt-14 txt-primary margin-15px">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
              </p>
              <p className="txt-site txt-14 txt-primary margin-bottom-15px">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
              </p>
              <div className="content-right">
                <Link to={'/tentang'}>
                  <button className="btn btn-sekunder btn-radius">
                    Lihat Selengkapnya
                  </button>
                </Link>
              </div>
              <div className="padding-10px"></div>
            </div>
            <div className="col-2">
              <div style={{borderRadius: '10px', overflow: 'hidden'}}>
                <Carousel 
                  infiniteLoop={true} 
                  showThumbs={false} 
                  centerMode={false}
                  autoPlay={false}
                  showIndicators={true}
                  showStatus={false}
                  >
                  <div 
                    className="margin-15px image image-radius background-dark-grey" 
                    style={{
                      height: '300px',
                      backgroundImage: 'url('+banner1+')'
                    }}>
                    <div className="txt-site txt-white txt-center txt-small txt-top">
                      <i className="fa fa-lg fa-play" />
                    </div>
                  </div>
                  <div 
                    className="margin-15px image image-radius background-dark-grey" 
                    style={{
                      height: '300px',
                      backgroundImage: 'url('+banner1+')'
                    }}>
                    <div className="txt-site txt-white txt-center txt-small txt-top">
                      <i className="fa fa-lg fa-play" />
                    </div>
                  </div>
                  <div 
                    className="margin-15px image image-radius background-dark-grey" 
                    style={{
                      height: '300px',
                      backgroundImage: 'url('+banner1+')'
                    }}>
                    <div className="txt-site txt-white txt-center txt-small txt-top">
                      <i className="fa fa-lg fa-play" />
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>

          <div className="padding-30px"></div>

          <div className="title-link">
            <div className="col-1">
              <div className="t-l-tittle">Aktifitas</div>
              <div className="app-line"></div>
            </div>
            <div className="col-2">
              <Link to={'/aktifitas'}>
                <button className="btn btn-radius btn-sekunder">
                  Selengkapnya
                </button>
              </Link>
            </div>
          </div>
          <div className="display-flex mobile-flex">
            { this.onContent(aktivitas1, 'title', 'description') }
            { this.onContent(aktivitas2, 'title', 'description') }
            { this.onContent(aktivitas3, 'title', 'description') }
          </div>

          <div className="padding-30px"></div>

          <div className="title-link">
            <div className="col-1">
            <div className="t-l-tittle">Fasilitas</div>
              <div className="app-line"></div>
            </div>
            <div className="col-2">
            <Link to={'/fasilitas'}>
              <button className="btn btn-radius btn-sekunder">
                Selengkapnya
              </button>
            </Link>
            </div>
          </div>
          <div className="display-flex mobile-flex">
            { this.onContent(fasilitas1, 'title', 'description') }
            { this.onContent(fasilitas2, 'title', 'description') }
            { this.onContent(fasilitas3, 'title', 'description') }
          </div>

          <div className="padding-30px"></div>

          <div className="title-link">
            <div className="col-1">
              <div className="t-l-tittle">Program</div>
              <div className="app-line"></div>
            </div>
            <div className="col-2">
            <Link to={'/program'}>
              <button className="btn btn-radius btn-sekunder">
                Selengkapnya
              </button>
            </Link>
            </div>
          </div>
          <div className="display-flex mobile-flex">
            { this.onContent(aktivitas1, 'title', 'description') }
            { this.onContent(aktivitas2, 'title', 'description') }
            { this.onContent(aktivitas3, 'title', 'description') }
          </div>

          <div className="padding-30px"></div>

          <div className="margin-15px image image-radius background-dark-grey" style={{height: '350px'}}>
            <div className="txt-site txt-white txt-center txt-top">GOOGLE MAP</div>
          </div>

          <div className="padding-10px"></div>

        </div>
      </div>
    )
  }
}

export default Pages


