

const Congrats = ({ success }) => {
    return (
        <div className="mt-3 mb-3">
            {success ? <span className="alert alert-success" data-test="congrats-message">Congrats you guessed the word</span> : <span data-test="component-congrats"></span>}

        </div>
    )
}

export default Congrats
