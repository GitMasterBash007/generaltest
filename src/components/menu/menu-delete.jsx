import axios from "axios";
import { useRef } from "react";

export default function MenuDelete() {
    // const user = {
    //     fname: "Tester",
    //     lname: "McTesterson",
    //     email: "tm@mail.com",
    //     password: "test",
    //     dob: "12-31-0000",
    // };

    const url = "http://localhost:8080/aroma/menus?item_name=";
    

    const itemNameInput = useRef();

    // async-await
    async function register() {
        // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
        // error due to the refInput.current = undefined, meaning there is no .value available
        const user = {
            item_name: itemNameInput.current.value,
           
             
    };
        try {
            const response = await axios.delete(`${url}${itemNameInput.current.value.split(" ").join("")}`, user);
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    return (
        <>
                <h4>You can delete the menu item here</h4>
                <input placeholder="Enter item name" ref={itemNameInput}></input>
              
                            
                <button onClick={register}>Delete</button>
        </>
    );
}
