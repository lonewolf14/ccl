import React, { Component } from 'react'

class Pages extends Component {
  render() {
    return (
      <div className="main">

        <div className="padding-15px"></div>

        <div className="width width-center width-500px">
          <h1 className="txt-site txt-center txt-main margin-top-15px margin-bottom-5px">
            Tentang Kami
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

          <div className="padding-top-30px padding-bottom-30px">
            <div className="margin-15px image image-radius background-dark-grey" style={{height: '350px'}}>
              <div className="txt-site txt-white txt-center txt-top">GOOGLE MAP</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Pages