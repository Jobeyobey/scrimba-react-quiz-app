import React from "react"
import { nanoid } from "nanoid"

export default function TriviaQuestion({questionIndex, question, answer, possible_answers, selected_answer, selectAnswer, checking_answers}) {


    // Create a button for each element in `possible_answers`
    let answerElements = possible_answers.map((possible_answer, index) => {

        // Set default button style
        let styling = `question--answers`

        // If checking answers, style buttons accordingly.
        // Else, highlight selected button (if there are any)
        if(checking_answers) {
            if(possible_answer === answer) {
                styling = `question--answers correct`
            } else if (selected_answer === index && possible_answer !== answer) {
                styling = `question--answers incorrect`
            } else {
                styling = `question--answers not-selected`
            }
        } else {
            if(selected_answer === index) {
                styling = `question--answers selected`
            }
        }


        return (
            <button
            className = {styling}
            key = {nanoid()}
            questionindex = {questionIndex}
            answerid = {index}
            onClick = {() => selectAnswer(questionIndex, index)}
            >
                {possible_answer}
            </button>
        )
    })

    return (
        <div>
            <h2 className="question--title">{questionIndex + 1}: {question}</h2>
            <div className="question--answers-container">
                {answerElements}
            </div>
            <hr className="question--divider"></hr>
        </div>
    )
}