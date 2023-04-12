import { Routes, Route } from "react-router-dom";
// import { useLocation } from "react-router-dom";

import LandingPage from "./pages/Landing";
import BuySell from "./pages/BuySell";
import Sellingitem from "./pages/Sellingitem";
import Listeditems from "./pages/Listeditems";
import OrderHistoryBox from "./pages/Orderhistory";
import Browseitems from "./pages/Browseitems";
import Viewitem from "./pages/Viewitem";
import Wishlist from "./pages/Wishlist";
import AccountDetails from "./pages/AccountDetails";
import Cart from "./pages/Cart";



import Icons from "./pages/icons";
import Icontest from "./pages/Icontest";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/buyandsell" element={<BuySell />} />
            <Route path="/sellingitems" element={<Sellingitem />} />
            <Route path="/browseitems" element={< Browseitems />} />
            <Route path="/viewitem" element={< Viewitem />} />
            <Route path="/listeditems" element={<Listeditems />} />
            <Route path="/orderhistory" element={<OrderHistoryBox />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/accountdetails" element={<AccountDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/icon" element={<Icontest />} />
            <Route path="/icons" element={<Icons />} />

        </Routes>
    );
};

export default AppRoutes;
