import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";


export default function AccountWelcome() {
    const [customerBody, setCustomerBody] = useState([]);
    const [user] = useContext(userContext);
    const navigate = useNavigate();
    const [menu, setCustomer] = useState(true);
    const url = "http://localhost:8080/aroma";
    useEffect(() => {
        findAll();
    }, [menu]);

    // Async/Await in JS, this came around in 2016 (ECMAScript6)
    async function findAll() {
        try {
            const response = await fetch(`${url}/menus`);
            const menus = await response.json();
            const menuTableRows = menus.map((e) => {
                return (
                    <tr>
                        <td>{}</td>
                        <td>{}</td>
                    </tr>
                );
            });

            setCustomerBody(menuTableRows);
            console.log(menus);
        } catch (e) {
            console.error(e);
        }
    }

    const menuHard = {
        "item_name": "Hamburger Meal",
        "cost": 12,
        "protein": 120,
        "is_substituable": "Beef or Chicken",
        
    };

    async function createCustomer() {
        try {
            await axios.post(`${url}/menus`, menuHard);
            if (menu === true) {
                setCustomer(false);
            } else {
                setCustomer(true);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            {user.username === "Guest" ? <button onClick={() => navigate("/login")}>Login to Create Account</button> : <createCustomer />}
            {user.username === "Guest" || <button onClick={createCustomer}>Add Item </button>}
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{customerBody}</tbody>
            </table>
        </>
    );
}
