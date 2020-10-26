import React from 'react';
import './Card.css'
import logo from './logo-wrench-white.png'

class Card extends React.Component{
    render(){
        return(
            <div className="Card">
                <div className="Card_inner">
                    <div className="Card_front">
                        ∆
                    </div>
                    <div className="Card_back">
                        {/* <img src="../public/logo-wrench-white.png" alt="dc logo"/> */}
                        <img src={logo} alt="dc logo"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;