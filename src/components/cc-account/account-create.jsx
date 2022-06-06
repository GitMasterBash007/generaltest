
import { useRef } from "react";
import axios from "axios";

export default function CreateCc() {

    const url = "http://localhost:8080/aroma";

    

    

    const cc_numberInput = useRef();
    const cc_nameInput = useRef();
    const  exp_dateInput = useRef();
    const zipInput = useRef();
    const limitInput = useRef();
    const customer_usernameInput = useRef();
  


    // async-await
    async function createAccount() {
        // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
        // error due to the refInput.current = undefined, meaning there is no .value available
        const user = {
            cc_number: cc_numberInput.current.value,
            cc_name: cc_nameInput.current.value,
             exp_date: exp_dateInput.current.value,
             zip: zipInput.current.value,
             limit: limitInput.current.value,
            customer_username: customer_usernameInput.current.value,
             
    };
        try {
            const response = await axios.post(`${url}/account`, user);
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }




    return (
        <>
            
            
            <h4>You can add you card information here</h4>
                <input placeholder="Enter cc_number" ></input>
                <span>.......</span>
                <input placeholder="Enter cc_name" ></input>
                <br></br>
                <br></br>
                <input placeholder="Enter exp_date" ></input>
                <span>.......</span>
                <input placeholder="Enter zip" ></input>
                <br></br>
                <br></br>
                <input placeholder="Enter limit" ></input>                
                <span>.......</span> 
                <input placeholder="Enter customer_username" ></input>
                <br></br>
                <br></br>
                <button onClick={createAccount}>Create</button>
        </>
    );
}
