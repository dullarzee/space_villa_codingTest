//import { useState } from "react";
import "./tailwind/App.css";
import DashBoardLayout from "./components/dashboardLayout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RewardFrontPages from "./dashboardPages/rewardFrontPage";
import RewardReferralPage from "./dashboardPages/rewardReferralsPage";

function App() {
    return (
        <BrowserRouter>
            <DashBoardLayout>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="dashboard/rewards" replace />}
                    />
                    <Route
                        path="dashboard/rewards"
                        element={<RewardFrontPages />}
                    />
                    <Route
                        path="dashboard/rewards/referrals"
                        element={<RewardReferralPage />}
                    />
                </Routes>
            </DashBoardLayout>
        </BrowserRouter>
    );
}

export default App;
