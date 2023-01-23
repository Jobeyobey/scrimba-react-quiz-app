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
  const [score, setScore] = React.useState(0)

  // If checking answers, iterate through triviaQuestions and compare `selected_answer` to `correct_answer` to calculate score
  React.useEffect(() => {
    if (appStates.checking_answers) {
      let scoreTracker = 0;
      for (let i = 0 ; i < triviaQuestions.length ; i++) {
        // Assigning variables for easier legibility when checking answer
        let possible_answers = triviaQuestions[i].possible_answers;
        let selected_answer = triviaQuestions[i].selected_answer;
        let answer = triviaQuestions[i].correct_answer;
        if (possible_answers[selected_answer] === answer) {
          scoreTracker += 1;
        }
      }
      setScore(scoreTracker)
    }
  }, [appStates])

  /**
   * The `if` statement and `questionElements` below are for when `triviaQuestions` have been fetched
   * First, it creates `questionElements` in global scope.
   * Then, if triviaQuestions exists, map over it to create a <TriviaQuestion /> for each question
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
        selected_answer = {question.selected_answer}
        selectAnswer = {selectAnswer}
        checking_answers = {appStates.checking_answers}
      />
    })
  }

  // When an answer in <TriviaQuestion /> is clicked, change `selected_answer` to the index of that answer
  // Only runs if not currently checking answers to stop player changing answers at game end.
  function selectAnswer(questionIndex, answerIndex) {
    if(!appStates.checking_answers) {
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
  }

  function checkAnswers() {
    // If any selected_answer property is null, answeredArray.length will be greater than 0
    let answeredArray = triviaQuestions.filter(question => {
      return question.selected_answer === null
    })
    // If all questions have been answered, check answers
    if(answeredArray.length === 0) {
      setAppStates(prevState => {
        return {
          ...prevState,
          checking_answers: true
        }
      })
    } else {
      alert("Answer all questions before checking answers.")
    }
  }

  // Reset game state to default
  function resetGame() {
    setTriviaQuestions(false);
    setAppStates({
      fetching_questions: false,
      checking_answers: false
    });
    setScore(0);
  }
  
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
          {appStates.checking_answers &&
            <h2 className="trivia--score">You scored {score}/{triviaQuestions.length}!</h2>
          }
          {
            appStates.checking_answers ?
            <button
              className="main--button trivia--screen"
              onClick={resetGame}
              >
                Main Menu
            </button> :
            <button
              className="main--button trivia--screen"
              onClick={checkAnswers}
              >
                Check Answers
            </button>
          }
        </div>
      }

    </div>
  );
}

export default App;


/** TO DO:
 * - Works on mobile?
 * - Alter any text I'm not happy with
 */