import React from "react";


export default function ChoiceBtn(props) {
    return (
        <div className="container">
        <button className="btn btn-danger btn-lg" 
        onClick={() => props.onPlayerChoice("rock")}>
        Rock
        </button>
        <button className="btn btn-danger btn-lg" 
        onClick={() => props.onPlayerChoice("paper")}>
        Paper
        </button>
        <button className="btn btn-danger btn-lg" 
        onClick={() => props.onPlayerChoice("scissors")}>
        Scissors
        </button>
        </div>

    );
}