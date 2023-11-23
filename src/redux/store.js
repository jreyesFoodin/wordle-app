import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import confReducer from './conf/confSlice'
import historyReducer from './conf/historySlice'
import countDownReducer from './conf/countDownSlice'
import alertReducer from './conf/alertSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['confState', 'historyState', 'countDownState', 'alertState']
}

const rootReducer = combineReducers({
  confState: confReducer,
  historyState: historyReducer,
  countDownState: countDownReducer,
  alertState: alertReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})
