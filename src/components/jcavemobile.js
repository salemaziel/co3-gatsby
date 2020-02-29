import React from 'react'

import JcaveL from '../images/jackscave-left.jpg'
import JcaveR from '../images/jackscave-right.jpg'

const Jcavemobile = () => (
    <React.Fragment>
        <img className="jcavemobile" 
            src={JcaveL} 
            alt="Primary artist of Chaotic Order Jack Dubord"
            >
        </img>
        <img className="jcavemobile" 
            src={JcaveR} 
            alt="Primary artist of Chaotic Order Jack Dubord"
        ></img>

    </React.Fragment>
)

export default Jcavemobile