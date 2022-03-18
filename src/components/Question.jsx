import React, { useState } from "react";
import Options from "./Options";

function Question(props) {

    //For Shuffling the Options
    let unshuffled = [props.IA[1], props.IA[2], props.CA, props.IA[0]]
    let shuffled = unshuffled.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)

    console.log(shuffled);

    return (
        <div className="Quiz">
            <h3>{props.id}. {props.QN}</h3>
            <Options
                qNo={props.id}
                shuffledOptions={shuffled}
                correctAns={props.CA}
            />

        </div>
    )

}

export default Question;