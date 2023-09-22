// import { useState } from 'react'
import "./App.css"
import  CakeView  from "./features/cake/CakeView"
import  IceCreamView  from "./features/iceCream/IceCreamView";
import  UserView  from "./features/user/UserViews";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div >
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  )
}

export default App
