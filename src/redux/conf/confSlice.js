import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  word: '',
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
  ],
  isModalOpen: true
}

const userConf = createSlice({
  name: 'conf',
  initialState,
  reducers: {
    saveTodayWord: (state, action) => {
      state.word = action.payload
    },
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload
    },
    resetConf: (state) => {
      return initialState
    }
  }
})

export const { saveTodayWord, setIsModalOpen, resetConf } = userConf.actions
export default userConf.reducer
