import { configureStore } from '@reduxjs/toolkit'
import popupReducer from '../features/popupSlice'
import todosReducer from '../features/todoSlice'
const store = configureStore({
  reducer: {
    popup:popupReducer,
    todos:todosReducer,
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store