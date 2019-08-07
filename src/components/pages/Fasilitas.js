import React, { Component } from 'react'
import Img from 'react-image'
import { Carousel } from 'react-responsive-carousel'

// fasilitas
import fasilitas1 from '../../assets/img/fasilitas/1.jpg'
import fasilitas2 from '../../assets/img/fasilitas/2.jpg'
import fasilitas3 from '../../assets/img/fasilitas/3.jpg'
import fasilitas4 from '../../assets/img/fasilitas/4.jpg'
import fasilitas5 from '../../assets/img/fasilitas/5.jpg'
import fasilitas6 from '../../assets/img/fasilitas/6.jpg'
import fasilitas7 from '../../assets/img/fasilitas/7.jpg'
import fasilitas8 from '../../assets/img/fasilitas/8.jpg'
// import fasilitas9 from '../../assets/img/fasilitas/9.jpg'
import fasilitas10 from '../../assets/img/fasilitas/10.jpg'
// import fasilitas11 from '../../assets/img/fasilitas/11.jpg'
import fasilitas12 from '../../assets/img/fasilitas/12.jpg'
import fasilitas13 from '../../assets/img/fasilitas/13.jpg'
import fasilitas14 from '../../assets/img/fasilitas/14.jpg'
import fasilitas15 from '../../assets/img/fasilitas/15.jpg'
import fasilitas16 from '../../assets/img/fasilitas/16.jpg'
// import fasilitas17 from '../../assets/img/fasilitas/17.jpg'
// import fasilitas18 from '../../assets/img/fasilitas/18.jpg'
// import fasilitas19 from '../../assets/img/fasilitas/19.jpg'
import fasilitas21 from '../../assets/img/fasilitas/21.jpg'
import fasilitas22 from '../../assets/img/fasilitas/22.jpg'
import fasilitas24 from '../../assets/img/fasilitas/24.jpg'
import fasilitas25 from '../../assets/img/fasilitas/25.jpg'
import fasilitas26 from '../../assets/img/fasilitas/26.jpg'
import fasilitas27 from '../../assets/img/fasilitas/27.jpg'
import fasilitas28 from '../../assets/img/fasilitas/28.jpg'

class Pages extends Component {
  constructor () {
    super()
    this.state = {}
  }

