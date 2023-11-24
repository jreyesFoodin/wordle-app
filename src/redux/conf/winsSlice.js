import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  wins: 0
}

const userWins = createSlice({
  name: 'wins',
  initialState,
  reducers: {
    setWins: (state, action) => {
      state.wins = action.payload
    },
    resetWins: (state) => {
      return initialState
    }
  }
})

export const { setWins, resetWins } = userWins.actions
export default userWins.reducer
