import React from 'react';
import './Card.css'
import logo from './logo-wrench-white.png'

class Card extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isFlipped: false
        };
    }

    clickHandler = () => {
        this.setState({
            isFlipped: !this.state.isFlipped
        })
    }

    render(){
        let innerClass = "Card_inner";
        if(this.state.isFlipped){
            innerClass += ' flipped';
        }
        return(
            <div className="Card" onClick={this.clickHandler}>
                <div className={innerClass}>
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