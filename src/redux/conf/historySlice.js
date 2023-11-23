import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  guesses: [...Array(5)],
  history: [],
  turn: 0,
  usedKeys: {},
  currentGuess: '',
  isCorrect: false
}

const userHistory = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setGuesses: (state, action) => {
      state.guesses = action.payload
    },
    setTurn: (state, action) => {
      state.turn = action.payload
    },
    setHistory: (state, action) => {
      state.history = action.payload
    },
    setUsedKeys: (state, action) => {
      state.usedKeys = action.payload
    },
    setCurrentGuess: (state, action) => {
      state.currentGuess = action.payload
    },
    setIsCorrect: (state, action) => {
      state.isCorrect = action.payload
    },
    resetHistory: (state) => {
      return initialState
    }
  }
})

export const { setGuesses, setHistory, setTurn, setUsedKeys, setCurrentGuess, setIsCorrect, resetHistory } = userHistory.actions
export default userHistory.reducer
