import { configureStore, combineReducers } from '@reduxjs/toolkit'
import confReducer from './conf/confSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['confState']
}

const rootReducer = combineReducers({
  confState: confReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})
