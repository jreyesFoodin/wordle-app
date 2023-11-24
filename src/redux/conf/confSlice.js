import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  word: '',
  letters: [
    { key: 'Q' },
    { key: 'W' },
    { key: 'E' },
    { key: 'R' },
    { key: 'T' },
    { key: 'Y' },
    { key: 'U' },
    { key: 'I' },
    { key: 'O' },
    { key: 'P' },
    { key: 'A' },
    { key: 'S' },
    { key: 'D' },
    { key: 'F' },
    { key: 'G' },
    { key: 'H' },
    { key: 'J' },
    { key: 'K' },
    { key: 'L' },
    { key: 'Ñ' },
    { key: 'Enter' },
    { key: 'Z' },
    { key: 'X' },
    { key: 'C' },
    { key: 'V' },
    { key: 'B' },
    { key: 'N' },
    { key: 'M' },
    { key: 'Backspace' }
  ],
  isModalOpen: true,
  showModal: false,
  modalControl: false
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
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload
    },
    setModalControl: (state, action) => {
      state.modalControl = action.payload
    },
    resetTodayWord: (state) => {
      state.word = ''
    }
  }
})

export const { saveTodayWord, setIsModalOpen, resetConf, resetTodayWord, setShowModal, setModalControl } = userConf.actions
export default userConf.reducer
