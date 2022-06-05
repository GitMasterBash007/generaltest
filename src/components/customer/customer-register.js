import axios from "axios";
import { useRef } from "react";

export default function CustomerRegister() {
    // const user = {
    //     fname: "Tester",
    //     lname: "McTesterson",
    //     email: "tm@mail.com",
    //     password: "test",
    //     dob: "12-31-0000",
    // };

    const url = "http://localhost:8080/aroma";
    // const url = "http://localhost:8080/poke_project";

    const fnameInput = useRef();
    const lnameInput = useRef();
    const passwordInput = useRef();
    const balanceInput = useRef();

    // async-await
    async function register() {
        // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
        // error due to the refInput.current = undefined, meaning there is no .value available
        const user = {
            fname: fnameInput.current.value,
                lname: lnameInput.current.value,
                password: passwordInput.current.value,
                balance: balanceInput.current.value, 
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
                <input placeholder="Enter First Name" ref={fnameInput}></input>
                <input placeholder="Enter Last Name" ref={lnameInput}></input>
               
                <br></br>
                <br></br>
                <br></br>
                <input placeholder="Enter Your Balance amount " ref={balanceInput}></input>
                {/*when we put type for the input place holder as password , then it would hide the character */}
                <input type="password" placeholder="Enter Your Password" ref={passwordInput}></input>
                <br></br>
                <button onClick={register}>Sign Up</button>
        </>
    );
}
