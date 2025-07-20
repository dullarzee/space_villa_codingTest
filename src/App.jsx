//import { useState } from "react";
import "./tailwind/App.css";
import DashBoardLayout from "./components/dashboardLayout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RewardPages from "./dashboardPages/rewardPage";

function App() {
    return (
        <BrowserRouter>
            <DashBoardLayout>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="dashboard/rewards" replace />}
                    />
                    <Route path="dashboard/rewards" element={<RewardPages />} />
                </Routes>
            </DashBoardLayout>
        </BrowserRouter>
    );
}

export default App;
