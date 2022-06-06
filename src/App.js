import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import MenuWelcome from "./components/menu/menu-welcome";
import CustomerLogin from "./components/customer/customer-login";
import CustomerRegister from "./components/customer/customer-register";
import CustomerWelcome from "./components/customer/customer-welcome";
import MenuUpdate from "./components/menu/menu-update";
import MenuDelete from "./components/menu/menu-delete";
import MenuRegister from "./components/menu/menu-register";
import MenuDashboard from "./components/customer/menu-dashboard";
import CustomerDashboard from "./components/customer/customer-dashboard";
import AccountRegister from "./components/customer/add-account";
import AccountWelcome from "./components/customer/customer-welcome";
import AccountUpdate from "./components/customer/customer-update";
import AccountDelete from "./components/customer/delete-account";

export const userContext = createContext();

function App() {
    const [user, setUser] = useState({ username: "Guest" });
    // React-router-dom provideds us the ability to emulate multipage websites while still only being a single page
    return (
        <>
            <BrowserRouter>
                
                <userContext.Provider value={[user, setUser]}>
                    <NavBar />
                    <Routes>
                        <Route path="login" element={<CustomerLogin />} />
                        <Route path="register" element={<CustomerRegister />}/>
                        <Route exact path="" element={<CustomerWelcome />} />
                        <Route path="menu" element={<MenuWelcome />} />
                        <Route path="dashboard" element={<MenuDashboard></MenuDashboard>} />
                        <Route path="add" element={<MenuRegister></MenuRegister>} />
                        <Route path="update" element={<MenuUpdate></MenuUpdate>} />
                        <Route path="delete" element={< MenuDelete></MenuDelete>} />
                        <Route path="customer" element={< AccountWelcome></AccountWelcome>} />
                        <Route path="dashboard" element={< CustomerDashboard></CustomerDashboard>} />
                        <Route path="addCC" element={<AccountRegister></AccountRegister>} />
                        <Route path="updateCC" element={<AccountUpdate></AccountUpdate>} />
                        <Route path="deleteCC" element={<AccountDelete></AccountDelete>} />
     


                    </Routes>
                </userContext.Provider>
            </BrowserRouter>
        </>
    );
}

export default App;
