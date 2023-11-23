import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveTodayWord } from './redux/conf/confSlice'
import useApp from './hooks/useApp'
import wordArray from './constants/constants.json'
import KeyPad from './components/Keypad'
import Grid from './components/Grid'

const App = () => {
  const { word, timer } = useSelector((state) => state.confState)
  const { usedKeys, guesses, currentGuess, turn, handleKeyup, isCorrect } = useApp(word)
  const dispatch = useDispatch()
  useEffect(() => {
    if (word === '' || timer === 0) {
      searchForTheWordOfTheDay()
    }
  }, [])
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }
  const searchForTheWordOfTheDay = () => {
    const shuffledArray = shuffleArray([...wordArray])
    const selectedWord = shuffledArray.filter((word) => word.length === 5).slice(0, 1)
    dispatch(saveTodayWord(selectedWord[0]))
  }
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    if (isCorrect) {
      // setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
    }
    if (turn > 5) {
      // setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])
  console.log(word)
  return (
    <>
      <h1>{word}</h1>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <KeyPad usedKeys={usedKeys} />
    </>
  )
}

export default App