  onContent = (val, title, desc) => {
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

  onContentSlider = (val, title, desc) => {
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
        <Carousel 
          infiniteLoop={true} 
          showThumbs={false} 
          centerMode={false}
          autoPlay={false}
          showIndicators={true}
          showStatus={false} >
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
          </Carousel>
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

            {/* slider backstage */}
            <div className="df-card card no-hover">
              <Carousel 
                infiniteLoop={true} 
                showThumbs={false} 
                centerMode={false}
                autoPlay={false}
                showIndicators={true}
                showStatus={false} >
                  <div className="image image-full background-grey">
                      <Img 
                          src={fasilitas1}
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
                  <div className="image image-full background-grey">
                      <Img 
                          src={fasilitas25}
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
                  <div className="image image-full background-grey">
                      <Img 
                          src={fasilitas26}
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
                </Carousel>
                <div className="padding-15px">
                  <h3 className="txt-site txt-main txt-font-nova">
                    Seperangkat efek dan sound sistem untuk kepentingan pementasan
                  </h3>
                  <p className="txt-site txt-12 txt-primary txt-font-helvetica"></p>
                </div>
            </div>

            
            {/* slider lighting */}
            <div className="df-card card no-hover">
              <Carousel 
                infiniteLoop={true} 
                showThumbs={false} 
                centerMode={false}
                autoPlay={false}
                showIndicators={true}
                showStatus={false} >
                  <div className="image image-full background-grey">
                      <Img 
                          src={fasilitas2}
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
                  <div className="image image-full background-grey">
                      <Img 
                          src={fasilitas5}
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
                  <div className="image image-full background-grey">
                      <Img 
                          src={fasilitas22}
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
                </Carousel>
                <div className="padding-15px">
                  <h3 className="txt-site txt-main txt-font-nova">
                    Lighting untuk pementasan malam hari
                  </h3>
                  <p className="txt-site txt-12 txt-primary txt-font-helvetica"></p>
                </div>
            </div>

            { this.onContent(fasilitas3, 'Sound controlling', '') }

            {/* slider backstage */}
            <div className="df-card card no-hover">
              <Carousel 
                infiniteLoop={true} 
                showThumbs={false} 
                centerMode={false}
                autoPlay={false}
                showIndicators={true}
                showStatus={false} >
                  <div className="image image-full background-grey">
                      <Img 
                          src={fasilitas4}
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
                  <div className="image image-full background-grey">
                      <Img 
                          src={fasilitas8}
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
                </Carousel>
                <div className="padding-15px">
                  <h3 className="txt-site txt-main txt-font-nova">
                    Backstage atau saung untuk kepentingan makeup artist dan istirahat anggota
                  </h3>
                  <p className="txt-site txt-12 txt-primary txt-font-helvetica"></p>
                </div>
            </div>


            {/* slider tribun penonton */}
            <div className="df-card card no-hover">
              <Carousel 
                infiniteLoop={true} 
                showThumbs={false} 
                centerMode={false}
                autoPlay={false}
                showIndicators={true}
                showStatus={false} >
                  <div className="image image-full background-grey">
                      <Img 
                          src={fasilitas15}
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
                  <div className="image image-full background-grey">
                      <Img 
                          src={fasilitas7}
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
                  <div className="image image-full background-grey">
                      <Img 
                          src={fasilitas24}
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
                </Carousel>
                <div className="padding-15px">
                  <h3 className="txt-site txt-main txt-font-nova">
                    Bangku tribun penonton berkapasitas 400 orang
                  </h3>
                  <p className="txt-site txt-12 txt-primary txt-font-helvetica"></p>
                </div>
            </div>


            {/* slider perpustakaan */}
            <div className="df-card card no-hover">
              <Carousel 
                infiniteLoop={true} 
                showThumbs={false} 
                centerMode={false}
                autoPlay={false}
                showIndicators={true}
                showStatus={false} >
                  <div className="image image-full background-grey">
                      <Img 
                          src={fasilitas6}
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
                  <div className="image image-full background-grey">
                      <Img 
                          src={fasilitas21}
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
                </Carousel>
                <div className="padding-15px">
                  <h3 className="txt-site txt-main txt-font-nova">
                    Perpustakaan kecil
                  </h3>
                  <p className="txt-site txt-12 txt-primary txt-font-helvetica"></p>
                </div>
            </div>

            {/* slider gazebo */}
            <div className="df-card card no-hover">
              <Carousel 
                infiniteLoop={true} 
                showThumbs={false} 
                centerMode={false}
                autoPlay={false}
                showIndicators={true}
                showStatus={false} >
                  <div className="image image-full background-grey">
                      <Img 
                          src={fasilitas10}
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
                  <div className="image image-full background-grey">
                      <Img 
                          src={fasilitas27}
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
                  <div className="image image-full background-grey">
                      <Img 
                          src={fasilitas12}
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
                </Carousel>
                <div className="padding-15px">
                  <h3 className="txt-site txt-main txt-font-nova">
                    Gazebo untuk keperluan brifing dan diskusi naskah
                  </h3>
                  <p className="txt-site txt-12 txt-primary txt-font-helvetica"></p>
                </div>
            </div>

            {/* slider gazebo */}
            <div className="df-card card no-hover">
              <Carousel 
                infiniteLoop={true} 
                showThumbs={false} 
                centerMode={false}
                autoPlay={false}
                showIndicators={true}
                showStatus={false} >
                  <div className="image image-full background-grey">
                      <Img 
                          src={fasilitas13}
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
                  <div className="image image-full background-grey">
                      <Img 
                          src={fasilitas14}
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
                </Carousel>
                <div className="padding-15px">
                  <h3 className="txt-site txt-main txt-font-nova">
                    Parkiran motor
                  </h3>
                  <p className="txt-site txt-12 txt-primary txt-font-helvetica"></p>
                </div>
            </div>

            {/* slider properti pementasan */}
            <div className="df-card card no-hover">
              <Carousel 
                infiniteLoop={true} 
                showThumbs={false} 
                centerMode={false}
                autoPlay={false}
                showIndicators={true}
                showStatus={false} >
                  <div className="image image-full background-grey">
                      <Img 
                          src={fasilitas28}
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
                  <div className="image image-full background-grey">
                      <Img 
                          src={fasilitas16}
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
                </Carousel>
                <div className="padding-15px">
                  <h3 className="txt-site txt-main txt-font-nova">
                    Properti pementasan
                  </h3>
                  <p className="txt-site txt-12 txt-primary txt-font-helvetica"></p>
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