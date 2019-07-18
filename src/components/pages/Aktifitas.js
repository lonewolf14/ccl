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
import aktivitas18 from '../../assets/img/aktivitas/18.jpg'

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
          <div 
            style={{backgroundImage: 'url('+val+')'}}
            className="image image-full background-dark-grey"></div>
          {info}
      </div>
    )
  }

  render() {
    return (
      <div className="main">
        
        <div className="padding-15px"></div>

        <div className="width width-center width-500px">
        <h1 className="txt-site txt-center txt-main txt-font-nova margin-top-15px margin-bottom-5px">Aktifitas</h1>
          <div className="app-line center"></div>
          <p className="txt-site txt-center txt-14 txt-primary txt-font-helvetica margin-top-15px">
            Aktifitas yang dilakukan.
          </p>
        </div>

        <div className="padding-15px"></div>

        <div>

          <div className="grid grid-2x gap-30px grid-mobile-none margin-15px aktifity-padding">
            <div className="col-1">
              <div 
                style={{backgroundImage: 'url('+aktivitas2+')'}}
                className="image image-middle image-radius background-dark-grey"></div>
            </div>
            <div className="col-2">
              <h1 className="txt-site txt-main txt-font-nova margin-top-15px margin-bottom-6px">
                Qurban
              </h1>
              <div className="app-line"></div>
              <p className="txt-site txt-14 txt-primary txt-font-helvetica margin-15px">
                Kegiatan qurban diselenggarakan tiap tahun di komunitas Celah-Celah langit, pembagian zakat pun tidak luput dari rangkaian kegiatan.
              </p>
              <p className="txt-site txt-14 txt-primary txt-font-helvetica margin-15px">
                Tidak hanya qurban saja, komunitas CCL menyediakan lahan tempat pertunjukan secara Cuma-Cuma untuk setiap aktifitas yang bermanfaat bagi warga sekitar.
              </p>
            </div>
          </div>

          <div className="padding-15px"></div>

          <div className="display-flex">
            { this.onContent(aktivitas3, '', '') }
            { this.onContent(aktivitas5, '', '') }
            { this.onContent(aktivitas8, '', '') }
          </div>

          <div className="padding-15px"></div>

          <div className="grid grid-2x gap-30px grid-mobile-none margin-15px aktifity-padding">
            <div className="col-1">
              <div 
                style={{backgroundImage: 'url('+aktivitas4+')'}}
                className="image image-middle image-radius background-dark-grey"></div>
            </div>
            <div className="col-2">
              <h1 className="txt-site txt-main txt-font-nova margin-top-15px margin-bottom-6px">
                Teater Kolektif
              </h1>
              <div className="app-line"></div>
              <p className="txt-site txt-14 txt-primary txt-font-helvetica margin-15px">
                Selain memiliki anggota tetap sebagai actorteater, komunitas CCL juga seringkali menggelar pementasan teater kjolektif yang melibatkan warga sekitar dalam proses kreatif dan hasil akhirnya.
              </p>
            </div>
          </div>

          <div className="padding-15px"></div>

          <div className="display-flex">
            { this.onContent(aktivitas1, 'Monolog', 'Baik latihan maupun pementasan monolog ada di komunitas CCL.') }
            { this.onContent(aktivitas6, 'Kolaborasi Musik', 'Komunitas CCL selalu mengadakan kolaborasi budaya dengan negara lain.') }
            { this.onContent(aktivitas7, 'Musik modern dan tradisi', 'Seni musik juga dilatih dan dipertontonkan disini.') }
          </div>

          <div className="padding-15px"></div>

          <div className="grid grid-2x gap-30px grid-mobile-none margin-15px aktifity-padding">
            <div className="col-1">
              <div 
                style={{backgroundImage: 'url('+aktivitas2+')'}}
                className="image image-middle image-radius background-dark-grey"></div>
            </div>
            <div className="col-2">
              <h1 className="txt-site txt-main txt-font-nova margin-top-15px margin-bottom-6px">
                Pencak Silat
              </h1>
              <div className="app-line"></div>
              <p className="txt-site txt-14 txt-primary txt-font-helvetica margin-15px">
                Pencak silat merupakan bagian dari latihan teater, tidak hanya sebagai sarana latihan fisik teater.
              </p>
              <p className="txt-site txt-14 txt-primary txt-font-helvetica margin-15px">
                Pencak silat juga merupakan salah satu kegiatan unggulan yang ada di komunitas CCL.
              </p>
            </div>
          </div>

          <div className="padding-15px"></div>

          <div className="display-flex">
            { this.onContent(aktivitas9, 'Charity', 'Kegiatan amal yang diselenggarakan oleh komunitas dan warga sekitar untuk menggalang dana korban bencana dan sumbangan peduli pendidikan.') }
            { this.onContent(aktivitas10, 'Perkusi', 'Perkusi diselenggarakan untuk mengisi acara di komunitas CCL atau mengisi acara diluar CCL.') }
            { this.onContent(aktivitas11, 'Sastra', 'Puisi serta sastra-sastra lainnyajugadilatih dadn dipertontonkan disini.') }
          </div>

          <div className="padding-15px"></div>

          <div className="grid grid-2x gap-30px grid-mobile-none margin-15px aktifity-padding">
            <div className="col-1">
              <div 
                style={{backgroundImage: 'url('+aktivitas16+')'}}
                className="image image-middle image-radius background-dark-grey"></div>
              
            </div>
            <div className="col-2">
              <h1 className="txt-site txt-main txt-font-nova margin-top-15px margin-bottom-6px">
                Gathering
              </h1>
              <div className="app-line"></div>
              <p className="txt-site txt-14 txt-primary txt-font-helvetica margin-15px">
                Komunitas ini sering mengadakan silaturahmi dengan alumni anggota, warga sekitar, dan melakukan makan makan bahkan pengajian, buka bersama dan lain sebagainya.
              </p>
            </div>
          </div>

          <div className="padding-15px"></div>

          <div className="display-flex">
            { this.onContent(aktivitas13, '', '') }
            { this.onContent(aktivitas14, '', '') }
            { this.onContent(aktivitas15, '', '') }
          </div>

          <div className="padding-15px"></div>

          <div className="grid grid-2x gap-30px grid-mobile-none margin-15px aktifity-padding">
            <div className="col-1">
              <div 
                style={{backgroundImage: 'url('+aktivitas12+')'}}
                className="image image-middle image-radius background-dark-grey"></div>
            </div>
            <div className="col-2">
              <h1 className="txt-site txt-main txt-font-nova margin-top-15px margin-bottom-6px">
                Seni Tari
              </h1>
              <div className="app-line"></div>
              <p className="txt-site txt-14 txt-primary txt-font-helvetica margin-15px">
                Seni tari juga dilatih dan diselenggarakan disini, tidak hanya anggotanya saja, tamu dari sanggar lainnya pun bisa berlatih dan tampil bersama disini.
              </p>
            </div>
          </div>

        </div>

        <div className="padding-15px"></div>
      </div>
    )
  }
}

export default Pages