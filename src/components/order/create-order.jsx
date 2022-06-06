import axios from "axios";
import { useRef } from "react";

export default function CreateOrder() {


    const url = "http://localhost:8080/aroma";

    

    

    const idInput = useRef();
    const menu_itemInput = useRef();
    const commentInput = useRef();
    const isfavoriteInput = useRef();
    const order_dateInput = useRef();
    const customer_usernameInput = useRef();
  


    // async-await
    async function createOrder() {
        // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
        // error due to the refInput.current = undefined, meaning there is no .value available
        const user = {
            id: idInput.current.value,
            menu_item: menu_itemInput.current.value,
            comment: commentInput.current.value,
            isfavorite: isfavoriteInput.current.value,
            order_date: order_dateInput.current.value,
            customer_username: customer_usernameInput.current.value,
             
    };
        try {
            const response = await axios.put(`${url}/order`, user);
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    return (
        <>
            <br></br>
            <br></br>
            <input placeholder="Enter food item id"></input>
            <input placeholder="Enter food item name"></input>
            <input placeholder="Enter what kind if available"></input>
            <br></br>
            <input placeholder="is this your favorite meal?"></input>
            <input placeholder="please verfy the order date"></input>
            <input placeholder="confirm your username"></input>
            <br></br> 
            <br></br>          
                <button onClick={createOrder}>Create an order</button>
        </>
    );
}
