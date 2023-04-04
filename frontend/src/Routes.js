import { Routes, Route } from "react-router-dom";
// import { useLocation } from "react-router-dom";

import LandingPage from "./pages/Landing";
import BuySell from "./pages/BuySell";
import Sellingitem from "./pages/Sellingitem";
import Listeditems from "./pages/Listeditems";
import OrderHistoryBox from "./pages/Orderhistory";
import Cart from "./pages/Cart";

import Wishlist from "./pages/Wishlist";
import AccountDetails from "./pages/AccountDetails";

import Icons from "./pages/icons";
import Icontest from "./pages/Icontest";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/buyandsell" element={<BuySell />} />
      <Route path="/sellingitems" element={<Sellingitem />} />
      <Route path="/listeditems" element={<Listeditems />} />
      <Route path="/orderhistory" element={<OrderHistoryBox />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/icons" element={<Icontest />} />
      <Route path="/icons" element={<Icons />} />

      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/accountdetails" element={<AccountDetails />} />
    </Routes>
  );
};

export default AppRoutes;
