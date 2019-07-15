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
      <div className="main">
        
        <div className="padding-15px"></div>

        <div className="width width-center width-500px">
          <h1 className="txt-site txt-center txt-main margin-15px">Program</h1>
          <p className="txt-site txt-center txt-12 txt-primary">
          Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
          </p>
        </div>

        <div className="padding-10px"></div>

        <div className="padding-15px app-mobile-none-padding">
          <div className="display-flex">
            { this.onContent(12) }
          </div>
        </div>

        <div className="padding-15px"></div>
      </div>
    )
  }
}

export default Pages