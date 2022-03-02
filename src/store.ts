import {configureStore} from '@reduxjs/toolkit'
import {userLoginReducer} from './redux/reducers/authReducer'


export const store = configureStore({
  reducer: {
    userLogin: userLoginReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
