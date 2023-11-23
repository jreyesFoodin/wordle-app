import { useEffect } from 'react'
import ModalAlert from './ModalAlert'
import Grid from './Grid'
import Keypad from './Keypad'
import useApp from '../hooks/useApp'
import Alert from './Alert'
import Navbar from './Navbar'

const Container = ({ word, showModal, setShowModal }) => {
  const { usedKeys, guesses, currentGuess, turn, handleKeyup, isCorrect } = useApp(word)
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)
    if (isCorrect || turn > 5) {
      setTimeout(() => setShowModal(true), 1000)
      window.removeEventListener('keyup', handleKeyup)
    }
    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])
  return (
    <>
      {showModal && <ModalAlert isCorrect={isCorrect} turn={turn} solution={word} />}
      {/* <h1>{word}</h1> */}
      <Navbar title={word} />
      {!showModal && (
        <>
          <Alert />
          <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
          <Keypad usedKeys={usedKeys} />
        </>
      )}
    </>
  )
}
export default Container
