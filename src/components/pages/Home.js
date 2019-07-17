import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

class Pages extends Component {
  constructor () {
    super()
    this.state = {}
  }

  onCircle = (val) => {
    var dt = []
    for (let index = 0; index < val; index++) {
      dt.push(
        <div className="df-card">
          <div className="margin-left-5px margin-right-5px image image-160px image-circle background-dark-grey"></div>
        </div>
      )
    }
    return(
      dt
    )
  }

  onContent = (val) => {
    var dt = []
    for (let index = 0; index < val; index++) {
      dt.push(
        <div className="df-card card">
          <div className="image image-middle background-dark-grey"></div>
          <div className="padding-15px">
            <h3 className="txt-site txt-main">Title</h3>
            <p className="txt-site txt-11 txt-primary">Description</p>
          </div>
        </div>
      )
    }
    return(
      dt
    )
  }

  render() {
    return (
      <div>
        
        <div className="padding-15px"></div>

        <div className="banner">
          <Carousel 
            infiniteLoop={true} 
            showThumbs={false} 
            centerMode={true}
            autoPlay={true}
            showIndicators={true}
            showStatus={false}
            >
                <div>
                    <img src="https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218-1080x608.jpg" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://arbordayblog.org/wp-content/uploads/2017/11/quaking-aspen-iStock-530888283-1024x576.jpg" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://arbordayblog.org/wp-content/uploads/2017/10/silv-maple-iStock-91723236-1024x576.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
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
            { this.onCircle(5) }
            <Link to={'/acara'}>
              <div className="df-card">
                <div className="margin-left-5px margin-right-5px image image-160px image-circle background-grey border-all">
                  <i className="txt-site txt-big txt-middle txt-primary fa fa-2x fa-ellipsis-h"></i>
                </div>
              </div>
            </Link>
          </div>

          <div className="padding-30px"></div>

          <div className="grid grid-2x gap-30px grid-mobile-none">
            <div className="col-1">
              <div className="grid grid-2x gap-15px">
                <div className="col-1">
                  <div className="margin-15px image image-full image-radius background-dark-grey"></div>
                </div>
                <div className="col-2">
                  <div className="margin-15px image image-full image-radius background-dark-grey"></div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h1 className="txt-site txt-main margin-top-15px margin-bottom-5px">Penghargaan</h1>
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

          <div className="margin-15px image image-radius background-dark-grey" style={{height: '350px'}}>
            <div className="txt-site txt-white txt-center txt-small txt-top">
              <i className="fa fa-lg fa-play" />
            </div>
          </div>

          <div className="padding-30px"></div>

          <div className="title-link">
            <div className="col-1">
              <div className="t-l-tittle">Aktifitas</div>
              <div className="app-line"></div>
            </div>
            <div className="col-2 t-l-link">
              <Link to={'/aktifitas'}>Selengkapnya</Link>
            </div>
          </div>
          <div className="display-flex mobile-flex">
            { this.onContent(3) }
          </div>

          <div className="padding-30px"></div>

          <div className="title-link">
            <div className="col-1">
            <div className="t-l-tittle">Fasilitas</div>
              <div className="app-line"></div>
            </div>
            <div className="col-2 t-l-link">
            <Link to={'/fasilitas'}>Selengkapnya</Link>
            </div>
          </div>
          <div className="display-flex mobile-flex">
            { this.onContent(3) }
          </div>

          <div className="padding-30px"></div>

          <div className="title-link">
            <div className="col-1">
              <div className="t-l-tittle">Program</div>
              <div className="app-line"></div>
            </div>
            <div className="col-2 t-l-link">
            <Link to={'/program'}>Selengkapnya</Link>
            </div>
          </div>
          <div className="display-flex mobile-flex">
            { this.onContent(3) }
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

