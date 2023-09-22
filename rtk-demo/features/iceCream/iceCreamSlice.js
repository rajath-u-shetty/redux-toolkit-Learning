const { cakeActions } = require("../cake/cakeSlice")

const createSlice = require("@reduxjs/toolkit").createSlice

const initialState = {
    noOfIceCream:20,
}

const iceCreamSlice = createSlice({
    name:"iceCream",
    initialState,
    reducers:{
        ordered:(state)=>{
            state.noOfIceCream--
        },
        restocked:(state,action)=>{
            state.noOfIceCream += action.payload
        },
    },
    //first method
    //cake is the name and ordered is an obj in reducer
    //whenever a cake is ordered, one icecream is given out
    // extraReducers:{
    //     ["cake/ordered"]: (state)=>{
    //         state.noOfIceCream--
    //     }
    // }

    //preffered method
    //adding cake reducer in iceCream type
    //so whenever a cake is ordered value of iceCream also decreases along with it
    extraReducers: (builder)=>{
        builder.addCase(cakeActions.ordered, (state)=>{
            state.noOfIceCream--
        })
    }
})

module.exports = iceCreamSlice
module.exports.iceCreamActions = iceCreamSlice.actions
