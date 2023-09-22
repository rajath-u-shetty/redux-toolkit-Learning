// const { createSlice } = require("@reduxjs/toolkit")
const createSlice = require("@reduxjs/toolkit").createSlice


const initialState = {
    noOfCakes:10,
}

const cakeSlice = createSlice({
    name:"cake",//name given to slice
    initialState,
    //same key and value i.e  initialState:initialState
    reducers:{
        ordered:(state)=>{
            state.noOfCakes--
        },
        restocked:(state,action)=>{
            state.noOfCakes += action.payload
        }
    }
})



module.exports = cakeSlice
module.exports.cakeActions = cakeSlice.actions