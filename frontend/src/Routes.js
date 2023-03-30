import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import LandingPage from "./pages/Landing";
import BuySell from "./pages/BuySell";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={< LandingPage />} />
            <Route path="/buyandsell" element={< BuySell />} />
        </Routes>
    )
}

export default AppRoutes;