import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveTodayWord } from './redux/conf/confSlice'
import useApp from './hooks/useApp'
import wordArray from './constants/constants.json'
import KeyPad from './components/Keypad'

const App = () => {
  const { word, timer } = useSelector((state) => state.confState)
  const { usedKeys } = useApp(word)
  const dispatch = useDispatch()
  useEffect(() => {
    if (word === '' && timer === 0) {
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
  return (
    <>
      <h1>{word}</h1>
      <KeyPad usedKeys={usedKeys} />
    </>
  )
}

export default App
