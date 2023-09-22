const configureStore = require("@reduxjs/toolkit").configureStore
const cakeReducer = require("../features/cake/cakeSlice")
// const reduxLogger = require("redux-logger")
const iceCreamReducer = require("../features/iceCream/iceCreamSlice")
// const { getDefaultMiddleware } = require("@reduxjs/toolkit")
const userReducer = require("../features/user/userSlice")

const store = configureStore({
    reducer:{
        cake:cakeReducer,
        iceCream:iceCreamReducer,
        user:userReducer
    },
    // middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
    // not required when using async methods in code
})

module.exports = store