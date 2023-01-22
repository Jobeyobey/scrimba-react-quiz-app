import React from "react"
import { nanoid } from "nanoid"
import "./style.css"
import Menu from "./components/Menu"
import TriviaQuestion from "./components/TriviaQuestion"

function App() {
  const [appStates, setAppStates] = React.useState({
    fetching_questions: false,
    checking_answers: false
  })
  const [triviaQuestions, setTriviaQuestions] = React.useState(false)

  /**
   * The `if` statement and `chosenQuestions` declaration immediately below are needed once the trivia questions have been fetched and the game begins.
   * First, it creates `questionElements` in global scope.
   * Then, if triviaData exists, map it to create the <TriviaQuestion /> elements for the app
   * */ 
  let questionElements = null;
  if(triviaQuestions) {
      questionElements = triviaQuestions.map((question, index) => {
      return <TriviaQuestion
        key = {nanoid()}
        questionIndex = {index}
        question = {question.question}
        possible_answers = {question.possible_answers}
        answer = {question.correct_answer}
        selectAnswer={selectAnswer}
      />
    })
  }

  // When an answer is clicked, change `selected_answer` to the index of that answer
  function selectAnswer(questionIndex, answerIndex) {
    setTriviaQuestions(prevQuestions => {
      return prevQuestions.map((question, index) => {
        // If the index of the clicked question matches the current iterated question, update the selected answer
        if(questionIndex === index) {
          return {
            ...question,
            selected_answer: answerIndex
          }
          // Otherwise, return the original object
        } else {
          return question
        }
      })
    })
  }

  console.log(triviaQuestions)
  
  return (
    <div className="App">

      { /* If `questions` exist, display trivia questions. Otherwise, display <Menu /> */
        triviaQuestions === false ?
        <Menu 
          triviaQuestions={triviaQuestions}
          setTriviaQuestions={setTriviaQuestions}
          appStates={appStates}
          setAppStates={setAppStates}
        /> :
        <div>
          {questionElements}
        </div>
      }

    </div>
  );
}

export default App;