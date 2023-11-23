import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { decrementTime, startCountdown } from '../redux/conf/countDownSlice'

const CountdownTimer = () => {
  const dispatch = useDispatch()
  const { time, isRunning } = useSelector((state) => state.countDownState)
  useEffect(() => {
    let interval
    dispatch(startCountdown())
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        dispatch(decrementTime())
      }, 1000)
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
