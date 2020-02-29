import React from 'react';
import { Button } from 'reactstrap';
//import { Link } from 'react-router-dom'

import { Link } from 'gatsby'

const GLPbuttons = (props) => {
  return (
    <div>
        <Link rel="preload" to="/Discography01" >
        <Button className="glpbutton1" >
            
                Listen To Album
            
        </Button>{' '}
        </Link>

        <a rel="preload" href="https://globallightingproject.org" >
        <Button className="glpbutton2" >
            
                Visit Global Lighting Project
            
        </Button>{' '}
        </a>
      
    </div>
  );

}

export default GLPbuttons