import axios from "axios";
import { useState } from "react";

export default function CreateMenu() {

    const [menu, setMenu] = useState(true);
    const url = "http://localhost:8080/aroma";

    async function createMenu() {
        try {
            await axios.post(`${url}/menus`);
            if (menu === true) {
                setMenu(false);
            } else {
                setMenu(true);
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <br></br>
            <br></br>
             <input placeholder="Enter new food  item_name"></input>
            <input placeholder="Enter new food item cost"></input>
            <br></br>
            <br></br>
            <input placeholder="Enter new item protein"></input>
            <input placeholder="Is it substituable?"></input> 
            <br></br>
            <br></br>
            <button onClick={createMenu}>Create New Menu Item</button>
        </>
    );
}
