import React from 'react';
import './Card.css'
import logo from './logo-wrench-white.png'

class Card extends React.Component{
    render(){
        return(
            <div className="Card">
                {/* <img src="../public/logo-wrench-white.png" alt="dc logo"/> */}
                <img src={logo} alt="dc logo"/>
            </div>
        )
    }
}

export default Card;