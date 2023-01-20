import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from './components/token/token.slice'

export default configureStore({
  reducer: {
    token: tokenReducer,
  }
})