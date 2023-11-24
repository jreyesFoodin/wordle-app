import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setShowModal, setModalControl } from '../redux/conf/confSlice'
import ModalAlert from './ModalAlert'
import Grid from './Grid'
import Keypad from './Keypad'
import useApp from '../hooks/useApp'
import Alert from './Alert'
import Navbar from './Navbar'

const Container = ({ word }) => {
  const dispatch = useDispatch()
  const { isCorrect, turn } = useSelector((state) => state.historyState)
  const { showModal, modalControl } = useSelector((state) => state.confState)
  const { wins } = useSelector((state) => state.winsState)
  const { usedKeys, guesses, currentGuess, handleKeyup, handledModal } = useApp(word)
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)
    if ((isCorrect || turn > 5) && !modalControl) {
      setTimeout(() => {
        dispatch(setShowModal(true))
        dispatch(setModalControl(true))
        window.removeEventListener('keyup', handleKeyup)
      }, 2000)
    }
    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])
  return (
    <>
      {showModal && <ModalAlert isCorrect={isCorrect} turn={turn} solution={word} wins={wins} />}
      <Navbar title={word} handledModal={handledModal} />
      {!showModal && (
        <>
          <Alert />
          <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
          <Keypad usedKeys={usedKeys} handleKeyup={handleKeyup} />
        </>
      )}
    </>
  )
}
export default Container
