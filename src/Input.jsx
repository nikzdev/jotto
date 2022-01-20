import { useState } from 'react'

const Input = ({ success, secretWord }) => {
    const [currentGuess, setCurrentGuess] = useState("")

    if (success) {
        return <div data-test="component-input" />
    }
    return (
        <div data-test="input-component">
            <form className='form-inline'>
                <input
                    data-test="input-box"
                    className='mb-2 mx-sm-3'
                    type="text"
                    placeholder='enter guess'
                    value={currentGuess}
                    onChange={(e) => setCurrentGuess(e.target.value)}
                />
                <button data-test="submit-button" className='btn btn-primary mb-2'
                    onClick={(e) => {
                        e.preventDefault()
                        setCurrentGuess("")
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Input
