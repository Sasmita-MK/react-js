import React,{ useState } from "react";

function ToggleMessage()
{
    const [hide,setHide] = useState(true);
    const [btn,setbtn] = useState("Show Message");
    const handleClick = () =>
    {
        setHide(!hide);
        hide ? setbtn("Hide Message") : 
        setbtn("Show Message");
    }


    return(
        <p>
            <button onClick={handleClick}>{btn}</button>
            {hide  ?  <p></p> : <p>Hi How are you!!</p>}
        </p>
    );
}
export {ToggleMessage}