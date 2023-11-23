import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveTodayWord, setIsModalOpen, setModalControl } from './redux/conf/confSlice'
import { maxCurrentGuess } from './constants/Option'
import wordArray from './constants/constants.json'
import ModalHowToPlay from './components/ModalHowToPlay'
import Container from './components/Container'

const App = () => {
  const { word, isModalOpen } = useSelector((state) => state.confState)
  const dispatch = useDispatch()
  useEffect(() => {
    if (word === '') {
      searchForTheWordOfTheDay()
    }
  }, [word])
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }
  const searchForTheWordOfTheDay = () => {
    dispatch(setModalControl(false))
    const shuffledArray = shuffleArray([...wordArray])
    const selectedWord = shuffledArray
      .filter((word) => word.length === maxCurrentGuess)
      .slice(0, 1)
      .map((word) => word.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
    dispatch(saveTodayWord(selectedWord[0]))
  }
  const closeModal = () => {
    dispatch(setIsModalOpen(false))
  }
  return (
    <>
      {isModalOpen && <ModalHowToPlay isModalOpen={isModalOpen} closeModal={closeModal} />}
      {!isModalOpen && <Container word={word} />}
    </>
  )
}

export default App
