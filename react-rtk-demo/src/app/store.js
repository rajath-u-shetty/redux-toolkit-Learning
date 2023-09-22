import {configureStore} from "@reduxjs/toolkit"
import cakeReducer from "../features/cake/cakeSlice"
import iceCreamReducer from "../features/iceCream/iceCreamSlice"
import userReducer from "../features/user/userSlice"
// const { getDefaultMiddleware } = require("@reduxjs/toolkit")
// const reduxLogger = require("redux-logger")

const store = configureStore({
    reducer:{
        cake:cakeReducer,
        iceCream:iceCreamReducer,
        user:userReducer
    },
    // middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
    // not required when using async methods in code
})

export default store