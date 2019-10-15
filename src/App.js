import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";
import ChoiceCard from "./components/ChoiceCard";
import Navbar from './components/Navbar';


export const getRoundOutcome = userChoice => {
  const computerChoice = getRandomChoice().name;
  let result;

  if(userChoice === "rock"){
    result = computerChoice === "scissors" ? "Victory!" : "Defeat!";
  }
  if(userChoice === "paper"){
    result = computerChoice === "rock" ? "Victory!" : "Defeat!";
  }
  if(userChoice === "scissors"){
    result = computerChoice === "paper" ? "Victory!" : "Defeat!";
  }
  if(userChoice === computerChoice) result = "Tie game!";
  return [result, computerChoice];

};

export const getRandomChoice = () => {
  let choiceNames = Object.keys(CHOICES);
  let randomIndex = Math.floor(Math.random()*3);
  let choiceName = choiceNames[randomIndex];
  return CHOICES[choiceName];
};

export const CHOICES = {
  scissors: {
    name: "scissors",
    url: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
  },
  paper: {
    name: "paper",
    url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"
  },
  rock: {
    name: "rock",
    url:
      "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"
  }
};



function App() {

  const [prompt, setGamePrompt] = useState("1, 2, 3, SHOOT! ");

  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [previousWinner, setPreviousWinner] = useState(null);


  const onPlayerChoice = playerChoice => {
    const [result, compChoice] = getRoundOutcome(playerChoice);
    const newUserChoice = CHOICES[playerChoice];
    const newComputerChoice = CHOICES[compChoice];

    setPlayerChoice(newUserChoice);
    setComputerChoice(newComputerChoice);

    console.log(result)
    console.log(compChoice)

    if( result == "Victory!") {
      setPreviousWinner("You");
    } else if (result == "Defeat!"){
      setPreviousWinner("Computer");
    } else{
      setPreviousWinner("Tie");
    }
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

      <h1>{prompt}</h1>

      <button className="btn btn-warning btn-lg" onClick={() => onPlayerChoice("rock")}>
        Rock
        </button>
        <button className="btn btn-warning btn-lg" onClick={() => onPlayerChoice("paper")}>
        Paper
        </button>
        <button className="btn btn-warning btn-lg" onClick={() => onPlayerChoice("scissors")}>
        Scissors
        </button>

    
    <ChoiceCard 
      title = 'You' 
      previousWinner={previousWinner}
      imgURL = {playerChoice && playerChoice.url} />

      </div>
    </div>
  </div>
  </div>
  );
}

export default App;
