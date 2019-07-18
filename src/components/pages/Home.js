import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'

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
import penghargaan1 from '../../assets/img/penghargaan/2.jpg'
import penghargaan2 from '../../assets/img/penghargaan/4.jpg'

// aktifitas
import aktivitas1 from '../../assets/img/aktivitas/1.jpg'
import aktivitas2 from '../../assets/img/aktivitas/18.jpg'
import aktivitas3 from '../../assets/img/aktivitas/7.jpg'

// fasilitas
import fasilitas1 from '../../assets/img/fasilitas/22.jpg'
import fasilitas2 from '../../assets/img/fasilitas/23.jpg'
import fasilitas3 from '../../assets/img/fasilitas/3.JPG'

// program
import program1 from '../../assets/img/program/1.JPG'
import program2 from '../../assets/img/program/2.jpg'
import program3 from '../../assets/img/program/3.jpg'

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
    var info = <div className="padding-15px">
            <h3 className="txt-site txt-main txt-font-nova">{ title }</h3>
            <p className="txt-site txt-12 txt-primary txt-font-helvetica">{ desc }</p>
          </div>
    return(
      <div className="df-card card no-hover">
          <div 
            style={{backgroundImage: 'url('+val+')'}}
            className="image image-middle background-dark-grey"></div>
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
        <div className="padding-top-30px padding-bottom-30px">

          <div className="padding-15px"></div>

          <div className="main-second">
            <div className="width width-center">
              <h1 className="txt-site txt-center txt-main txt-font-nova margin-bottom-5px">
                Acara
              </h1>
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
          </div>

          <div className="padding-30px"></div>

          <div className="main grid grid-2x gap-30px grid-mobile-none">
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
              <h1 className="txt-site txt-main txt-font-nova margin-top-15px margin-bottom-5px">
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

          <div className="main grid grid-2x gap-30px grid-mobile-none">
            <div className="col-1">
              <h1 className="txt-site txt-main txt-font-nova margin-top-15px margin-bottom-5px">
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
                    className="margin-15px" 
                    style={{height: '250px'}}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZE2TJBY_ceE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div 
                    className="margin-15px" 
                    style={{height: '250px'}}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5-bLTu260Ho" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div 
                    className="margin-15px" 
                    style={{height: '250px'}}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/DyrPzbYUd7c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>

          <div className="padding-30px"></div>

          <div className="main-second">
            <div className="title-link">
              <div className="col-1">
                <div className="t-l-tittle txt-site txt-font-nova">Aktifitas</div>
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
          </div>

          <div className="padding-30px"></div>

          <div className="main-second">
            <div className="title-link">
              <div className="col-1">
              <div className="t-l-tittle txt-site txt-font-nova">Fasilitas</div>
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
          </div>

          <div className="padding-30px"></div>

          <div className="main-second">
            <div className="title-link">
              <div className="col-1">
                <div className="t-l-tittle txt-site txt-font-nova">Program</div>
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
              { this.onContent(program1, 'title', 'description') }
              { this.onContent(program2, 'title', 'description') }
              { this.onContent(program3, 'title', 'description') }
            </div>
          </div>

          <div className="padding-30px"></div>

          <div className="main-second">
            <div className="title-link margin-bottom-10px">
              <div className="col-1">
                <div className="t-l-tittle txt-site txt-font-nova">Alamat Pada G-MAP</div>
                <div className="app-line"></div>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
          <div 
            className="main margin-15px background-dark-grey" 
            style={{height: '350px', borderRadius: '10px', overflow: 'hidden'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.6283545597973!2d107.59531516412997!3d-6.859806126678365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7e7e3bed3b7%3A0x6ce062295d969dee!2sKomunitas+CCL+Bandung!5e0!3m2!1sen!2sid!4v1563463848982!5m2!1sen!2sid" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
          </div>

          <div className="padding-10px"></div>

        </div>
      </div>
    )
  }
}

export default Pages


