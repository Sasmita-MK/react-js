import React from "react";

function FormExample()
{
    return (
        <>
            <div>
                <form>
                    <label>Name  :   </label>
                    <input type="text" placeholder="Enter Your Name"/>
                    <br></br>
                    <br></br>
                    <label>Email  :    </label>
                    <input type="email" placeholder="Enter The Email"/>
                    <br></br>
                    <br></br>
                    <label>Message  :     </label>
                    <textarea></textarea>
                    <br></br>
                    <br></br>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export {FormExample}