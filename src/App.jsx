//import { useState } from "react";
import "./tailwind/App.css";
import DashBoardLayout from "./components/dashboardLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RewardPages from "./dashboardPages/rewardPage";

function App() {
    return (
        <DashBoardLayout>
            <BrowserRouter>
                <Routes>
                    <Route path="dashboard/rewards" element={<RewardPages />} />
                </Routes>
            </BrowserRouter>
        </DashBoardLayout>
    );
}

export default App;
