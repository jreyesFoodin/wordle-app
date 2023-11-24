import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  word: '',
  letters: [
    { key: 'q', label: 'Q' },
    { key: 'w', label: 'w' },
    { key: 'e', label: 'E' },
    { key: 'r', label: 'R' },
    { key: 't', label: 'T' },
    { key: 'y', label: 'Y' },
    { key: 'u', label: 'U' },
    { key: 'i', label: 'I' },
    { key: 'o', label: 'O' },
    { key: 'p', label: 'P' },
    { key: 'a', label: 'A' },
    { key: 's', label: 'S' },
    { key: 'd', label: 'D' },
    { key: 'f', label: 'F' },
    { key: 'g', label: 'G' },
    { key: 'h', label: 'H' },
    { key: 'j', label: 'J' },
    { key: 'k', label: 'K' },
    { key: 'l', label: 'L' },
    { key: 'ñ', label: 'Ñ' },
    { key: 'Enter', label: 'Enter' },
    { key: 'z', label: 'Z' },
    { key: 'x', label: 'X' },
    { key: 'c', label: 'C' },
    { key: 'v', label: 'V' },
    { key: 'b', label: 'B' },
    { key: 'n', label: 'N' },
    { key: 'm', label: 'M' },
    { key: 'Backspace', label: '<=' }
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
