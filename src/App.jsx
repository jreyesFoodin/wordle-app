import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveTodayWord, setIsModalOpen } from './redux/conf/confSlice'
import { resetCountdown } from './redux/conf/countDownSlice'
import { resetHistory } from './redux/conf/historySlice'
import wordArray from './constants/constants.json'
import ModalHowToPlay from './components/ModalHowToPlay'
import Container from './components/Container'

const App = () => {
  const { word, isModalOpen } = useSelector((state) => state.confState)
  const { time } = useSelector((state) => state.countDownState)
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    if (word === '' || (time === 0)) {
      searchForTheWordOfTheDay()
    }
  }, [time])
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }
  const searchForTheWordOfTheDay = () => {
    const shuffledArray = shuffleArray([...wordArray])
    const selectedWord = shuffledArray
      .filter((word) => word.length === 5)
      .slice(0, 1)
      .map((word) => word.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
    dispatch(saveTodayWord(selectedWord[0]))
    dispatch(resetCountdown())
    dispatch(resetHistory())
    setShowModal(false)
  }
  const closeModal = () => {
    dispatch(setIsModalOpen(false))
  }
  return (
    <>
      {isModalOpen && <ModalHowToPlay isModalOpen={isModalOpen} closeModal={closeModal} />}
      {!isModalOpen && <Container word={word} showModal={showModal} setShowModal={setShowModal} />}
    </>
  )
}

export default App
