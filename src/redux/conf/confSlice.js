import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  word: '',
  timer: 300
}

const userAuth = createSlice({
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

export const { saveTodayWord, resetConf } = userAuth.actions
export default userAuth.reducer
