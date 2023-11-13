import {combineReducers} from "@reduxjs/toolkit";
import moviesReducer from './movies-slice'


const combinedReducers = combineReducers({
    movies:moviesReducer
})

export  default combinedReducers