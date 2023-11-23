import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { decrementTime, startCountdown, resetCountdown } from '../redux/conf/countDownSlice'
import { resetHistory } from '../redux/conf/historySlice'
import { resetTodayWord, setShowModal } from '../redux/conf/confSlice'

const CountdownTimer = () => {
  const dispatch = useDispatch()
  const { time, isRunning } = useSelector((state) => state.countDownState)
  const { isCorrect, turn } = useSelector((state) => state.historyState)
  useEffect(() => {
    let interval
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        dispatch(decrementTime())
      }, 1000)
    }
    const handleTimeZero = async () => {
      if (isRunning && time === 0) {
        await dispatch(resetHistory())
        await dispatch(resetTodayWord())
        await dispatch(resetCountdown())
        await dispatch(setShowModal(false))
      }
    }
    handleTimeZero()
    if (isCorrect || turn > 5) {
      dispatch(startCountdown())
    }
    return () => {
      clearInterval(interval)
    }
  }, [dispatch, isRunning, time])
  const formatTime = () => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }
  return (
    <div>
      <p>Siguiente Palabra: </p>
      <p>{formatTime()}</p>
    </div>
  )
}

export default CountdownTimer
