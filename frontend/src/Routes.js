import { Routes, Route } from "react-router-dom";
// import { useLocation } from "react-router-dom";

import LandingPage from "./pages/Landing";
import BuySell from "./pages/BuySell";
import Listeditems from "./pages/Listeditems";
import OrderHistoryBox from "./pages/Orderhistory";

import Icons from "./pages/icons";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/buyandsell" element={<BuySell />} />
      <Route path="/listeditems" element={<Listeditems />} />
      <Route path="/orderhistory" element={<OrderHistoryBox />} />

      <Route path="/icons" element={<Icons />} />
    </Routes>
  );
};

export default AppRoutes;
