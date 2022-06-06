import axios from "axios";
import { useRef } from "react";

export default function CcUpdate() {


    const url = "http://localhost:8080/aroma";
   

    const cc_numberInput = useRef();
    const cc_nameInput = useRef();
    const cvvInput = useRef();
    const zipInput = useRef();
    const limitInput = useRef();
    const customer_usernameInput = useRef();
  


    // async-await
    async function register() {
        // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
        // error due to the refInput.current = undefined, meaning there is no .value available
        const user = {
            cc_number: cc_numberInput.current.value,
            cc_name: cc_nameInput.current.value,
            cvv: cvvInput.current.value,
            zip: zipInput.current.value,
            limit: limitInput.current.value,
            customer_username: customer_usernameInput.current.value
             
    };
        try {
            const response = await axios.put(`${url}/account`, user);
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    return (
        
        <>
                <h4>You can update the menu here</h4>
                <input placeholder="Enter cc_number" ref={cc_numberInput}></input>
                <span>.......</span>
                <input placeholder="Enter cc_name" ref={cc_nameInput}></input>
                <br></br>
                <br></br>
                <input placeholder="Enter exp_date" ref={cvvInput}></input>
                <span>.......</span>
                <input placeholder="Enter your zip Code" ref={zipInput}></input>
                <br></br>
                <br></br>
                <input placeholder="Enter limit" ref={limitInput}></input>
                <span>.......</span>
                <input placeholder="Enter customer_username" ref={customer_usernameInput}></input>
                <br></br>
                <br></br> 
                            
                <button onClick={register}>Update</button>
        </>
    );
}
