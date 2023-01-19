import React, { useEffect } from 'react'

export default function Menu() {
    const [settings, setSettings] = React.useState({
        id: "settings",
        questions: 5,
        category: "",
        difficulty: ""
    })
    const [apiUrl, setApiUrl] = React.useState("https://opentdb.com/api.php?amount=5")


    // Fetch the trivia questions from the API according the the URL in state
    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => {
                console.log(err.message)
            })
    }, [])

    // On settings input change, update settings state to new value
    function settingsChange(event) {
        setSettings(prevSettings => {
            return {
                ...prevSettings,
                [event.target.name]: event.target.value
            }
        })
    }
    console.log(settings)

    return (
        <div className="menu">
            {/* Title and description */}
            <h1 className="menu--title">Quizzical</h1>
            <p className="menu--description">
                This is a simple quiz game where you'll be asked questions from Open Trivia DB
                and then you'll look like a fool when you get them wrong
            </p>
            {/* Settings drop down menus */}
            <div>
                <select value={settings.questions} name="questions" onChange={settingsChange}>
                    <option value="5">5 Questions</option>
                    <option value="6">6 Questions</option>
                    <option value="7">7 Questions</option>
                    <option value="8">8 Questions</option>
                    <option value="9">9 Questions</option>
                    <option value="10">10 Questions</option>
                </select>
                <select value={settings.category} name="category" onChange={settingsChange}>
                    <option value="any">Any Category</option>
                    <option value="general">General Knowledge</option>
                    <option value="books">Books</option>
                    <option value="film">Film</option>
                    <option value="music">Music</option>
                    <option value="musicals">Musicals & Theaters</option>
                    <option value="television">Television</option>
                    <option value="video games">Video Games</option>
                    <option value="board games">Board Games</option>
                    <option value="science">Science & Nature</option>
                    <option value="computers">Computers</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="mythology">Mythology</option>
                    <option value="sports">Sports</option>
                    <option value="geography">Geography</option>
                    <option value="history">History</option>
                    <option value="politics">Politics</option>
                    <option value="art">Art</option>
                    <option value="celebrities">Celebrities</option>
                    <option value="animals">Animals</option>
                </select>
                <select value={settings.difficulty} name="difficulty" onChange={settingsChange}>
                    <option value="any">Any difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            {/* Start button */}
            <div>
                <button className="menu--button start">Start Quiz</button>
            </div>
        </div>
            
    )
}

/**
 * For the menu, I need:
 *  - A title <h1> DONE
 *  - A description <p> DONE
 *  - A settings button <button> - DONE
 *      - When settings button is clicked, reveal options - REMOVED, no point, just have settings always available
 *          - Elements that for drop-down menus for Number of questions, category and difficulty - DONE
 *  - A 'start' button <button>
 *      - When clicked, it must create a custom API URL based on the settings chosen and
 *        pass that to state so it can be used to create the quiz
 * 
 * 
 *  - State needed so far: Settings and API URL
 */