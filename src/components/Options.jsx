import React, { useEffect, useState, useContext } from 'react';
import { currentQnContext } from "./App"

export default function Options(props) {

    const { currentQn, setCurrentQn, score, setScore, correctAns, setCorrectAns } = useContext(currentQnContext)

    const [optionChosen, setOptionChosen] = useState("")
    console.log("optionChosen : ", optionChosen);


    function clickHandler() {
        console.log(props.correctAns);
        if (optionChosen === props.correctAns) {
            setScore((prevScore) => {
                return (prevScore + 1)
            })
        }
        if (optionChosen === "") {
            alert("Please select an Option!")
        } else {
            setCurrentQn((prevQn) => {
                return (prevQn + 1)
            })

            setCorrectAns((prevCorrectAns) => {
                return [...prevCorrectAns, props.correctAns]
            })
        }



    }


    console.log("correctAns: ", correctAns);
    console.log("Score:", score);

    return (
        <div>
            <div className="options">
                <label>
                    <input type="radio" name="option" id="o1" onClick={() => setOptionChosen(props.shuffledOptions[0])} />{props.shuffledOptions[0]}</label>
                <br />
                <label>
                    <input type="radio" name="option" id="o2" onClick={() => setOptionChosen(props.shuffledOptions[1])} />{props.shuffledOptions[1]}</label>
                <br />
                <label>
                    <input type="radio" name="option" id="o3" onClick={() => setOptionChosen(props.shuffledOptions[2])} />{props.shuffledOptions[2]}</label>
                <br />
                <label>
                    <input type="radio" name="option" id="o4" onClick={() => setOptionChosen(props.shuffledOptions[3])} />{props.shuffledOptions[3]}</label>

            </div>

            <div className='btns'>
                <button className='btn-nxt' onClick={clickHandler}>{correctAns.length === 9 ? "SUBMIT" : "Next"}</button>
            </div>

        </div>

    );
}