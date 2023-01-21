import React from "react"
import { nanoid } from "nanoid"

export default function TriviaQuestion({id, category, answer, incorrect_answers, question, type}) {

    // Function to shuffle an array
    function shuffle(array) {
        let currentIndex = array.length;
        let randomIndex;

        while(currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * array.length);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    // Shuffle the answer with the incorrect answers
    const possibleAnswers = shuffle([answer, ...incorrect_answers])

    let answerElements = possibleAnswers.map((answer) => {
        return <button className="question--answers" key={nanoid()}>{answer}</button>
    })

    return (
        <div>
            <h2 className="question--title">{id + 1}: {question}</h2>
            <div className="question--answers-container">
                {answerElements}
            </div>
            <hr className="question--divider"></hr>
        </div>
    )
}