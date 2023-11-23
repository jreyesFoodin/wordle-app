import { configureStore, combineReducers } from '@reduxjs/toolkit'
import confReducer from './conf/confSlice'
import historyReducer from './conf/historySlice'
import countDownReducer from './conf/countDownSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['confState', 'historyState', 'countDownState']
}

const rootReducer = combineReducers({
  confState: confReducer,
  historyState: historyReducer,
  countDownState: countDownReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})
