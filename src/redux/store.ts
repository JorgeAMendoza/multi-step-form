import { configureStore } from '@reduxjs/toolkit'
import formSliceReducer from './reducer.js'

export const createStore = () => {
  return configureStore({
    reducer: { form: formSliceReducer },
  })
}

export const store = createStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
