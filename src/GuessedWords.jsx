

const GuessedWords = ({ guessedWords }) => {
    let contents;
    if (guessedWords.length === 0) {
        contents = (

            <span data-test="guess-instructions">
                Try to guess the secret word!
            </span>
        )
    } else {
        const guessedWordsRows = guessedWords.map((word, index) => (
            <tr data-test="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ))
        contents = (
            <div data-test="guessed-words">
                <h3>Guessed Words</h3>
                <table className="table table-sm">
                    <thead className="thead-light">
                        <tr><th>Guess</th></tr>
                        <tr><th>Matching letters</th></tr>
                    </thead>
                    {guessedWordsRows}
                </table>
            </div>
        )
    }
    return (
        <div data-test="component-guessed-words">
            {contents}
        </div>
    )
}

export default GuessedWords
