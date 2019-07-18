import React, { Component } from 'react'

// aktivitas
import aktivitas1 from '../../assets/img/aktivitas/1.jpg'
import aktivitas2 from '../../assets/img/aktivitas/2.jpg'
import aktivitas3 from '../../assets/img/aktivitas/3.jpg'
import aktivitas4 from '../../assets/img/aktivitas/4.jpg'
import aktivitas5 from '../../assets/img/aktivitas/5.jpg'
import aktivitas6 from '../../assets/img/aktivitas/6.jpg'
import aktivitas7 from '../../assets/img/aktivitas/7.jpg'
import aktivitas8 from '../../assets/img/aktivitas/8.jpg'
import aktivitas9 from '../../assets/img/aktivitas/9.jpg'
import aktivitas10 from '../../assets/img/aktivitas/10.jpg'
import aktivitas11 from '../../assets/img/aktivitas/11.jpg'
import aktivitas12 from '../../assets/img/aktivitas/12.jpg'
import aktivitas13 from '../../assets/img/aktivitas/13.jpg'
import aktivitas14 from '../../assets/img/aktivitas/14.jpg'
import aktivitas15 from '../../assets/img/aktivitas/15.jpg'
import aktivitas16 from '../../assets/img/aktivitas/16.jpg'
import aktivitas17 from '../../assets/img/aktivitas/17.jpg'

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
            <h3 className="txt-site txt-main">{ title }</h3>
            <p className="txt-site txt-11 txt-primary">{ desc }</p>
          </div>
      </div>
    )
  }

  render() {
    return (
      <div className="main">
        
        <div className="padding-15px"></div>

        <div className="width width-center width-500px">
        <h1 className="txt-site txt-center txt-main margin-top-15px margin-bottom-5px">Aktifitas</h1>
          <div className="app-line center"></div>
          <p className="txt-site txt-center txt-16 txt-primary margin-top-15px">
            Aktifitas yang dilakukan.
          </p>
        </div>

        <div className="padding-10px"></div>

        <div className="padding-15px app-mobile-none-padding">
          <div className="display-flex">
            { this.onContent(aktivitas1, 'title', 'description') }
            { this.onContent(aktivitas2, 'title', 'description') }
            { this.onContent(aktivitas3, 'title', 'description') }
            { this.onContent(aktivitas4, 'title', 'description') }
            { this.onContent(aktivitas5, 'title', 'description') }
            { this.onContent(aktivitas6, 'title', 'description') }
            { this.onContent(aktivitas7, 'title', 'description') }
            { this.onContent(aktivitas8, 'title', 'description') }
            { this.onContent(aktivitas9, 'title', 'description') }
            { this.onContent(aktivitas10, 'title', 'description') }
            { this.onContent(aktivitas11, 'title', 'description') }
            { this.onContent(aktivitas12, 'title', 'description') }
            { this.onContent(aktivitas13, 'title', 'description') }
            { this.onContent(aktivitas14, 'title', 'description') }
            { this.onContent(aktivitas15, 'title', 'description') }
            { this.onContent(aktivitas16, 'title', 'description') }
            { this.onContent(aktivitas17, 'title', 'description') }
          </div>
        </div>

        <div className="padding-15px"></div>
      </div>
    )
  }
}

export default Pages