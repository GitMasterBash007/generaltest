import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import MenuWelcome from "./components/menu/menu-welcome";
import CustomerLogin from "./components/customer/customer-login";
import CustomerRegister from "./components/customer/customer-register";
import CustomerWelcome from "./components/customer/customer-welcome";
import MenuUpdate from "./components/menu/menu-update";
import MenuDelete from "./components/menu/menu-delete";
import CreateMenu from "./components/menu/menu-create";
import MenuDashboard from "./components/customer/menu-dashboard";
import CustomerDashboard from "./components/customer/customer-dashboard";
import CreateCc from "./components/cc-account/account-create"
import AccountWelcome from "./components/customer/customer-welcome";
import CcUpdate from "./components/cc-account/account-update";
import CcDelete from "./components/cc-account/account-delete";
import AccountDelete from "./components/customer/customer-delete";
import AccountUpdate from "./components/customer/customer-update";
import CreateOrder from "./components/order/create-order";
import FindOrder from "./components/order/find-order";


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
                        <Route path="admindashboard" element={<MenuDashboard></MenuDashboard>} />
                        <Route path="customerdashboard" element={<CustomerDashboard></CustomerDashboard>} />
                        <Route path="add" element={<CreateMenu></CreateMenu>} />
                        <Route path="update" element={<MenuUpdate></MenuUpdate>} />
                        <Route path="delete" element={< MenuDelete></MenuDelete>} />
                        <Route path="customer" element={< AccountWelcome></AccountWelcome>} />
                        <Route path="addCC" element={<CreateCc></CreateCc>} />
                        <Route path="updateCC" element={<CcUpdate></CcUpdate>} />
                        <Route path="deleteCC" element={<CcDelete></CcDelete>} />
                        <Route path="accountdelete" element={<AccountDelete></AccountDelete>} />
                        <Route path="updateaccount" element={<AccountUpdate></AccountUpdate>} />
                        <Route path="creatingorder" element={<CreateOrder></CreateOrder>} />
                        <Route path="findorder" element={<FindOrder></FindOrder>} />
     


                    </Routes>
                </userContext.Provider>
            </BrowserRouter>
        </>
    );
}

export default App;
