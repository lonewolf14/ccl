import React, { Component } from 'react'
import Img from 'react-image'

import program1 from '../../assets/img/program/1.jpeg'
import program2 from '../../assets/img/program/2.jpg'
import program3 from '../../assets/img/program/3.jpg'
import program4 from '../../assets/img/program/4.jpg'

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
            Program yang sudah kami lakukan
          </p>
        </div>

        <div className="padding-15px"></div>



        <div>

          <div className="grid grid-2x gap-30px grid-mobile-none margin-15px">
            <div className="col-1">
              <div className="image image-middle image-radius background-grey">
                      <Img 
                        src={program1}
                        className="img2"
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
            </div>
            <div className="col-2">
              <h1 className="txt-site txt-main txt-font-nova margin-top-15px margin-bottom-5px">
                Ngamumule Budaya
              </h1>
              <div className="app-line"></div>
              <p className="txt-site txt-14 txt-primary txt-font-helvetica margin-15px">
                Salah satu program komunitas yaitu melestarikan kembali budaya sunda yang hilang atau terlupakan, menyasar anak muda dan generasi muda melalui penyadaran kebudayaan dan pemberdayaan masyarakat melalui jalur kesenian.
              </p>
            </div>
          </div>

          <div className="padding-15px"></div>

          <div className="grid grid-2x gap-30px grid-mobile-none margin-15px">
            <div className="col-1">
              <h1 className="txt-site txt-main txt-font-nova margin-top-15px margin-bottom-5px">
                Kesenian Kolektif
              </h1>
              <div className="app-line"></div>
              <p className="txt-site txt-14 txt-primary txt-font-helvetica margin-15px">
                Keseluruhan kesenian adalah hasil kolektif, dari mulai pendanaan, konsep, dan lain sebagainya, dari kegiatan ini diharapkan seluruh anggota masyarakat dan anggota komunitas dapat terangsang daya kreatifitas dan imajinasinya.
              </p>
            </div>
            <div className="col-2">
              <div className="image image-middle image-radius background-grey">
                      <Img 
                        src={program2}
                        className="img2"
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
            </div>
          </div>

          <div className="padding-15px"></div>

          <div className="grid grid-2x gap-30px grid-mobile-none margin-15px">
            <div className="col-1">
              <div className="image image-middle image-radius background-grey">
                      <Img 
                        src={program3}
                        className="img2"
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
            </div>
            <div className="col-2">
              <h1 className="txt-site txt-main txt-font-nova margin-top-15px margin-bottom-5px">
                Kesadaran Akan Lingkungan
              </h1>
              <div className="app-line"></div>
              <p className="txt-site txt-14 txt-primary txt-font-helvetica margin-15px">
                Selain bergerak di bidang budaya melalui jalur kesenian teater dan lainnya, komunitas juga memberikan edukasi masalah lingkungan.
              </p>
            </div>
          </div>

          <div className="padding-15px"></div>

          <div className="grid grid-2x gap-30px grid-mobile-none margin-15px">
            <div className="col-1">
              <h1 className="txt-site txt-main txt-font-nova margin-top-15px margin-bottom-5px">
                Belajar Bersama Maestro (BBM)
              </h1>
              <div className="app-line"></div>
              <p className="txt-site txt-14 txt-primary txt-font-helvetica margin-15px">
                KEMDIKBUD memiliki program pembelajaran kesenian seluruh Indonesia bersama pakar-pakar atau seniman, pada komunitas CCL, siswa BBM memiliki kesempatan belajar teater dan sastra.
              </p>
            </div>
            <div className="col-2">
              <div className="image image-middle image-radius background-grey">
                      <Img 
                        src={program4}
                        className="img2"
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
            </div>
          </div>

        </div>

        <div className="padding-15px"></div>
      </div>
    )
  }
}

export default Pages