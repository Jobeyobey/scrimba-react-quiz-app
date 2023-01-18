import React from 'react'

export default function Menu() {
    const [settings, setSettings] = React.useState({
        id: "settings",
        questions: 5,
        category: null,
        difficulty: null
    })

    console.log(settings)

    return (
        <div className="menu">
            <h1 className="menu--title">Quizzical</h1>
            <p className="menu--description">This is a simple quiz game where you'll be asked questions from Open Trivia DB
                and then you'll look like a fool when you get them wrong</p>
            
            <div>
                <button className="menu--button start">Start Quiz</button>
            </div>
            <div>
                <select>
                    <option>5 Questions</option>
                </select>
                <select>
                    <option>Any Category</option>
                </select>
                <select>
                    <option>Any difficulty</option>
                </select>
            </div>
        </div>
    )
}

/**
 * For the menu, I need:
 *  - A title <h1> DONE
 *  - A description <p> DONE
 *  - A settings button <button>
 *      - When settings button is clicked, reveal options
 *          - Elements that for drop-down menus for Number of questions, category and difficulty
 *  - A 'start' button <button>
 *      - When clicked, it must create a custom API URL based on the settings chosen and
 *        pass that to state so it can be used to create the quiz
 * 
 * 
 *  - State needed so far: Settings and API URL
 */