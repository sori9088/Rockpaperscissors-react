import logo from './logo.svg';
import './App.css';
import { CHOICES, getRoundOutcome } from "./utils";
import React, { useState } from "react";
import ChoiceCard from "./components/ChoiceCard";
import ChoiceBtn from "./components/ChoiceButtons";
import Navbar from './components/Navbar';



function App() {

  const [prompt, setGamePrompt] = useState(" Start! ");
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [previousWinner, setPreviousWinner] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);

  const onPlayerChoice = playerChoice => { //playerChoice 는 락,페이퍼, 시져 중에 하나
    const [result, compChoice] = getRoundOutcome(playerChoice);
    const newUserChoice = CHOICES[playerChoice];
    const newComputerChoice = CHOICES[compChoice];
    let className;

    setPlayerChoice(newUserChoice);
    setComputerChoice(newComputerChoice);

    console.log(result)
    console.log(compChoice)

    if( result == "Victory!") {
      setPreviousWinner("You");
      className = "victory"
    } else if (result == "Defeat!"){
      setPreviousWinner("Computer");
      className = "defeat"
    } else{
      setPreviousWinner("Tie");
      className = "tie"
    }
    setGamePrompt(result);
    
    gameHistory.push(result);
    setGameHistory(gameHistory);
  };


  return (
    <div className="App">
     <nav className="nav">
    <Navbar />
    </nav>
    <div className="container">
    <div className="row mb-3">
    <div className="col-md-8 themed-grid-col">

    <ChoiceCard 
      title = 'Computer'
      previousWinner={previousWinner}
      imgURL = {computerChoice && computerChoice.url} /> 
{/* if computerChoice exist, we call the value of computerChoice.url  */}
     
      <h1 className={`py-4 ${prompt ==='Tie game!'?'tie':prompt ==='Defeat!'?'defeat':'victory'}`}>{prompt}</h1>

    <ChoiceBtn onPlayerChoice={onPlayerChoice} />
    
    <ChoiceCard 
      title = 'You' 
      previousWinner={previousWinner}
      imgURL = {playerChoice && playerChoice.url} />

      </div>
      <div className="col-md-4 themed-grid-col">
        <h3>History</h3>
          {gameHistory.map(result => {
            return <h5>{result}</h5>;
          })}

      </div>

    </div>
  </div>
  </div>

  );
}

export default App;
