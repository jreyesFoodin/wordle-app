import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveTodayWord } from './redux/conf/confSlice'
import { resetCountdown } from './redux/conf/countDownSlice'
import { resetHistory } from './redux/conf/historySlice'
import useApp from './hooks/useApp'
import wordArray from './constants/constants.json'
import KeyPad from './components/Keypad'
import Grid from './components/Grid'
// import ModalHowToPlay from './components/ModalHowToPlay'
import ModalAlert from './components/ModalAlert'

const App = () => {
  // const [isModalOpen, setIsModalOpen] = useState(true)
  const { word } = useSelector((state) => state.confState)
  const { time } = useSelector((state) => state.countDownState)
  const { usedKeys, guesses, currentGuess, turn, handleKeyup, isCorrect, solution } = useApp(word)
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    if (word === '' || time === 0) {
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
    dispatch(resetCountdown())
    dispatch(resetHistory())
  }
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)
    if (isCorrect || turn > 5) {
      setTimeout(() => setShowModal(true), 1000)
      window.removeEventListener('keyup', handleKeyup)
    }
    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])
  // const closeModal = () => {
  //   setIsModalOpen(false)
  // }
  return (
    <>
      {/* <ModalHowToPlay isModalOpen={isModalOpen} closeModal={closeModal} /> */}
      {showModal && <ModalAlert isCorrect={isCorrect} turn={turn} solution={solution} />}
      <h1>{word}</h1>
      {!showModal && (
        <>
          <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
          <KeyPad usedKeys={usedKeys} />
        </>
      )}
    </>
  )
}

export default App
