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
        id = {index}
        question = {question.question}
        possible_answers = {question.possible_answers}
        answer = {question.correct_answer}
      />
    })
  }
  console.log(questionElements)

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

/**
 * triviaQuestions.questions is an object looking like this {
 *  triviaQuestions: {
 *    questions: {
 *      results: [
 *        {
 *          category: "Category"
 *          correct_answer: "Correct Answer"
 *          difficulty: "diff"
 *          incorrect_answers: [
 *          1,
 *          2,
 *          3
 *          ]
 *          question: "Question"
 *          type: "multiple / true/false"
 *        },
 *        object,
 *        object,
 *        object,
 *        object,
 *      ]
 *    } 
 *  }
 * }
 */