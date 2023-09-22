import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

const CakeView = () => {
    const noOfCakes = useSelector((state)=> state.cake.noOfCakes )
    const dispatch = useDispatch()
    return (
    <div>
        <h2> Number of Cakes - {noOfCakes} </h2>
        <button onClick={()=> dispatch(ordered())}>  Order cake </button>
        <button onClick={()=> dispatch(restocked(5))}> Restock Cake </button>
    </div>
    )
}

export default CakeView
