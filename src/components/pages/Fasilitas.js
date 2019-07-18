import React, { Component } from 'react'
import Img from 'react-image'

// fasilitas
import fasilitas1 from '../../assets/img/fasilitas/1.jpg'
import fasilitas2 from '../../assets/img/fasilitas/2.JPG'
import fasilitas3 from '../../assets/img/fasilitas/3.JPG'
import fasilitas4 from '../../assets/img/fasilitas/4.JPG'
import fasilitas5 from '../../assets/img/fasilitas/5.JPG'
import fasilitas6 from '../../assets/img/fasilitas/6.JPG'
import fasilitas7 from '../../assets/img/fasilitas/7.JPG'
import fasilitas8 from '../../assets/img/fasilitas/8.JPG'
import fasilitas9 from '../../assets/img/fasilitas/9.JPG'
import fasilitas10 from '../../assets/img/fasilitas/10.JPG'
import fasilitas11 from '../../assets/img/fasilitas/11.JPG'
import fasilitas12 from '../../assets/img/fasilitas/12.JPG'
import fasilitas13 from '../../assets/img/fasilitas/13.JPG'
import fasilitas14 from '../../assets/img/fasilitas/14.JPG'
import fasilitas15 from '../../assets/img/fasilitas/15.JPG'
import fasilitas16 from '../../assets/img/fasilitas/16.JPG'
import fasilitas17 from '../../assets/img/fasilitas/17.JPG'
import fasilitas18 from '../../assets/img/fasilitas/18.JPG'
import fasilitas19 from '../../assets/img/fasilitas/19.JPG'

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
    if (title !== '' || desc !== '') { 
      var info = <div className="padding-15px">
            <h3 className="txt-site txt-main txt-font-nova">{ title }</h3>
            <p className="txt-site txt-12 txt-primary txt-font-helvetica">{ desc }</p>
          </div>
    } else {
      var info = <div></div>
    }
    return(
      <div className="df-card card no-hover">
          <div className="image image-full background-grey">
              <Img 
                  src={val}
                  className="img2 img-height"
                  loader={
                    <div className="icn">
                      <i className="color-green post-center fa fa-2x fa-circle-notch fa-spin" />
                    </div>
                  }
                  unloader={
                    <div className="icn">
                      <i className="color-green post-center fa fa-2x fa-times" />
                    </div>
                  } />
          </div>
          {info}
      </div>
    )
  }

  render() {
    return (
      <div className="main">
        
        <div className="padding-15px"></div>

        <div className="width width-center width-500px">
        <h1 className="txt-site txt-center txt-main txt-font-nova margin-top-15px margin-bottom-5px">
          Fasilitas
        </h1>
          <div className="app-line center"></div>
          <p className="txt-site txt-center txt-14 txt-primary txt-font-helvetica margin-top-15px">
            Fasilitas yang disediakan
          </p>
        </div>

        <div className="padding-15px"></div>

        <div>
          <div className="display-flex">
            { this.onContent(fasilitas1, 'Seperangkat efek dan sound sistem untuk kepentingan pementasan', '') }
            { this.onContent(fasilitas2, 'Lighting untung pementasan malam hari', '') }
            { this.onContent(fasilitas3, 'Sound controlling', '') }
            { this.onContent(fasilitas4, 'Backstage atau saung untuk kepentingan makeup artist dan istirahat anggota', '') }
            { this.onContent(fasilitas8, '', '') }
            { this.onContent(fasilitas15, 'Bangku tribun penonton berkapasitas 400 orang', '') }
            { this.onContent(fasilitas7, 'Tribun penonton', '') }
            { this.onContent(fasilitas6, 'Perpustakaan kecil', '') }
            { this.onContent(fasilitas12, '', '') }
            {/* this.onContent(fasilitas9, 'title', 'description') */}
            { this.onContent(fasilitas10, 'Gazebo untuk keperluan brifing dan diskusi naskah', '') }
            {/* this.onContent(fasilitas11, 'title', 'description') */}
            { this.onContent(fasilitas13, 'Parkiran motor', '') }
            {/* this.onContent(fasilitas14, 'title', 'description') */}
            {/* this.onContent(fasilitas16, 'title', 'description') */}
            {/* this.onContent(fasilitas17, 'title', 'description') */}
            { this.onContent(fasilitas18, 'Properti pementasan', '') }
            {/* this.onContent(fasilitas19, 'title', 'description') */}
          </div>
        </div>

        <div className="padding-15px"></div>
      </div>
    )
  }
}

export default Pages