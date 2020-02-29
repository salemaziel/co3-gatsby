import React from 'react'
//import { TaggedContentCard } from 'react-ui-cards'
import ChemTrails from '../images/song-art/Chemtrails.jpg'
import Burn from '../images/song-art/The-Tower-BURN-copy.jpg'
import Feedthepeople from '../images/song-art/album-cover-2500x1364-FEEDTHEPEOPLE.jpg'
import Another from '../images/song-art/The-Wait-ANOTHERTHING.jpg'
import Hate from '../images/song-art/the-oracle-HATE.jpg'

import ReactWebMediaPlayer from 'react-web-media-player';

import { FaPlay } from 'react-icons/fa'

import {  Row, Col } from 'reactstrap';
import Modal from 'react-awesome-modal';


import Tcontentcard2 from './Tcontentcard2'


//import Crawl from 'react-star-wars-crawl'
//import 'react-star-wars-crawl/lib/index.css'
//import '../css/tcontencardsrow1.css'

const song = [
    {
        title: "ChemTrails",
        singer: 'Chaotic Order',
        thumbnail:"https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452697/chaoticorder-feedthepeople/full-images/Chemtrails_uvyaam.jpg",
        audio: "https://res.cloudinary.com/dexdumfqy/video/upload/v1579593741/chaoticorder-feedthepeople/1-Chemtrails_vvfljp.mp3",
    },
    {
        title: 'Feed The People',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452697/chaoticorder-feedthepeople/full-images/album-cover-2500x1364-FEEDTHEPEOPLE_p3piu5.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593751/chaoticorder-feedthepeople/2-FeedThePeople_r5wbxp.mp3'

    },
    {
        title: 'Burn',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452698/chaoticorder-feedthepeople/full-images/The-Tower-BURN_v3zngp.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593780/chaoticorder-feedthepeople/3-BURNIT_wq3s6h.mp3'

    },
    {
        title: 'Another Thing',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452698/chaoticorder-feedthepeople/full-images/The-Wait-ANOTHERTHING_wgkuet.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593742/chaoticorder-feedthepeople/4-AnotherThing_qrfsn3.mp3'

    },
    {
        title: 'Hate',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452698/chaoticorder-feedthepeople/full-images/the-oracle-HATE_fn2hvj.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1579593746/chaoticorder-feedthepeople/5-HATEREPULSION_s8owm1.mp3'

    },
    
]

/*const Lyriccrawl = () => (
    <Crawl
     title=''
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
      "
    />
)*/
class TContentCards01 extends React.Component {


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
                    width="1000" height="800"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    
                    <Row style={{ display: 'flex'}}>
                    
                        <div style={{
                            backgroundImage: `url(${this.state.id})` ,
                            height: "800px",
                            width: "1000px",
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center center',
                            }}
                        >
                           {/* <Lyriccrawl> */}

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
                            {/*</Lyriccrawl>*/}
                        </div>
                        
                    </Row>
                    

                </Modal>
                <Row style={{display: 'flex'}}>

                    <Col xs="2" lg="2" md="6">
                    <Tcontentcard2
                        className="plzwork"
                            onClick={ () => { this.setState({
                                modalIsOpen: true,
                                id: ChemTrails,
                                title: song[0].title,
                                singer: song[0].singer,
                                thumbnail: song[0].thumbnail,
                                audio: song[0].audio

                                }) } } 
                        title='ChemTrails'
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
                        bgPhoto={ChemTrails} />
                    


                    </Col>

                    <Col xs="2" lg="2" md="6">
                    <Tcontentcard2
                        className="plzwork"
                            onClick={ () => { this.setState({
                                modalIsOpen: true,
                                id: Feedthepeople,
                                title: song[1].title,
                                singer: song[1].singer,
                                thumbnail: song[1].thumbnail,
                                audio: song[1].audio

                                }) } } 
                        title='Feed The People'
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
                        bgPhoto={Feedthepeople} />
                    </Col >
                    
                    
                    <Col xs="2" lg="2" md="6">
                    <Tcontentcard2
                        className="plzwork"
                            onClick={ () => { this.setState({
                                modalIsOpen: true,
                                id: Burn,
                                title: song[2].title,
                                singer: song[2].singer,
                                thumbnail: song[2].thumbnail,
                                audio: song[2].audio

                                }) } } 
                        title='Burn'
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
                        bgPhoto={Burn} />
                    </Col> 

                    
                    <Col xs="2" lg="2" md="6">
                    <Tcontentcard2
                        className="plzwork"
                            onClick={ () => { this.setState({
                                modalIsOpen: true,
                                id: Another,
                                title: song[3].title,
                                singer: song[3].singer,
                                thumbnail: song[3].thumbnail,
                                audio: song[3].audio

                                }) } } 
                        title='Another Thing'
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
                        bgPhoto={Another} />
                    </Col>
                
                    
                    <Col xs="2" lg="2" md="6">
                    <Tcontentcard2
                        className="plzwork"
                            onClick={ () => { this.setState({
                                modalIsOpen: true,
                                id: Hate,
                                title: song[4].title,
                                singer: song[4].singer,
                                thumbnail: song[4].thumbnail,
                                audio: song[4].audio

                                }) } } 
                        title='Hate'
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
                        bgPhoto={Hate} />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}
export default TContentCards01
