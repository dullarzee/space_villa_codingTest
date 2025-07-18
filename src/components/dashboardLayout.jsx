import NavBar from "./navBar";
import SideBar from "./sideBar";

export default function DashBoardLayout({ children }) {
    return (
        <div className="min-h-[100vh] border border-blue-500">
            <NavBar />
            <aside>
                <SideBar />
            </aside>
            <main>{children}</main>
        </div>
    );
}
