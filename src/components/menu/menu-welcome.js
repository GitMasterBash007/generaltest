import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import CreateMenu from "./menu-create";

export default function MenuWelcome() {
    const [menuBody, setMenuBody] = useState([]);
    const [user, setUser] = useContext(userContext);
    const navigate = useNavigate();
    const [menu, setMenu] = useState(true);
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
                        <td>{e.item_name}</td>
                        <td>{e.cost}</td>
                    </tr>
                );
            });

            setMenuBody(menuTableRows);
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

    async function createMenu() {
        try {
            await axios.post(`${url}/menus`, menuHard);
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
            {user.email === "Guest" ? <button onClick={() => navigate("/login")}>Login to Create Menu</button> : <CreateMenu />}
            {user.email === "Guest" || <button onClick={createMenu}>Create Menu</button>}
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>cost</th>
                    </tr>
                </thead>
                <tbody>{menuBody}</tbody>
            </table>
        </>
    );
}
