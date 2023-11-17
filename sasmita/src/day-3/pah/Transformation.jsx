import React,{useState} from 'react'

const Transformation = () => {
    let [name,setName] = useState("Kaioken");
    function handleClick()
    {
        name === "Kaioken" ? setName("SuperSaiyan") : setName("Kaioken");
    }
    return(
        <>
            <p>My Current State : {name}</p>
            <button onClick={ handleClick }>Click Me</button>
        </>
    );
}

export {Transformation}