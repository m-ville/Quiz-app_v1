import "../styles.css";
import React, { useEffect, useState, createContext } from "react";
import Question from "./Question";
import Result from "./Result"
// import { CssBaseline, Button, Card, CardContent, CardHeader, Typography, CardActions, } from '@mui/material';

export const currentQnContext = createContext()

function App() {


  const [Qns, setQns] = useState([])
  const [currentQn, setCurrentQn] = useState(0)
  const [score, setScore] = useState(0)
  const [correctAns, setCorrectAns] = useState([])


  const fetchData = () => {
    return fetch("https://opentdb.com/api.php?amount=10&&type=multiple")
      .then((response) => response.json())
      .then((data) => { setQns(data.results) });
  }

  useEffect(() => {           //for one time rendering of fetchData()
    fetchData()
  }, []);

  console.log(Qns)







  if (Qns.length === 0) { return ("Loading...") }

  else {
    if (currentQn !== Qns.length) {
      return (
        <currentQnContext.Provider value={{ currentQn, setCurrentQn, score, setScore, correctAns, setCorrectAns }}>
          <Question
            key={currentQn}
            id={currentQn + 1}
            QN={Qns[currentQn].question}
            IA={Qns[currentQn].incorrect_answers}
            CA={Qns[currentQn].correct_answer}
          />
        </currentQnContext.Provider>
      )
    } else {
      return (
        <Result
          totalScore={score}
          correctANS={correctAns}
        />
      )
    }
  }


}

export default App;

