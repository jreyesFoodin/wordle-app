import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  word: '',
  timer: 300,
  letters: [
    { key: 'a' },
    { key: 'b' },
    { key: 'c' },
    { key: 'd' },
    { key: 'e' },
    { key: 'f' },
    { key: 'g' },
    { key: 'h' },
    { key: 'i' },
    { key: 'j' },
    { key: 'k' },
    { key: 'l' },
    { key: 'm' },
    { key: 'n' },
    { key: 'ñ' },
    { key: 'o' },
    { key: 'p' },
    { key: 'q' },
    { key: 'r' },
    { key: 's' },
    { key: 't' },
    { key: 'u' },
    { key: 'v' },
    { key: 'w' },
    { key: 'x' },
    { key: 'y' },
    { key: 'z' }
  ]
}

const userConf = createSlice({
  name: 'conf',
  initialState,
  reducers: {
    saveTodayWord: (state, action) => {
      state.word = action.payload
    },
    resetConf: (state) => {
      return initialState
    }
  }
})

export const { saveTodayWord, resetConf } = userConf.actions
export default userConf.reducer
