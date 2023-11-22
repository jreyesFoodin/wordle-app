import { useEffect, useState } from 'react'
import wordArray from './constants/constants.json'
const App = () => {
  const [words, setWords] = useState([])
  useEffect(() => {
    getWordsFiveLetters()
  }, [])
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }
  const getWordsFiveLetters = () => {
    const shuffledArray = shuffleArray([...wordArray])
    const palabrasCincoLetras = shuffledArray.filter((palabra) => palabra.length === 5).slice(0, 1)
    setWords(palabrasCincoLetras[0])
  }
  return (
    <>

    </>
  )
}

export default App
