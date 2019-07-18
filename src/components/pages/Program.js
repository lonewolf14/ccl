import React, { Component } from 'react'

import program1 from '../../assets/img/program/1.JPG'
import program2 from '../../assets/img/program/2.jpg'
import program3 from '../../assets/img/program/3.jpg'

class Pages extends Component {
  constructor () {
    super()
    this.state = {}
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
            className="image image-full background-dark-grey"></div>
          <div className="padding-15px">
            <h3 className="txt-site txt-main txt-font-nova">{ title }</h3>
            <p className="txt-site txt-12 txt-primary txt-font-helvetica">{ desc }</p>
          </div>
      </div>
    )
  }

  render() {
    return (
      <div className="main">
        
        <div className="padding-15px"></div>

        <div className="width width-center width-500px">
          <h1 className="txt-site txt-center txt-main txt-font-nova margin-top-15px margin-bottom-5px">
            Program
          </h1>
          <div className="app-line center"></div>
          <p className="txt-site txt-center txt-14 txt-primary txt-font-helvetica margin-top-15px">
          Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
          </p>
        </div>

        <div className="padding-15px"></div>

        <div>
          <div className="display-flex">
            { this.onContent(program1, 'title', 'description') }
            { this.onContent(program2, 'title', 'description') }
            { this.onContent(program3, 'title', 'description') }
          </div>
        </div>

        <div className="padding-15px"></div>
      </div>
    )
  }
}

export default Pages