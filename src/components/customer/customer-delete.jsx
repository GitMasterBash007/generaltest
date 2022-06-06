import axios from "axios";
import { useRef } from "react";

export default function AccountDelete() {
   

    const url = "http://localhost:8080/aroma/customers?username=";
    

    const usernameInput = useRef();

    // async-await
    async function register() {
        // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
        // error due to the refInput.current = undefined, meaning there is no .value available
        const user = {
            username: usernameInput.current.value,
           
             
    };
        try {
            const response = await axios.delete(`${url}${usernameInput.current.value.split(" ").join("")}`, user);
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    return (
        <>
                <h4>You can delete your account here</h4>
                <input placeholder="Enter  your Username" ref={usernameInput}></input>
              
                            
                <button onClick={register}>Delete</button>
        </>
    );
}
