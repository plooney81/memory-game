import React from 'react';
import './Card.css'
import logo from './logo-wrench-white.png'

class Card extends React.Component{
    render(){
        let innerClass = "Card_inner";
        if(this.props.isFlipped){
            innerClass += ' flipped';
        }
        return(
            <div className="Card" onClick={this.props.pickCard}>
                <div className={innerClass}>
                    <div className="Card_front">
                        {this.props.symbol}
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