import React from "react"
import { nanoid } from "nanoid"
import "./style.css"
import Menu from "./components/Menu"
import TriviaQuestion from "./components/TriviaQuestion"

function App() {
  const [triviaQuestions, setTriviaQuestions] = React.useState({
    questions: null,
    loading: false
  })

  /**
   * The `if` statement and `chosenQuestions` declaration immediately below are needed once the trivia questions have been fetched and the game begins.
   * First, it creates `questionElements` in global scope.
   * Then, if the questions have been fetched, map over them and create the <TriviaQuestion /> elements for the app
   * */ 
  let questionElements = null;
  if(triviaQuestions.questions) {
    let chosenQuestions = triviaQuestions.questions.results;
    questionElements = chosenQuestions.map((question, index) => {
      return <TriviaQuestion
        key = {nanoid()}
        id = {index}
        category = {question.category}
        answer = {question.correct_answer}
        incorrect_answers = {question.incorrect_answers}
        question = {question.question}
        type = {question.type}
      />
    })
  }

  return (
    <div className="App">

      { /* If questions exist, display menu. Otherwise, display trivia questions */
        !triviaQuestions.questions ?
        <Menu triviaQuestions={triviaQuestions} setTriviaQuestions={setTriviaQuestions}/> :
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