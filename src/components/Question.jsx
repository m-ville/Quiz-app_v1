import React, { useState, useContext } from "react";
import Options from "./Options";
import { currentQnContext } from "./App"

import { Grid } from '@mui/material';

function Question(props) {

    const { htmlEntities } = useContext(currentQnContext)

    //For Shuffling the Options
    let unshuffled = [props.IA[1], props.IA[2], props.CA, props.IA[0]]
    let shuffled = unshuffled.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)

    console.log(shuffled);

    return (
        <Grid className="Quiz">
            <div className="qnContainer">
                <h2>{props.id}. {htmlEntities(props.QN)}</h2>
            </div>
            <div className="optionsContainer">
                <Options
                    qNo={props.id}
                    shuffledOptions={shuffled}
                    correctAns={props.CA}
                />
            </div>

        </Grid>
    )

}

export default Question;