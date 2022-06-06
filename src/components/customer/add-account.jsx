import axios from "axios";
import { useRef } from "react";

export default function AccountRegister() {
  

    const url = "http://localhost:8080/aroma";
    

    const usernameInput = useRef();
    const fnameInput = useRef();
    const lnameInput = useRef();
    const passwordInput = useRef();
    const balanceInput = useRef();
    const isAdminInput = useRef();


    // async-await
    async function register() {
        // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
        // error due to the refInput.current = undefined, meaning there is no .value available
        const user = {
            username: usernameInput.current.value,
            fname: fnameInput.current.value,
            lname: lnameInput.current.value,
            password: passwordInput.current.value,
            balance: balanceInput.current.value,
            admin: isAdminInput.current.value
             
    };
        try {
            const response = await axios.post(`${url}/customers`, user);
            console.log(response.data);
         
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    return (
        <>
                <h4>Hello, new Customer please register below.</h4>
                <input placeholder="Enter your username" ref={usernameInput}></input>
                <input placeholder="Enter First Name" ref={fnameInput}></input>
                <br></br>
                <br></br>
                <br></br>
                <input placeholder="Enter Last Name" ref={lnameInput}></input>
                {/*when we put type for the input place holder as password , then it would hide the character */}
                <input type="password" placeholder="Enter Your Password" ref={passwordInput}></input>
                <br></br>
                <br></br>
                <input placeholder="Enter your balance" ref={balanceInput}></input>
                <input placeholder="Enter Admin status" ref={isAdminInput}></input>

                <br></br>                   
                <br></br>
                <button onClick={register}>Add Account</button>
        </>
    );
}
