import spaceVillaLogo from "../assets/spaceVillaLogoOriginal.svg";
import hamburger from "../assets/hamburger.svg";
import avatarIcon from "../assets/avatarIcon.svg";
import { useState } from "react";
import SideBar from "./sideBar";
export default function NavBar() {
    const [isNavOpenMobile, setIsNavOpenMobile] = useState(false);

    const handleNavOpenMobile = (verb) => {
        if (verb === "open") {
            setIsNavOpenMobile(() => true);
            console.log("tried opening", "verb:", verb);
        } else if (verb === "close") {
            setIsNavOpenMobile(() => false);
            console.log("tried closing", "verb:", verb);
        }
    };
    return (
        <>
            <nav className="flex fixed lg:gap-x-55 top-0 left-0 h-16 w-full px-5 items-center bg-[#F2F4F7] z-20 justify-between ">
                <div className="flex w- lg:w-35 gap-x-2.5 md:gap-x-5 items-center h-full">
                    {/*hamburger for mobile*/}
                    <div
                        onClick={() => handleNavOpenMobile("open")}
                        className="relative"
                    >
                        <img className="w-6" src={hamburger} />

                        {isNavOpenMobile && (
                            <>
                                <SideBar extraStyle="absolute w-48 top-[200%] border-b-0 z-130" />
                            </>
                        )}
                    </div>
                    {/*hamburger for desktop*/}
                    <img className="hidden lg:block w-6" src={hamburger} />
                    <img
                        src={spaceVillaLogo}
                        className="w-19 md:w-24 h-[46px]"
                    />
                </div>

                <div className="hidden lg:flex gap-x-10 items-center not-last:**:cursor-pointer **:text-slate-400">
                    <button className="font-semibold text-[#8E98A8]">
                        Home
                    </button>
                    <button className="font-semibold text-[#8E98A8]">
                        Buy a Property
                    </button>
                    <button className="font-semibold text-[#8E98A8]">
                        Sell a Property
                    </button>
                    <button className="font-semibold text-[#8E98A8]">
                        About Us
                    </button>
                    <button className="text-[13px]">(+234) 909 2237 678</button>
                </div>

                <div>
                    <img
                        src={avatarIcon}
                        className="rounded-full w-10 h-10 md:w-12 md:h-12 "
                    />
                </div>
            </nav>
            {/*overlay for mobile nav*/}
            {isNavOpenMobile && (
                <div
                    onClick={() => handleNavOpenMobile("close")}
                    className="fixed h-[100vh] w-[100vw] top-0 left-0 z-120"
                />
            )}
        </>
    );
}
