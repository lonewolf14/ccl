import React, { Component } from 'react'
import Img from 'react-image'

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
import acara14 from '../../assets/img/acara/14.jpg'
import acara15 from '../../assets/img/acara/15.jpg'
import acara16 from '../../assets/img/acara/16.jpg'

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
    if (title !== '' || desc !== '') { 
      var info = <div className="float padding-15px">
            <h3 className="txt-site txt-main txt-font-nova">{title}</h3>
            <p className="txt-site txt-12 txt-font-helvetica txt-primary">{desc}</p>
          </div>
    } else {
      var info = <div></div>
    }

    return(
      <div className="df-card card no-border margin-bottom-15px">
          <div className="image background-white">
            <Img 
                  src={val}
                  className="img2 img-normal"
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
            Acara
          </h1>
          <div className="app-line center"></div>
          <p className="txt-site txt-center txt-14 txt-primary txt-font-helvetica margin-top-15px">
            Acara yang sudah kami selenggarakan.
          </p>
        </div>

        <div className="padding-20px"></div>

        <div>
          <div className="display-masonry">
            { this.onContent(acara1, 'Acara kolaborasi 2 band yang diselenggarakan oleh Event Organizer Rumah Kedua dan bertempat di CCL', '') }
            { this.onContent(acara2, 'Acara teater untuk memperingati hari air sedunia.', '') }
            { this.onContent(acara3, 'Teater tentang nasib petani di kota besar.', '') }
            { this.onContent(acara4, 'Acara Ngabuburit dan dakwah.', '') }
            { this.onContent(acara5, 'Acara amal gempa Lombok.', '') }
            { this.onContent(acara6, 'Karya tugas akhir ISBI Bandung yang diselenggarakan dan didukung oleh CCL', '') }
            {/* this.onContent(acara7, '', '') */}
            { this.onContent(acara8, 'Memperingati hari musik sedunia.', '') }
            { this.onContent(acara9, 'Acara Amal gempa banten dan lampung.', '') }
            { this.onContent(acara10, '', '') }
            { this.onContent(acara11, '', '') }
            { this.onContent(acara12, '', '') }
            { this.onContent(acara13, '', '') }
            { this.onContent(acara14, '', '') }
            { this.onContent(acara15, 'Kolaborasi dua kebudayaan Indonesia-Meksiko.', '') }
            { this.onContent(acara16, 'Acara “Santri” teater dari ke 12 provinsi terpilih.', '') }
          </div>
        </div>

        <div className="padding-15px"></div>
      </div>
    )
  }
}

export default Pages