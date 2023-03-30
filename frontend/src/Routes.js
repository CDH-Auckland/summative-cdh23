import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import LandingPage from "./pages/Landing";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={< LandingPage />} />
        </Routes>
    )
}

export default AppRoutes;