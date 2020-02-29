import React from 'react'
//import { TaggedContentCard } from 'react-ui-cards'
import Sorry from '../images/song-art/closeyoureyestosee-SORRY.jpg'
import Chains from '../images/song-art/medicineman-CHAINS.jpg'
import Colors from '../images/song-art/shaman-COLORS.jpg'
import Never from '../images/song-art/The-Magician-NEVEREND.jpg'
import Earth from '../images/song-art/HighPriestess-EARTH.jpg'

import {  Row, Col } from 'reactstrap';
import Modal from 'react-awesome-modal';
import { FaPlay } from 'react-icons/fa'

import ReactWebMediaPlayer from 'react-web-media-player';

import Tcontentcard2 from './Tcontentcard2'


const song = [
    {
        title: 'Sorry',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452697/chaoticorder-feedthepeople/full-images/closeyoureyestosee-SORRY_ev76he.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593760/chaoticorder-feedthepeople/6-Sorry_s9hoyu.mp3'

    },
    {
        title: 'Chains',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452697/chaoticorder-feedthepeople/full-images/medicineman-CHAINS_p19xji.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593763/chaoticorder-feedthepeople/7-CHAINS_yiqxlf.mp3'

    },
    {
        title: 'Earth',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452697/chaoticorder-feedthepeople/full-images/HighPriestess-EARTH_bcy5r9.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593759/chaoticorder-feedthepeople/8-ChaoticOrder_q0zas1.mp3'

    },
    {
        title: 'Never End',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452698/chaoticorder-feedthepeople/full-images/The-Magician-NEVEREND_mpmzxc.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593764/chaoticorder-feedthepeople/9-NeverEnd_vlxoad.mp3'

    },
    {
        title: 'Colors',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452697/chaoticorder-feedthepeople/full-images/shaman-COLORS_a9vvpy.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593781/chaoticorder-feedthepeople/10-Colors_db6xqj.mp3'

    }
]

class TContentCards02 extends React.Component {
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
        let {
            title,
            tag,
            tagBg,
            centerIconName,
            bgPhoto,
            description,
            bottomIconName,
            bottomIconSize,
            centerIconSize,
            bottomIconColor,
            centerIconColor,
            onClick,
            ...other
        } = this.props;
        let cards;
        let { styleDisplay } = this.props;
        
        return (
            <React.Fragment>
                <Modal
                    visible={this.state.modalIsOpen} 
                    width="1000" 
                    height="600" 
                    effect="fadeInUp" 
                    onClickAway={() => this.closeModal()}
                >
                    <Row style={{ display: 'flex'}}>
                        <div style={{ 
                            backgroundImage: `url(${this.state.id})` ,
                            height: "600px", 
                            width: "1000px",  
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center center'} }>
                            <div style={{ 
                                position: 'absolute',
                                left: '85%',
                                marginLeft: '-110px',
                                marginTop: '370px'}}>
                                <ReactWebMediaPlayer
                                    width={200} height={200}
                                    title={this.state.title}
                                    thumbnail={this.state.thumbnail}
                                    audio={this.state.audio}
                                    vinyl={{
                                        img: this.state.thumbnail,
                                        rpm: 15}}
                                    style={{
                                        backgroundColor: "transparent",
                                        background: "transparent",
                                    }}
                                />

                            </div>

                        </div>
                    </Row>
                </Modal>
                <Row style={{display: 'flex'}}>
                    
                    <Col xs="2" lg="2" md="6">
                    <Tcontentcard2
                        className="plzwork"
                            onClick={ () => { this.setState({
                                modalIsOpen: true,
                                id: Sorry,
                                title: song[0].title,
                                singer: song[0].singer,
                                thumbnail: song[0].thumbnail,
                                audio: song[0].audio

                                }) } } 
                        title='Sorry'
                        tag={[
                            <div>
                                <FaPlay focusable="false" aria-hidden="true" />
                            </div>
                             ]}
                        centerIconName="fa fa-play"
                        centerIconColor="white"
                        tagBg="rgba(0,0,0,0.45)"
                        tagColor="white"
                        centerIconSize="4rem"
                        bgPhoto={Sorry} />
                    </Col>
                    
                    
                    <Col xs="2" lg="2" md="6">
                    <Tcontentcard2
                        className="plzwork"
                            onClick={ () => { this.setState({
                                modalIsOpen: true,
                                    id: Chains,
                                    title: song[1].title,
                                    singer: song[1].singer,
                                    thumbnail: song[1].thumbnail,
                                    audio: song[1].audio

                                }) } } 
                        title='Chains'
                        tag={[
                            <div>
                                <FaPlay focusable="false" aria-hidden="true" />
                            </div>
                             ]}
                        centerIconName="fa fa-play"
                        centerIconColor="white"
                        tagBg="rgba(0,0,0,0.45)"
                        tagColor="white"
                        centerIconSize="4rem"
                        bgPhoto={Chains} />
                    </Col>


                    <Col xs="2" lg="2" md="6">
                    <Tcontentcard2
                        className="plzwork"
                            onClick={ () => { this.setState({
                                modalIsOpen: true,
                                id: Earth,
                                title: song[2].title,
                                singer: song[2].singer,
                                thumbnail: song[2].thumbnail,
                                audio: song[2].audio

                                }) } } 
                        title='Earth'
                        tag={[
                            <div>
                                <FaPlay focusable="false" aria-hidden="true" />
                            </div>
                             ]}
                        centerIconName="fa fa-play"
                        centerIconColor="white"
                        tagBg="rgba(0,0,0,0.45)"
                        tagColor="white"
                        centerIconSize="4rem"
                        bgPhoto={Earth} />
                    </Col>


                    <Col xs="2" lg="2" md="6">
                    <Tcontentcard2
                        className="plzwork"
                            onClick={ () => { this.setState({
                                modalIsOpen: true,
                                id: Never,
                                title: song[3].title,
                                singer: song[3].singer,
                                thumbnail: song[3].thumbnail,
                                audio: song[3].audio

                                }) } } 
                        title='Never End'
                        tag={[
                            <div>
                                <FaPlay focusable="false" aria-hidden="true" />
                            </div>
                             ]}
                        centerIconName="fa fa-play"
                        centerIconColor="white"
                        tagBg="rgba(0,0,0,0.45)"
                        tagColor="white"
                        centerIconSize="4rem"
                        bgPhoto={Never} />
                    </Col>


                    <Col xs="2" lg="2" md="6">
                    <Tcontentcard2
                        className="plzwork"
                            onClick={ () => { this.setState({
                                modalIsOpen: true,
                                id: Colors,
                                title: song[4].title,
                                singer: song[4].singer,
                                thumbnail: song[4].thumbnail,
                                audio: song[4].audio

                                }) } } 
                        title='Colors'
                        tag={[
                            <div>
                                <FaPlay focusable="false" aria-hidden="true" />
                            </div>
                             ]}
                        centerIconName="fa fa-play"
                        centerIconColor="white"
                        tagBg="rgba(0,0,0,0.45)"
                        tagColor="white"
                        centerIconSize="4rem"
                        bgPhoto={Colors} />
                    </Col>
                </Row>
            </React.Fragment>

        );
    }
}
export default TContentCards02