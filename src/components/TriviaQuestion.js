import React from "react"
import { nanoid } from "nanoid"

export default function TriviaQuestion({questionId, question, answer, possible_answers, selectAnswer}) {


    // Create a button for each element in `possible_answers`
    let answerElements = possible_answers.map((possible_answer) => {
        return (
            <button
            className = "question--answers"
            key = {nanoid()}
            questionId = {questionId + 1}
            id = {possible_answer}
            onClick = {selectAnswer}
            >
                {possible_answer}
            </button>
        )
    })

    return (
        <div>
            <h2 className="question--title">{questionId + 1}: {question}</h2>
            <div className="question--answers-container">
                {answerElements}
            </div>
            <hr className="question--divider"></hr>
        </div>
    )
}


/**
 * Each answer must be an object, with a `id`, `question`, `selected` and `correct` value.
 * When clicked, `selected` must become true on the relevant `id`, it must become false on all others.
 * When answers are checked, if an answer is both `selected` and `true`, it is correct and highlighted green. Correct answer count must increase by 1.
 * If an answer is both `selected` and `false`, it is wrong and highlighted red
 * If an answer is both `unselected` and `true`, it must become highlighted light green
 * 
 * It may be easier if answers are turned into their objects, shuffled into an array and then passed to TriviaQuestions.
 * I may need a "checking answers" state as well.
 */

/** To select an answer:
 * onClick, run a function. Pass the id of the question as a parameter
 * 
 */