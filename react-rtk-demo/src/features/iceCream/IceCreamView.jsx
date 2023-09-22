import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered,restocked } from './iceCreamSlice'

const IceCreamView = () => {
    const [value,setValue] = useState(1)
    const noOfIceCream = useSelector((state)=> state.iceCream.noOfIceCream)
    const dispatch = useDispatch()
    return (
    <div>
        <h2> Number of iceCream - {noOfIceCream} </h2>
        <button onClick={()=> dispatch(ordered())}> Order iceCream </button>
        <input 
        type="number" 
        value={value}
        onChange={e=>setValue(parseInt(e.target.value))}
        />

        <button onClick={()=> dispatch(restocked(value))}> Restock iceCream </button>
    </div>
    )
}

export default IceCreamView