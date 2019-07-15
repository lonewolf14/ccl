import React, { Component } from 'react'

class Pages extends Component {
  constructor () {
    super()
    this.state = {}
  }

  onCircle = (val) => {
    var dt = []
    for (let index = 0; index < val; index++) {
      dt.push(
        <div className="margin-left-5px margin-right-5px image image-150px image-circle background-dark-grey"></div>
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
        <div className="banner"></div>
        <div className="main padding-top-30px padding-bottom-30px">

        <div className="padding-15px"></div>

          <div className="width width-center">
            <h1 className="txt-site txt-center txt-main">Acara</h1>
            <p className="txt-site txt-center txt-12 txt-primary">Description</p>
          </div>

          <div className="padding-15px"></div>

          <div className="display-flex">
            { this.onCircle(6) }
          </div>

          {/* <div className="grid grid-2x gap-30px">
            <div className="col-1">
              <div className="image image-middle image-radius background-dark-grey"></div>
            </div>
            <div className="col-2">
              <h1 className="txt-site txt-main margin-bottom-15px">Aktifitas</h1>
              <p className="txt-site txt-14 txt-primary margin-bottom-15px">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
              </p>
              <p className="txt-site txt-14 txt-primary margin-bottom-15px">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
              </p>
              <div className="content-right">
                <button className="btn btn-sekunder btn-radius">
                  Lihat Selengkapnya
                </button>
              </div>
            </div>
          </div> */}

          <div className="padding-30px"></div>

          <div className="title-link">
            <div className="col-1 t-l-tittle">
              Aktifitas
            </div>
            <div className="col-2 t-l-link">
              <a href="#">Selanjutnya</a>
            </div>
          </div>
          <div className="display-flex">
            { this.onContent(4) }
          </div>

          <div className="padding-30px"></div>

          <div className="title-link">
            <div className="col-1 t-l-tittle">
              Fasilitas
            </div>
            <div className="col-2 t-l-link">
              <a href="#">Selanjutnya</a>
            </div>
          </div>
          <div className="display-flex">
            { this.onContent(4) }
          </div>

          <div className="padding-30px"></div>

          <div className="title-link">
            <div className="col-1 t-l-tittle">
              Acara
            </div>
            <div className="col-2 t-l-link">
              <a href="#">Selanjutnya</a>
            </div>
          </div>
          <div className="display-flex">
            { this.onContent(4) }
          </div>

          <div className="padding-30px"></div>

          <div className="title-link">
            <div className="col-1 t-l-tittle">
              Program
            </div>
            <div className="col-2 t-l-link">
              <a href="#">Selanjutnya</a>
            </div>
          </div>
          <div className="display-flex">
            { this.onContent(4) }
          </div>

          <div className="padding-30px"></div>

          <div className="title-link">
            <div className="col-1 t-l-tittle">
              Penghargaan
            </div>
            <div className="col-2 t-l-link">
              <a href="#">Selanjutnya</a>
            </div>
          </div>
          <div className="display-flex">
            { this.onContent(4) }
          </div>

          <div className="padding-30px"></div>

        </div>
      </div>
    )
  }
}

export default Pages
