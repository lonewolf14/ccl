import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import Img from 'react-image'

// banner
import banner1 from '../../assets/img/banner/1.JPG'
import banner2 from '../../assets/img/banner/2.JPG'
import banner3 from '../../assets/img/banner/3.jpg'

class Pages extends Component {
  render() {
    return (
      <div className="main">

        <div className="padding-15px"></div>

        <div className="width width-center width-500px">
          <h1 className="txt-site txt-center txt-main txt-font-nova margin-top-15px margin-bottom-5px">
            Tentang Kami
          </h1>
          <div className="app-line center"></div>
          <p className="txt-site txt-center txt-14 txt-primary txt-font-helvetica margin-top-15px">
            Tentang Kami
          </p>
        </div>

        <div className="padding-15px"></div>

        <div>
          
          <div className="grid grid-2x gap-30px grid-mobile-none margin-15px">
            <div className="col-1">
              <div className="image image-middle image-radius background-grey">
                      <Img 
                        src={banner1}
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
              <h1 className="txt-site txt-main txt-font-nova margin-top-15px margin-bottom-6px">
                Celah-Celah Langit
              </h1>
              <div className="app-line"></div>
              <p className="txt-site txt-14 txt-primary txt-font-helvetica margin-15px">
                Komunitas Celah-Celah Langit (CCL) merupakan komunitas yang bergerak di bidang kesenian, khususnya teater.  
              </p>
              <p className="txt-site txt-14 txt-primary txt-font-helvetica margin-bottom-15px">
                Selain teater juga ada yang digiati dalam komunitas yaitu sastra, musik, lukis dan pencak silat.
              </p>
              <p className="txt-site txt-14 txt-primary txt-font-helvetica margin-bottom-15px">
                Komunitas ini berlokasi di Kota Bandung tepatnya dibelakang Terminal Ledeng, Bandung Utara.
              </p>
            </div>
          </div>

          <div className="padding-15px"></div>

          <div className="grid grid-2x gap-30px grid-mobile-none margin-15px">
            <div className="col-1">
              <h1 className="txt-site txt-main txt-font-nova margin-top-15px margin-bottom-6px">
                Celah-Celah Langit
              </h1>
              <div className="app-line"></div>
              <p className="txt-site txt-14 txt-primary txt-font-helvetica margin-15px">
                Komunitas CCL adalah komunitas yang Kolektif, gotong royong dan “sauyunan”.
              </p>
              <p className="txt-site txt-14 txt-primary txt-font-helvetica margin-15px">
                Komunitas CCL adalah komunitas nirlaba, tanpa ada sepeserpun benefit yang dihasilkan. 
              </p>
              <p className="txt-site txt-14 txt-primary txt-font-helvetica margin-bottom-15px">
                Namun, dengan semangat, kerja keras dan kekompakan para anggota dan warga sekitar membuat komunitas ini bertahan dari tahun 1980 an hingga kini.
              </p>
            </div>
            <div className="col-2">
              <div style={{borderRadius: '10px', overflow: 'hidden'}}>
                <Carousel 
                  infiniteLoop={true} 
                  showThumbs={false} 
                  centerMode={false}
                  autoPlay={false}
                  showIndicators={true}
                  showStatus={false}
                  >
                  <div 
                    className="margin-15px" 
                    style={{height: '250px'}}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZE2TJBY_ceE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div 
                    className="margin-15px" 
                    style={{height: '250px'}}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5-bLTu260Ho" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div 
                    className="margin-15px" 
                    style={{height: '250px'}}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/DyrPzbYUd7c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>

          <div className="padding-top-30px padding-bottom-5px">
            <div className="title-link">
              <div className="col-1">
                <div className="t-l-tittle txt-site txt-font-nova">Alamat Pada G-MAP</div>
                <div className="app-line"></div>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
          <div 
            className="margin-15px background-dark-grey" 
            style={{height: '350px', borderRadius: '10px', overflow: 'hidden'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.6283545597973!2d107.59531516412997!3d-6.859806126678365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7e7e3bed3b7%3A0x6ce062295d969dee!2sKomunitas+CCL+Bandung!5e0!3m2!1sen!2sid!4v1563463848982!5m2!1sen!2sid" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
          </div>
          
          <div className="padding-15px"></div>

        </div>
      </div>
    )
  }
}

export default Pages