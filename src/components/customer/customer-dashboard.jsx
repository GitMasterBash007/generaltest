import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../App";

export default function CustomerDashboard() {
    const [user] = useContext(userContext);
    console.log(user);

    const navigate = useNavigate();

    return (
        <>
            <h1>Welcome to your dashboard</h1>
            <Link to="/customers">
            </Link>
            <button onClick={() => navigate("/register")}>Register  Account</button>
            <button onClick={() => navigate("/updateaccount")}>update user Account</button>
            <button onClick={() => navigate("/accountdelete")}>Delete user Account</button>
            <br></br>
            <br></br>
            <button onClick={() => navigate("/creatingorder")}>create an order</button>
            <button onClick={() => navigate("/findorder")}>View Old Order by date</button>
            <br></br>
            <br></br>
            <button onClick={() => navigate("/addcc")}>Create CC Account</button>
            <button onClick={() => navigate("/updatecc")}>update CC Account</button>
            <button onClick={() => navigate("/deletecc")}>Delete CC Account</button>



        </>
    );
}
