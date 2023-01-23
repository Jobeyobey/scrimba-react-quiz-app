import React from "react"
import { nanoid } from "nanoid"
import DOMPurify from "dompurify"

export default function TriviaQuestion({questionIndex, question, answer, possible_answers, selected_answer, selectAnswer, checking_answers}) {

    // Sanitize the question so there can be no cross site scripting when using `dangerouslySetInnerHTML`
    let sanitizedQuestion = DOMPurify.sanitize(question)

    // Create a button for each element in `possible_answers`
    let answerElements = possible_answers.map((possible_answer, index) => {
        
        // Set default button style
        let styling = `question--answers`
        // If checking answers, style buttons accordingly.
        if(checking_answers) {
            if(possible_answer === answer) {
                styling = `question--answers correct`
            } else if (selected_answer === index && possible_answer !== answer) {
                styling = `question--answers incorrect`
            } else {
                styling = `question--answers not-selected`
            }
        // Else, highlight selected button (if there are any)
        } else {
            if(selected_answer === index) {
                styling = `question--answers selected`
            }
        }

        // Sanitizing answer
        let sanitizedAnswer = DOMPurify.sanitize(possible_answer)

        return (
            <button
            className = {styling}
            key = {nanoid()}
            questionindex = {questionIndex}
            answerid = {index}
            onClick = {() => selectAnswer(questionIndex, index)}
            dangerouslySetInnerHTML={{__html: sanitizedAnswer}}
            />
        )
    })

    return (
        <div>
            <h2 className="question--title" dangerouslySetInnerHTML={{__html: questionIndex+1 + ": " + sanitizedQuestion}}/>
            <div className="question--answers-container">
                {answerElements}
            </div>
            <hr className="question--divider"></hr>
        </div>
    )
}