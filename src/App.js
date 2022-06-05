import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import MenuWelcome from "./components/menu/menu-welcome";
import CustomerDashboard from "./components/customer/customer-dashboard";
import CustomerLogin from "./components/customer/customer-login";
import CustomerRegister from "./components/customer/customer-register";
import CustomerUpdate from "./components/customer/customer-update";
import CustomerWelcome from "./components/customer/customer-welcome";

export const userContext = createContext();

function App() {
    const [user, setUser] = useState({ email: "Guest" });
    // React-router-dom provideds us the ability to emulate multipage websites while still only being a single page
    return (
        <>
            <BrowserRouter>
                
                <userContext.Provider value={[user, setUser]}>
                    <NavBar />
                    <Routes>
                        <Route path="login" element={<CustomerLogin />} />
                        <Route path="register" element={<CustomerRegister />} />
                        <Route exact path="" element={<CustomerWelcome />} />
                        <Route path="menu" element={<MenuWelcome />} />
                        <Route path="dashboard" element={<CustomerDashboard></ CustomerDashboard>} />
                        <Route path="update" element={<CustomerUpdate></CustomerUpdate>} />
                    </Routes>
                </userContext.Provider>
            </BrowserRouter>
        </>
    );
}

export default App;
