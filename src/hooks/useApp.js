import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setGuesses, setHistory, setTurn, setUsedKeys } from '../redux/conf/historySlice'

const useApp = (solution) => {
  const { guesses, turn, history, usedKeys } = useSelector((state) => state.historyState)
  const [currentGuess, setCurrentGuess] = useState('')
  const [isCorrect, setIsCorrect] = useState(false)
  const dispatch = useDispatch()
  const formatGuess = () => {
    const solutionArray = [...solution]
    const formattedGuess = [...currentGuess].map((l) => {
      return { key: l, color: 'grey' }
    })
    formattedGuess.forEach((l, i) => {
      if (solution[i] === l.key) {
        formattedGuess[i].color = 'green'
        solutionArray[i] = null
      }
    })

    formattedGuess.forEach((l, i) => {
      if (solutionArray.includes(l.key) && l.color !== 'green') {
        formattedGuess[i].color = 'yellow'
        solutionArray[solutionArray.indexOf(l.key)] = null
      }
    })
    return formattedGuess
  }

  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true)
    }
    dispatch(setGuesses([...guesses.slice(0, turn), formattedGuess, ...guesses.slice(turn + 1)]))
    dispatch(setHistory([...history, currentGuess]))
    dispatch(setTurn(turn + 1))
    const updatedUsedKeys = { ...usedKeys }
    formattedGuess.forEach(l => {
      const currentColor = updatedUsedKeys[l.key]

      if (l.color === 'green') {
        updatedUsedKeys[l.key] = 'green'
        return
      }
      if (l.color === 'yellow' && currentColor !== 'green') {
        updatedUsedKeys[l.key] = 'yellow'
        return
      }
      if (l.color === 'grey' && currentColor !== ('green' || 'yellow')) {
        updatedUsedKeys[l.key] = 'grey'
      }
    })
    dispatch(setUsedKeys(updatedUsedKeys))
    setCurrentGuess('')
  }

  const handleKeyup = ({ key }) => {
    if (key === 'Enter') {
      if (turn > 5) {
        console.log('you used all your guesses!')
        return
      }
      if (history.includes(currentGuess)) {
        console.log('you already tried that word.')
        return
      }
      if (currentGuess.length !== 5) {
        console.log('word must be 5 chars.')
        return
      }
      const formatted = formatGuess()
      addNewGuess(formatted)
    }
    if (key === 'Backspace') {
      setCurrentGuess(prev => prev.slice(0, -1))
      return
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess(prev => prev + key)
      }
    }
  }

  return { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup }
}

export default useApp
