import React from 'react'
//import { TaggedContentCard } from 'react-ui-cards'
import Where from '../images/song-art/global-lighting-album/1-where-were-you.jpg'
import Wake from '../images/song-art/global-lighting-album/2-wake-up.jpg'
import Tears from '../images/song-art/global-lighting-album/3-Tears.jpg'
import Dirty from '../images/song-art/global-lighting-album/4-Dirty-Mine.jpg'
import Primitive from '../images/song-art/global-lighting-album/5-Primitive-Man.jpg'

import ReactWebMediaPlayer from 'react-web-media-player';

import { FaPlay } from 'react-icons/fa'

import {  Row, Col } from 'reactstrap';
import Modal from 'react-awesome-modal';

//import Crawl from 'react-star-wars-crawl'
//import 'react-star-wars-crawl/lib/index.css'
import '../css/tcontencardsrow1.css'

const song = [
    {
        title: "Where Were You",
        singer: 'Chaotic Order',
        thumbnail:"https://res.cloudinary.com/dexdumfqy/image/upload/v1581118752/chaoticorder-globallightingproject/1-where-were-you_ufda2c.jpg",
        audio: "https://res.cloudinary.com/dexdumfqy/video/upload/v1581118300/chaoticorder-globallightingproject/1-WHERE_WERE_YOU_wgoc56.mp3",
    },
    {
        title: 'Wake Up',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581118752/chaoticorder-globallightingproject/2-wake-up_h0tc9z.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1581118296/chaoticorder-globallightingproject/2-WAKE_UP_nnmu69.mp3'

    },
    {
        title: 'Tears',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581118752/chaoticorder-globallightingproject/3-Tears_fym2g1.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1581118296/chaoticorder-globallightingproject/3-TEARS_lnpihr.mp3'

    },
    {
        title: 'Dirty Mine',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581118753/chaoticorder-globallightingproject/4-Dirty-Mine_g35szv.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1581118307/chaoticorder-globallightingproject/4-DIRTY_MINE_rjsmiu.mp3'

    },
    {
        title: 'Primitive Man',
        singer: 'Chaotic Order',
        thumbnail:
            'https://res.cloudinary.com/dexdumfqy/image/upload/v1581118753/chaoticorder-globallightingproject/5-Primitive-Man_gfmwue.jpg',
        audio:
            'https://res.cloudinary.com/dexdumfqy/video/upload/v1581118299/chaoticorder-globallightingproject/5-PRIMITVE_MAN_lrsghw.mp3'

    },
]

//const Lyriccrawl = () => (
//    <Crawl
//     title=''
//      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
//      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
//      "
//    />
//)
class Tcontentdisc2row1 extends React.Component {


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
            <div className="tccd1">
                <Modal
                    visible={this.state.modalIsOpen}
                    width="700" height="700"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    
                    <Row style={{ display: 'flex'}}>
                    
                        <div style={{
                            backgroundImage: `url(${this.state.id})` ,
                            height: "700px", 
                            width: "700px",  
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center center',
                            } }>
                            {/*<Lyriccrawl>*/}

                            <div style={{ 
                                position: 'absolute',
                                left: '85%',
                                marginLeft: '-110px',
                                marginTop: '440px'}}>
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
                        {/*<TaggedContentCard
                            style={{width: '20px', minWidth: '200px'}}
                            thumbnail={Where}
                            title='Where Were You'
                            description=''
                            tags={[
                                <FaPlay focusable="false" aria-hidden="true" />

                            ]}
                            onClick={ () => { this.setState({
                                modalIsOpen: true,
                                id: Where,
                                title: song[0].title,
                                singer: song[0].singer,
                                thumbnail: song[0].thumbnail,
                                audio: song[0].audio
                            })} }
                        />*/}
                            
                       
                    </Col>
                    <Col xs="2" lg="2" md="6">
                        {/*<TaggedContentCard
                            style={{width: '20px', minWidth: '200px'}}
                            thumbnail={Wake}
                            title='Wake Up'
                            description=''
                            tags={[
                                <FaPlay focusable="false" aria-hidden="true" />

                            ]}
                            onClick={ () => { this.setState({
                                modalIsOpen: true,
                                id: Wake,
                                title: song[1].title,
                                singer: song[1].singer,
                                thumbnail: song[1].thumbnail,
                                audio: song[1].audio
                            })} }


                        />*/}
                    </Col > <Col xs="2" lg="2" md="6">
                    {/*<TaggedContentCard
                        style={{width: '20px', minWidth: '200px'}}
                        thumbnail={Tears}
                        title='Tears'
                        description=''
                        tags={[
                            <FaPlay focusable="false" aria-hidden="true" />

                        ]}
                        onClick={ () => { this.setState({
                            modalIsOpen: true,
                            id: Tears,
                            title: song[2].title,
                            singer: song[2].singer,
                            thumbnail: song[2].thumbnail,
                            audio: song[2].audio
                        })} }

                    />*/}
                </Col> <Col xs="2" lg="2" md="6">
                    {/*<TaggedContentCard
                        style={{width: '20px', minWidth: '200px'}}
                        thumbnail={Dirty}
                        title='Dirty Mine'
                        description=''
                        tags={[
                            <FaPlay focusable="false" aria-hidden="true" />
                        ]}
                        onClick={ () => { this.setState({
                            modalIsOpen: true,
                            id: Dirty,
                            title: song[3].title,
                            singer: song[3].singer,
                            thumbnail: song[3].thumbnail,
                            audio: song[3].audio
                        })} }

                    />*/}
                </Col>
                    <Col xs="2" lg="2" md="6">
                        {/*<TaggedContentCard
                            style={{width: '20px', minWidth: '200px'}}
                            thumbnail={Primitive}
                            title='Primitive Man'
                            description=''
                            tags={[
                                <FaPlay focusable="false" aria-hidden="true" />
                            ]}
                            onClick={ () => { this.setState({
                                modalIsOpen: true,
                                id: Primitive,
                                title: song[4].title,
                                singer: song[4].singer,
                                thumbnail: song[4].thumbnail,
                                audio: song[4].audio
                            })} }

                        />*/}
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Tcontentdisc2row1
