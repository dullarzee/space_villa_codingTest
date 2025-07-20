import spaceVillaLogo from "../assets/spaceVillaLogoOriginal.svg";
import hamburger from "../assets/hamburger.svg";
import avatarIcon from "../assets/avatarIcon.svg";
export default function NavBar() {
    return (
        <>
            <nav className="flex fixed lg:gap-x-55 top-0 left-0 h-16 w-full px-5 items-center bg-[#F2F4F7] z-20 justify-between ">
                <div className="flex w- lg:w-35 gap-x-2.5 md:gap-x-5 items-center h-full">
                    <img className="w-6" src={hamburger} />
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
        </>
    );
}
