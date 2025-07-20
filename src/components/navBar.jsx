import spaceVillaLogo from "../assets/spaceVillaLogoOriginal.svg";
import hamburger from "../assets/hamburger.svg";
import avatarIcon from "../assets/avatarIcon.svg";
export default function NavBar() {
    return (
        <>
            <nav className="flex fixed gap-x-62 top-0 left-0 h-16 w-full px-5 items-center bg-[#F2F4F7] z-20 justify-between ">
                <div className="flex w-[8%] gap-x-5 items-center h-full">
                    <img src={hamburger} />
                    <img src={spaceVillaLogo} className=" w-[80%] h-[46px]" />
                </div>

                <div className="flex gap-x-10 items-center **:text-slate-400">
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
                        className="rounded-full w-12 h-12 bg-slate-500"
                    />
                </div>
            </nav>
        </>
    );
}
