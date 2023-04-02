import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import LandingPage from "./pages/Landing";
import BuySell from "./pages/BuySell";
import Sellingitem from "./pages/Sellingitem";
import Listeditems from "./pages/Listeditems";
import Icons from "./pages/icons";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/buyandsell" element={<BuySell />} />
      <Route path="/listeditems" element={<Listeditems />} />
      <Route path="/icons" element={<Icons />} />
    </Routes>
  );
};

export default AppRoutes;
