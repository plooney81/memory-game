import React from 'react';
import './App.css';
import Card from './components/Card'

const deck = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']

const generateDeck = () => {
  const symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø'];
  const emptyDeck = [];
  deck.forEach((slot, index)=>{
    emptyDeck.push({isFlipped: false, symbol: symbols[index%8]})
  })

  console.log(emptyDeck);

  //Shuffle logic
  for(let outIndex = emptyDeck.length - 1; outIndex >= 0; outIndex--){
    let randomIndex = Math.floor(Math.random() * outIndex); 
    [emptyDeck[outIndex], emptyDeck[randomIndex]] = [emptyDeck[randomIndex], emptyDeck[outIndex]];
  }

  return emptyDeck;
}

class App extends React.Component{

  constructor(props){
      super(props);

      this.state = {
        deck: generateDeck(),
        pickedCards: [],
      };
  }

  render(){
    return (
      <div className="App">
        <div className="App-header">
          <h1>Memory Game</h1>
          <h2>Match Cards to win</h2>
        </div>
        <div className="body">
        <div className="container">
          {this.state.deck.map((card, index)=>{
            // How to send props
            return <Card key={index} symbol={card.symbol} isFlipped={card.isFlipped}/>
          })}
        </div>
        </div>
      </div>
    );
  }

}
export default App;
