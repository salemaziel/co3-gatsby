import React, { Component } from "react";
import Slider from "react-slick";
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";

//import { TaggedContentCard } from 'react-ui-cards'
import Chemtrails from '../images/song-art/Chemtrails.jpg'
import Burn from '../images/song-art/The-Tower-BURN.jpg'
import Feedthepeople from '../images/song-art/album-cover-2500x1364-FEEDTHEPEOPLE.jpg'
import Another from '../images/song-art/The-Wait-ANOTHERTHING.jpg'
import Hate from '../images/song-art/the-oracle-HATE.jpg'
import Sorry from '../images/song-art/closeyoureyestosee-SORRY.jpg'
import Chains from '../images/song-art/medicineman-CHAINS.jpg'
import Colors from '../images/song-art/shaman-COLORS.jpg'
import Never from '../images/song-art/The-Magician-NEVEREND.jpg'
import Earth from '../images/song-art/HighPriestess-EARTH.jpg'
import ReactWebMediaPlayer from 'react-web-media-player';

import { FaPlay } from 'react-icons/fa'

import { Col, Row } from 'reactstrap';
import Modal from 'react-awesome-modal';

//import ReactCardCarousel from 'react-card-carousel';
//import { FaArrowAltCircleLeft } from 'react-icons/fa'
//import { FaArrowAltCircleRight } from 'react-icons/fa'

const song = [
    {
        title: "ChemTrails",
        singer: 'Chaotic Order',
        thumbnail:"https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/Chemtrails_uvyaam.jpg",
        audio: "https://res.cloudinary.com/dexdumfqy/video/upload/v1579593741/chaoticorder-feedthepeople/1-Chemtrails_vvfljp.mp3",
    },
    {
        title: 'Feed The People',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/album-cover-2500x1364-FEEDTHEPEOPLE_p3piu5.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593751/chaoticorder-feedthepeople/2-FeedThePeople_r5wbxp.mp3'

    },
    {
        title: 'Burn',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452698/chaoticorder-feedthepeople/full-images/The-Tower-BURN_v3zngp.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593780/chaoticorder-feedthepeople/3-BURNIT_wq3s6h.mp3'

    },
    {
        title: 'Another Thing',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452698/chaoticorder-feedthepeople/full-images/The-Wait-ANOTHERTHING_wgkuet.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593742/chaoticorder-feedthepeople/4-AnotherThing_qrfsn3.mp3'

    },
    {
        title: 'Hate',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452698/chaoticorder-feedthepeople/full-images/the-oracle-HATE_fn2hvj.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593746/chaoticorder-feedthepeople/5-HATEREPULSION_s8owm1.mp3'

    },
    {
        title: 'Sorry',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/closeyoureyestosee-SORRY_ev76he.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593760/chaoticorder-feedthepeople/6-Sorry_s9hoyu.mp3'

    },
    {
        title: 'Chains',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/medicineman-CHAINS_p19xji.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593763/chaoticorder-feedthepeople/7-CHAINS_yiqxlf.mp3'

    },
    {
        title: 'Earth',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/HighPriestess-EARTH_bcy5r9.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593759/chaoticorder-feedthepeople/8-ChaoticOrder_q0zas1.mp3'

    },
    {
        title: 'Never End',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452698/chaoticorder-feedthepeople/full-images/The-Magician-NEVEREND_mpmzxc.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593764/chaoticorder-feedthepeople/9-NeverEnd_vlxoad.mp3'

    },
    {
        title: 'Colors',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/shaman-COLORS_a9vvpy.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593781/chaoticorder-feedthepeople/10-Colors_db6xqj.mp3'

    }
]




