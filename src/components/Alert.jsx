import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hideAlert } from '../redux/conf/alertSlice'

const Alert = () => {
  const dispatch = useDispatch()
  const { showAlert, message, alertType } = useSelector((state) => state.alertState)

  useEffect(() => {
    let timeout

    if (showAlert) {
      timeout = setTimeout(() => {
        dispatch(hideAlert())
      }, 5000)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [dispatch, showAlert])

  return (
    showAlert && (
      <div
        className={`fixed top-0 right-0 m-4 p-4 bg-${alertType}-500 text-white rounded shadow-lg`}
      >
        <p>{message}</p>
      </div>
    )
  )
}

export default Alert
