import NavBar from "./navBar";
import SideBar from "./sideBar";
import proptype from "prop-types";
import QuickHelpWidget from "./quickHelpWidget";
import {useState} from "react";

DashBoardLayout.propTypes = {
    children: proptype.element,
};
export default function DashBoardLayout({ children }) {
    const [isSideBarOpenDesktop, setIsSideBarOpenDesktop] = useState(true)
    return (
        <div className="overflow-y-auto font-inter">
            <NavBar setIsSideBarOpenDesktop={setIsSideBarOpenDesktop} />
            {isSideBarOpenDesktop && <aside>
                <SideBar />
            </aside>}
            <QuickHelpWidget />
            <main className="lg:pl-63 pt-26 overflow-y-auto lg:pr-10 w-full min-h-[100vh]">
                <div className="pb-10">{children}</div>
            </main>
        </div>
    );
}
