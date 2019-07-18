import React, { Component } from 'react'

// acara
import acara1 from '../../assets/img/acara/1.jpg'
import acara2 from '../../assets/img/acara/2.jpg'
import acara3 from '../../assets/img/acara/3.jpg'
import acara4 from '../../assets/img/acara/4.jpg'
import acara5 from '../../assets/img/acara/5.jpg'
import acara6 from '../../assets/img/acara/6.jpg'
import acara7 from '../../assets/img/acara/7.jpg'
import acara8 from '../../assets/img/acara/8.jpg'
import acara9 from '../../assets/img/acara/9.jpg'
import acara10 from '../../assets/img/acara/10.jpg'
import acara11 from '../../assets/img/acara/11.jpg'
import acara12 from '../../assets/img/acara/12.jpg'
import acara13 from '../../assets/img/acara/13.jpg'

class Pages extends Component {
  constructor () {
    super()
    this.state = {}
  }

  onContent = (val, title, desc) => {
    // var dt = []
    // for (let index = 0; index < val; index++) {
    //   var image = '../../assets/img/acara/'+(index+1)+'.jpg'
    //   console.log(image)
    //   dt.push(
    //     <div className="df-card card" key={index}>
    //       <div
    //         style={{ backgroundImage: 'url("../../assets/img/acara/'+image+'")' }}
    //         className="image image-full background-dark-grey"></div>
    //       <div className="float padding-15px">
    //         <h3 className="txt-site txt-main">Title</h3>
    //         <p className="txt-site txt-11 txt-primary">Description</p>
    //       </div>
    //     </div>
    //   )
    // }
    return(
      <div className="df-card card no-border margin-bottom-15px">
          <div className="image background-white">
            <img className="img image-radius" src={val} />
          </div>
          <div className="float padding-15px">
            <h3 className="txt-site txt-main">{title}</h3>
            <p className="txt-site txt-11 txt-primary">{desc}</p>
          </div>
        </div>
    )
  }

  render() {
    return (
      <div className="main">
        
        <div className="padding-15px"></div>

        <div className="width width-center width-500px">
          <h1 className="txt-site txt-center txt-main margin-top-15px margin-bottom-5px">Acara</h1>
          <div className="app-line center"></div>
          <p className="txt-site txt-center txt-16 txt-primary margin-top-15px">
            Acara yang sudah kami selenggarakan.
          </p>
        </div>

        <div className="padding-10px"></div>

        <div className="padding-15px app-mobile-none-padding">
          <div className="display-masonry">
            { this.onContent(acara1, 'title', 'description') }
            { this.onContent(acara2, 'title', 'description') }
            { this.onContent(acara3, 'title', 'description') }
            { this.onContent(acara4, 'title', 'description') }
            { this.onContent(acara5, 'title', 'description') }
            { this.onContent(acara6, 'title', 'description') }
            { this.onContent(acara7, 'title', 'description') }
            { this.onContent(acara8, 'title', 'description') }
            { this.onContent(acara9, 'title', 'description') }
            { this.onContent(acara10, 'title', 'description') }
            { this.onContent(acara11, 'title', 'description') }
            { this.onContent(acara12, 'title', 'description') }
            { this.onContent(acara13, 'title', 'description') }
          </div>
        </div>

        <div className="padding-15px"></div>
      </div>
    )
  }
}

export default Pages