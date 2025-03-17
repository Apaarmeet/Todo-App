import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'


// Define a type for the slice state
export interface popupState {
  value: boolean
}

// Define the initial state using that type
const initialState: popupState = {
  value: false
}

export const popupSlice = createSlice({
  name: 'popup',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   showPopup: state => {
      state.value = true
    },
    hidePopup: state => {
      state.value = false
    },
  }
})

export const { showPopup,hidePopup } = popupSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPopup = (state: RootState) => state.popup.value

export default popupSlice.reducer