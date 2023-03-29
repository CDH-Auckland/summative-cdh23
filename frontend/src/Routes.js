import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import landingPage from "./pages/Landing";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={< landingPage />} />
        </Routes>
    )
}

export default AppRoutes;