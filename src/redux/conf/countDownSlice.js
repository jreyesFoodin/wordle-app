import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  time: 300, // 5 minutes in seconds
  isRunning: false
}

const userCountDown = createSlice({
  name: 'countDown',
  initialState,
  reducers: {
    startCountdown: (state, action) => {
      return { ...state, isRunning: true }
    },
    decrementTime: (state) => {
      return { ...state, time: state.time - 1 }
    },
    resetCountdown: (state) => {
      return initialState
    }
  }
})

export const { startCountdown, decrementTime, resetCountdown } = userCountDown.actions
export default userCountDown.reducer
