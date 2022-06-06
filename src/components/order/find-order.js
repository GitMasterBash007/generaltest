import axios from "axios";
import { useRef } from "react";

export default function FindOrder() {
  

    const url = "http://localhost:8080/aroma/order?order_date=";
    

    const order_dateInput = useRef();

    // async-await
    async function find() {
        // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
        // error due to the refInput.current = undefined, meaning there is no .value available
        const user = {
            order_date: order_dateInput.current.value,
           
             
    };
        try {
            const response = await axios.get(`${url}${order_dateInput.current.value.split(" ").join("")}`, user);
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    return (
        <>
                <h4>Find order by date</h4>
                <input placeholder="Enter Order Date" ref={order_dateInput}></input>
              
                            
                <button onClick={find}>Find</button>
        </>
    );
}
