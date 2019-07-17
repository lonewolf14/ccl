import React, { Component } from 'react'

class Pages extends Component {

  constructor () {
    super()
    this.state = {}
  }

  onContent = (val) => {
    var dt = []
    for (let index = 0; index < val; index++) {
      dt.push(
        <div className="df-card card">
          <div className="grid grid-2x gap-30px">
            <div className="col-1">
              <div className="image image-full background-dark-grey"></div>
            </div>
            <div className="col-2">
              <h3 className="txt-site txt-main">Title</h3>
              <p className="txt-site txt-11 txt-primary">
              Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
              </p>
            </div>
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
      <div className="main">
        
        <div className="padding-15px"></div>

        <div className="width width-center width-500px">
          <h1 className="txt-site txt-center txt-main margin-top-15px margin-bottom-5px">
            Penghargaan
          </h1>
          <div className="app-line center"></div>
          <p className="txt-site txt-center txt-12 txt-primary margin-top-15px">
            Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
          </p>
        </div>

        <div className="padding-10px"></div>

        <div className="padding-15px app-mobile-none-padding">
          
          <div className="grid grid-2x gap-30px grid-mobile-none margin-15px">
            <div className="col-1">
              <div className="image image-middle image-radius background-dark-grey"></div>
            </div>
            <div className="col-2">
              <h1 className="txt-site txt-main margin-15px">
                Title
              </h1>
              <p className="txt-site txt-14 txt-primary margin-bottom-15px">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
              </p>
              <p className="txt-site txt-14 txt-primary margin-bottom-15px">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
              </p>
            </div>
          </div>

          <div className="padding-15px"></div>

          <div className="grid grid-2x gap-30px grid-mobile-none margin-15px">
            <div className="col-1">
              <h1 className="txt-site txt-main margin-15px">
                Title
              </h1>
              <p className="txt-site txt-14 txt-primary margin-bottom-15px">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
              </p>
              <p className="txt-site txt-14 txt-primary margin-bottom-15px">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
              </p>
            </div>
            <div className="col-2">
              <div className="image image-middle image-radius background-dark-grey"></div>
            </div>
          </div>

          <div className="padding-15px"></div>

          <div className="grid grid-2x gap-30px grid-mobile-none margin-15px">
            <div className="col-1">
              <div className="image image-middle image-radius background-dark-grey"></div>
            </div>
            <div className="col-2">
              <h1 className="txt-site txt-main margin-15px">
                Title
              </h1>
              <p className="txt-site txt-14 txt-primary margin-bottom-15px">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
              </p>
              <p className="txt-site txt-14 txt-primary margin-bottom-15px">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
              </p>
            </div>
          </div>

          <div className="padding-15px"></div>

          <div className="grid grid-2x gap-30px grid-mobile-none margin-15px">
            <div className="col-1">
              <h1 className="txt-site txt-main margin-15px">
                Title
              </h1>
              <p className="txt-site txt-14 txt-primary margin-bottom-15px">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
              </p>
              <p className="txt-site txt-14 txt-primary margin-bottom-15px">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
              </p>
            </div>
            <div className="col-2">
              <div className="image image-middle image-radius background-dark-grey"></div>
            </div>
          </div>

        </div>

        <div className="padding-15px"></div>

      </div>
    )
  }
}

export default Pages