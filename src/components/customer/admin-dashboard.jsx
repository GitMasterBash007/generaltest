import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../App";

export default function MenuDashboard() {
    const [user] = useContext(userContext);
    console.log(user);

    const navigate = useNavigate();

    return (
        <>
            <h1>Welcome to dashboard</h1>
            <Link to="/menus">
            </Link>
            <button onClick={() => navigate("/add")}>Add Item to Menu</button>
            <br></br>
            <button onClick={() => navigate("/update")}>update Item</button>
            <br></br>
            <button onClick={() => navigate("/delete")}>Delete Item</button>
        </>
    );
}
