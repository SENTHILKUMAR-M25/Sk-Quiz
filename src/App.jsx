import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css"
import Quiz from "./Question.json"
function App() {
  const [currquestion, setCurrquestion] = useState(0)
  const [score, setScore] = useState(0)
  const [result, setResult] = useState(false)
 
  const AnswerCheck = (selected) => {
    if (selected === Quiz[currquestion].answer) {
      setScore((curScore) => curScore + 1)
    }
    if (currquestion < Quiz.length - 1) {
      setCurrquestion((prequestion => prequestion + 1))
      setTime(20)
    }
    else {
      setResult(true)
    }

  }
  const Restart = () => {
    setCurrquestion(0)
    setScore(0)
    setResult(0)
  }
  const Result = () => {

    setReslt(() => {
      let rescon = 0
      if (result >= 25) {
        rescon = ("wonderfull Play You're Win")
      }
      else if (15 <= result < 25) {
        rescon = ("nice play You Won the Match")
      }
      else if (result < 15) {
        rescon = ("You can do it Play again")
      }
    })
  }

  return (

    <div className='quiz'>
      <div className='con'>
        <h1>SK QUIZ GAME</h1>
        {result ?

          (<div className='result'>
            <h2>Your Score :{score} </h2>
            <h3>nice play</h3>
            <button onClick={Restart}>Reset</button>
          </div>) :
          <div className='game'>
            <div className='top'>
              <h2> Score :{score} </h2>
              <h2>Question : <span>{currquestion + 1} </span>/{Quiz.length}</h2>
            </div>
            <div>
              <h3>{Quiz[currquestion].question}</h3>
              <div className="option ">
                {Quiz[currquestion].options.map((option, index) =>
                (
                  <button key={index} onClick={() => AnswerCheck(option)}>{option}</button>
                ))}

              </div>
            </div>
          </div>
        }
      </div>
    </div>

  )
}

export default App
