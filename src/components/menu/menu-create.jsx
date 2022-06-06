import axios from "axios";
import { useState,useRef } from "react";

export default function CreateMenu() {

    const itemNameInput = useRef();
    const costInput = useRef();
    const protienInput = useRef();
    const isSubstiutableInput = useRef();

    const [menu, setMenu] = useState(true);
    const url = "http://localhost:8080/aroma";
    

    async function createMenu() {
        const user = {
            item_name: itemNameInput.current.value,
            cost: costInput.current.value,
            protein: protienInput.current.value,
            is_substitutable: isSubstiutableInput.current.value,
             
    };
        try {
            await axios.post(`${url}/menus`,user);
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
                <input placeholder="Enter item name" ref={itemNameInput}></input>
                <input placeholder="Enter cost" ref={costInput}></input>
                <br></br>
                <br></br>
                <input placeholder="is substituable" ref={protienInput}></input>
                <input placeholder="Enter protein" ref={isSubstiutableInput}></input>
                <br></br>
            <button onClick={createMenu}>Create New Menu Item</button>

        </>
    );
}
