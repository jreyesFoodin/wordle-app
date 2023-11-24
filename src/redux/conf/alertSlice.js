import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  showAlert: false,
  message: '',
  alertType: 'warning'
}

const userAlert = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (state, action) => {
      return {
        showAlert: true,
        message: action.payload.message,
        alertType: action.payload.alertType || 'warning'
      }
    },
    hideAlert: (state) => {
      return initialState
    }
  }
})

export const { showAlert, hideAlert } = userAlert.actions
export default userAlert.reducer
