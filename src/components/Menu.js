import React, { useEffect } from 'react'

export default function Menu(props) {

    const [settings, setSettings] = React.useState({
        id: "settings",
        questions: 5,
        category: "any",
        difficulty: "any"
    })
    const [fetching, setFetching] = React.useState(false)
    const [apiUrl, setApiUrl] = React.useState("https://opentdb.com/api.php?amount=5")
    // const [triviaQuestions, setTriviaQuestions] = React.useState([])


    // Fetch the trivia questions from the API according the the URL in state
    useEffect(() => {
        if(fetching === true) {
            fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => props.setTriviaQuestions(data))
                .catch((err) => {
                    console.log(err.message)
                })
            setFetching(false)
        }
    }, [fetching])

    useEffect(() => {

        let questions = settings.questions;
        let category = "";
        let difficulty = "";

        // Set category to correct string for URL depending on settings
        switch(settings.category) {
            case "general":
                category="&category=9"
                break;
            case "books":
                category="&category=10"
                break;
            case "film":
                category="&category=11"
                break;
            case "music":
                category="&category=12"
                break;
            case "musicals":
                category="&category=13"
                break;
            case "television":
                category="&category=14"
                break;
            case "video games":
                category="&category=15"
                break;
            case "board games":
                category="&category=16"
                break;
            case "science":
                category="&category=17"
                break;
            case "computers":
                category="&category=18"
                break;
            case "mathematics":
                category="&category=19"
                break;
            case "mythology":
                category="&category=20"
                break;
            case "sports":
                category="&category=21"
                break;
            case "geography":
                category="&category=22"
                break;
            case "history":
                category="&category=23"
                break;
            case "politics":
                category="&category=24"
                break;
            case "art":
                category="&category=25"
                break;
            case "celebrities":
                category="&category=26"
                break;
            case "animals":
                category="&category=27"
                break;
            default:
                category = ""
        }

        // Set difficulty to correct string for URL depending on settings
        switch(settings.difficulty) {
            case "easy":
                difficulty="&difficulty=easy"
                break;
            case "medium":
                difficulty="&difficulty=medium"
                break;
            case "hard":
                difficulty="&difficulty=hard"
                break;
            default:
                difficulty = ""
        }

        // Use variables declared above in local scope to create custom API URL based on settings
        setApiUrl(`https://opentdb.com/api.php?amount=${questions}${category}${difficulty}`)
    }, [settings])

    // When "Start Quiz" is clicked, set `fetching` to true. This will trigger the useEffect hook to fetch the trivia questions from the API
    function fetchApi() {
        setFetching(true)
    }

    // On settings input change, update settings state to new value
    function settingsChange(event) {
        setSettings(prevSettings => {
            return {
                ...prevSettings,
                [event.target.name]: event.target.value
            }
        })
    }

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
                <button className="menu--button start" onClick={fetchApi}>Start Quiz</button>
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
 *        pass that to state so it can be used to create the quiz DONE
 * 
 * 
 *  - State needed so far: Settings and API URL
 */