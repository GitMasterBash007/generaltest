import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";


export default function ViewPastOrder() {
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
            const response = await fetch(`${url}/orders`);
            const menus = await response.json();
            const menuTableRows = menus.map((e) => {
                return (
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.comment_t}</td>
                        <td>{e.customer_username}</td>
                        <td>{e.isfavorite}</td>
                        <td>{e.menu_item}</td>
                        <td>{e.order_date}</td>
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

    async function viewPast() {
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
            {user.email === "Guest" ? <button onClick={() => navigate("/login")}>Login to Add Menu Item </button> : <viewPast />}
             {user.email === "Guest" || <button onClick={viewPast}>Create Menu</button>}  
            <button onClick={findAll}>Vire past orders</button>
            
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>comment</th>
                        <th>username</th>
                        <th>Favorite</th>
                        <th>Menu Item</th>
                        <th>Order Date</th>

                    </tr>
                </thead>
                <tbody>{menuBody}</tbody>
            </table>
        </>
    );
}

