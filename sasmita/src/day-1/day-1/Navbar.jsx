import React from 'react'

function Navbar()
{
    return (
        <div style={{padding:"50px",background:"darkblue",display:"flex",justifyContent:"space-around",border:"1px solid blue"}}>
            <button style={{background:"pink",padding:"10px",width:"150px"}}>Home</button>
            <button style={{background:"pink",width:"150px",padding:"10px"}}>About</button>
        </div>
    )
}
export {Navbar}