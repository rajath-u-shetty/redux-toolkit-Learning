const store = require("./app/store");
const cakeActions = require("./cakeSlicefeatures/cake/cakeSlice").cakeActions;
const iceCreamActions = require("./features/iceCream/iceCreamSlice").iceCreamActions;
const fetchUsers = require("./features/user/userSlice").fetchUsers

console.log("inital state",store.getState());
const unsubscribe = store.subscribe(()=>{
    console.log("update state", store.getState());
});

store.dispatch(fetchUsers())//for  userslice

// store.dispatch(cakeActions.ordered())//for cakeSlice
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(4))

// store.dispatch(iceCreamActions.ordered())//for iceCreamSlice
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.restocked(2))

// unsubscribe()