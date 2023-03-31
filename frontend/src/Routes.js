import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import LandingPage from "./pages/Landing";
import BuySell from "./pages/BuySell";
import Sellingitem from "./pages/Sellingitem";
import Icontest from "./pages/Icontest";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={< LandingPage />} />
            <Route path="/buyandsell" element={< BuySell />} />
            <Route path="/sellingitems" element={< Sellingitem />} />
            <Route path="/icons" element={< Icontest />} />
        </Routes>
    )
}

export default AppRoutes;