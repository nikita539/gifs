import {createStore,combineReducers} from 'redux'
import {configureStore} from "@reduxjs/toolkit";
import {gifsReducer} from "./gifs-reducer";



const rootReducer = combineReducers({
    gifs:gifsReducer
})

export const store = configureStore({
   reducer:rootReducer
})

export type RootState = ReturnType<typeof store.getState>