export default class TCardMobile01a extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            id: '',
            title: '',
            singer: '',
            thumbnail: '',
            audio: ''
        };
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false,
            id: '',
            title: '',
            singer: '',
            thumbnail: '',
            audio: ''
        });
    }

  render() {
    const settings = {
      className: "plz",
      infinite: false,
      centerPadding: "30px",
      slidesToShow: 3,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    let {
        thumbnail,
        title,
        description,
        tags,
        ...other
    } = this.props;
    let cards;;
    let { styleDisplay } = this.props;
    return (
      <div>
          <Modal
                    visible={this.state.modalIsOpen}
                    width="275" height="275"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <Row style={{ display: 'flex'}}>
                            <div style={{
                                position: 'absolute'}}>
                                <ReactWebMediaPlayer
                                    width={275} height={275}
                                    title={this.state.title}
                                    thumbnail={this.state.thumbnail}
                                    audio={this.state.audio}
                                    

                                />
                            </div>
                    </Row>
            
            </Modal>
        
          
                <Row /*style={{ display: 'flex' }}*/>
                    <Slider {...settings}>
                        
                        
                           {/*<TaggedContentCard
                                className="plz"
                                style={{width: '20px', minWidth: '200px'}}
                                
                                thumbnail={Chemtrails}
                                title='ChemTrails'
                                description=''
                                tags={[
                                <   div
                                        onClick={ () => { 
                                        this. setState({
                                            modalIsOpen: true,
                                            id: Chemtrails,
                                            title: song[0].title,
                                            singer: song[0].singer,
                                            thumbnail: song[0].thumbnail,
                                            audio: song[0].audio
                                        })} }>
                                        <FaPlay focusable="false" aria-hidden="true" /></div>
                                    ]}/>*/}
                        
                        
                            {/*<TaggedContentCard
                                className="plz"
                                style={{width: '20px', minWidth: '200px'}}
                                
                                thumbnail={Feedthepeople}
                                title='Feed The People'
                                description=''
                                tags={[
                                    <div
                                        onClick={ () => { this.setState({
                                            modalIsOpen: true,
                                            id: Feedthepeople,
                                            title: song[1].title,
                                            singer: song[1].singer,
                                            thumbnail: song[1].thumbnail,
                                            audio: song[1].audio
                                        })} }
                                    ><FaPlay focusable="false" aria-hidden="true" /></div>
                                ]}

                            />*/}
                        
                        
                           {/* <TaggedContentCard
                                className="plz"
                                style={{width: '20px', minWidth: '200px'}}
                                
                                thumbnail={Feedthepeople}
                                title='Feed The People'
                                description=''
                                tags={[
                                    <div
                                        onClick={ () => { this.setState({
                                            modalIsOpen: true,
                                            id: Feedthepeople,
                                            title: song[1].title,
                                            singer: song[1].singer,
                                            thumbnail: song[1].thumbnail,
                                            audio: song[1].audio
                                        })} }
                                    ><FaPlay focusable="false" aria-hidden="true" /></div>
                                ]}

                            />*/}
                        
                        
                            {/*<TaggedContentCard
                                className="plz"
                                style={{width: '20px', minWidth: '200px'}}
                                
                                thumbnail={Feedthepeople}
                                title='Feed The People'
                                description=''
                                tags={[
                                    <div
                                        onClick={ () => { this.setState({
                                            modalIsOpen: true,
                                            id: Feedthepeople,
                                            title: song[1].title,
                                            singer: song[1].singer,
                                            thumbnail: song[1].thumbnail,
                                            audio: song[1].audio
                                        })} }
                                    ><FaPlay focusable="false" aria-hidden="true" /></div>
                                ]}

                            />*/}
                        
                        
                            {/*<TaggedContentCard
                                className="plz"
                                style={{width: '20px', minWidth: '200px'}}
                                
                                thumbnail={Feedthepeople}
                                title='Feed The People'
                                description=''
                                tags={[
                                    <div
                                        onClick={ () => { this.setState({
                                            modalIsOpen: true,
                                            id: Feedthepeople,
                                            title: song[1].title,
                                            singer: song[1].singer,
                                            thumbnail: song[1].thumbnail,
                                            audio: song[1].audio
                                        })} }
                                    ><FaPlay focusable="false" aria-hidden="true" /></div>
                                ]}

                            />*/}
                        
                        
                           {/* <TaggedContentCard
                                className="plz"
                                style={{width: '20px', minWidth: '200px'}}
                                
                                thumbnail={Feedthepeople}
                                title='Feed The People'
                                description=''
                                tags={[
                                    <div
                                        onClick={ () => { this.setState({
                                            modalIsOpen: true,
                                            id: Feedthepeople,
                                            title: song[1].title,
                                            singer: song[1].singer,
                                            thumbnail: song[1].thumbnail,
                                            audio: song[1].audio
                                        })} }
                                    ><FaPlay focusable="false" aria-hidden="true" /></div>
                                ]}

                            />*/}
                        
                        
                        
                </Slider>
            </Row>
      </div>
    );
  }
}



