import React, { useState } from "react"


function Result(props) {

    const [bool1, setBool1] = useState(false);
    const [bool2, setBool2] = useState(false);


    console.log(bool1);

    return (
        <div>
            <h1>✅</h1>
            <h1>ThankYou for attempting the Quiz.</h1>
            <h3>Click here to see the result</h3>
            <button onClick={() => setBool1(!bool1)}>Result</button>
            {bool1 ? (
                <>
                    <p>Your Score is : {props.totalScore}</p>
                    <p>Your Accuracy is : {props.totalScore}0%</p>
                </>) : null}

            <h3>Click here to see the correct Answers</h3>
            <button onClick={() => setBool2(!bool2)}>Correct Answers</button>
            {bool2 ? (
                <>
                    <h2>CORRECT ANSWERS : </h2>
                    {props.correctANS.map((eachCorrectANS, index) => {
                        return <p key={index} >{index + 1}. {eachCorrectANS}</p>
                    })}
                </>) : null}
        </div>
    )
}

export default Result;

