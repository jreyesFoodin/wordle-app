import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import './styles/index.css'
const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>
)
