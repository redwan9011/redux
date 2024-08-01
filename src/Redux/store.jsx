
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './feature/counter/Couterslice'


export const store = configureStore( {
    reducer: {
        counter: counterReducer,
    }
});