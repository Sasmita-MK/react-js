import React from "react";

function InlineExample()
{
    return (
        <>
            <h1 style={{textAlign:"center", color:"green"}}>Inline style in JSX example</h1>
            <div style={{color:"lightblue",padding:"10px",border:"1px solid blue",borderRadius:"5px"}}>
                <p style={{color:"darkblue" , fontSize:"16px"}}>This is a paragraph with inline styles applied</p>
            </div>
        </>
    )
}

export {InlineExample}