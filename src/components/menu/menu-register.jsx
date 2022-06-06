
import axios from "axios";
import { useRef } from "react";

export default function MenuRegister() {
    // const user = {
    //     fname: "Tester",
    //     lname: "McTesterson",
    //     email: "tm@mail.com",
    //     password: "test",
    //     dob: "12-31-0000",
    // };

    const url = "http://localhost:8080/aroma";
    

    const itemNameInput = useRef();
    const costInput = useRef();
    const protienInput = useRef();
    const isSubstiutableInput = useRef();
    
  


    // async-await
    async function register() {
        // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
        // error due to the refInput.current = undefined, meaning there is no .value available
        const user = {
            item_name: itemNameInput.current.value,
            cost: costInput.current.value,
            protein: protienInput.current.value,
            is_substitutable: isSubstiutableInput.current.value,
             
    };
        try {
            const response = await axios.post(`${url}/menus`, user);
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    return (
        <>
                <h4>Please Add Item to the Menu here</h4>
                <input placeholder="Enter item name" ref={itemNameInput}></input>
                <input placeholder="Enter cost" ref={costInput}></input>
                <br></br>
                <br></br>
                <br></br>
                <input placeholder="is substituable" ref={protienInput}></input>
                <input placeholder="Enter protein" ref={isSubstiutableInput}></input>
                <br></br>
                            
                <button onClick={register}>Add Item</button>
        </>
    );
}