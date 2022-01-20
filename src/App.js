import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
function App() {
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];
  return (
    <div className="container" data-test="app-component">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]} />
    </div>
  );
}

export default App;
