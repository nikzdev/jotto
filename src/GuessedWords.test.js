import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
}
const setup = (props = {}) => {
    const setUpProps = { ...defaultProps, ...props }
    return shallow(<GuessedWords {...setUpProps} />)
}

describe("if there are no words guessed", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });
    test("render without error", () => {
        const component = findByTestAttr(wrapper, "component-guessed-words");
        expect(component.length).toBe(1);
    });
    test("renders instructions to guess a word", () => {
        const instruction = findByTestAttr(wrapper, "guess-instructions");
        expect(instruction.text().length).not.toBe(0);
    });
});

describe('if there are words guessed', () => {
    let wrapper;
    let guessedWords = [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'party', letterMatchCount: 5 },
        { guessedWord: 'agile', letterMatchCount: 1 }
    ]
    beforeEach(() => {
        wrapper = setup({ guessedWords })
    })
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, "component-guessed-words");
        expect(component.length).toBe(1);
    })
    test('renders guessed words section', () => {
        const guessedWordNode = findByTestAttr(wrapper, "guessed-words")
        expect(guessedWordNode.length).toBe(1);
    });
    test('correct number of guessed words', () => {
        const guessedWordsNodes = findByTestAttr(wrapper, "guessed-word");
        expect(guessedWordsNodes.length).toBe(guessedWords.length)
    })
})