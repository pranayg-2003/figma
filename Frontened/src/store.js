import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./features/funSlice.js"
const store = configureStore({
    reducer:{
        User:userReducer
},
})

export {store};