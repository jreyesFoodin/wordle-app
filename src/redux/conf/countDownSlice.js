import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  time: 10, // 300 segundos
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
      if (state.time - 1 <= 0) {
        return { ...state, isRunning: false, time: 0 }
      } else {
        return { ...state, time: state.time - 1 }
      }
    },
    resetCountdown: (state) => {
      return { ...initialState }
    }
  }
})

export const { startCountdown, decrementTime, resetCountdown } = userCountDown.actions
export default userCountDown.reducer
