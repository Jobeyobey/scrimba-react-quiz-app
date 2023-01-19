import React from "react"
import "./style.css"
import Menu from "./components/Menu"

function App() {
  const [triviaQuestions, setTriviaQuestions] = React.useState(null)
  
  console.log(triviaQuestions);

  return (
    <div className="App">
      <Menu setTriviaQuestions={setTriviaQuestions} />
    </div>
  );
}

export default App;
