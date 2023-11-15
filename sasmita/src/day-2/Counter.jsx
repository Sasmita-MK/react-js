import {useState} from 'react'

const Counter = () => {
    const[count,setCount] = useState(0);
  return (
    <div>
        <h1 style={{padding:"10px"}}>Count : {count} </h1>
        <div>
            <button onClick={()=>setCount(count+1)} style={{background:"green",padding:"10px",margin:"5px"}}>Increment</button>
            <button onClick={()=>setCount(count-1)} style={{background:"red",padding:"10px",margin:"5px"}}>Decrement</button>
        </div>
    </div>
  )
}

export {Counter}