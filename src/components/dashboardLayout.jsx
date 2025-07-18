import NavBar from "./navBar";
import SideBar from "./sideBar";
import proptype from "prop-types";

DashBoardLayout.propTypes = {
    children: proptype.element,
};
export default function DashBoardLayout({ children }) {
    return (
        <div className="min-h-[100vh]">
            <NavBar />
            <aside>
                <SideBar />
            </aside>
            <main>{children}</main>
        </div>
    );
}
