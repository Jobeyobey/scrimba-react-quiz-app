import React from "react"
import "./style.css"
import Menu from "./components/Menu"
import TriviaQuestion from "./components/TriviaQuestion"

function App() {
  const [triviaQuestions, setTriviaQuestions] = React.useState({
    questions: null,
    loading: false
  })
  
  console.log(triviaQuestions);

  return (
    <div className="App">
      {
        !triviaQuestions.questions ?
        <Menu triviaQuestions={triviaQuestions} setTriviaQuestions={setTriviaQuestions}/> :
        <TriviaQuestion />
      }
    </div>
  );
}

export default App;
