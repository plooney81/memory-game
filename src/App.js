import './App.css';
import Card from './components/Card'

const deck = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Memory Game</h1>
        <h2>Match Cards to win</h2>
      </div>
      <div className="body">
      <div className="container">
        {deck.map((card, index)=>{
          return <Card key={index}/>
        })}
      </div>
      </div>
    </div>
  );
}

export default App;
