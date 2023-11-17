import React from "react";

const handleChange = event =>
{
    console.log(event.target.value);
}

const FormExample = () =>
{
    return (
        <div>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label for = "name">Name:</label>
                            </td>
                            <td>
                                <input id = "name" type = "text" name = "name" onChange = {handleChange}/> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for = "email">Email:</label>
                            </td>
                            <td>
                                <input id = "email" type = "email" name = "email" onChange = {handleChange}/> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for = "message">Message:</label>
                            </td>
                            <td>
                                <textarea id = "message" name = "message" ></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <button>Submit</button>
        </div>
    );
}

export {FormExample}