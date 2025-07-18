import spaceVillaLogo from "../assets/spaceVillaLogo2.jpeg";
export default function NavBar() {
    return (
        <>
            <nav className="flex fixed gap-x-62 top-0 left-0 h-16 w-full px-5 items-center bg-[#F2F4F7] z-20 justify-between ">
                <div className="flex w-[8%] gap-x-5 items-center h-full">
                    <svg
                        className="w-8 h-4 border fill-black stroke-black"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
                            fill="#FFF"
                            fillRule="evenodd"
                        />
                    </svg>
                    <img src={spaceVillaLogo} className=" w-[80%]" />
                </div>

                <div className="flex gap-x-10 items-center **:text-slate-400">
                    <button>Home</button>
                    <button>Buy a Property</button>
                    <button>Sell a Property</button>
                    <button>About Us</button>
                    <button>(+234) 909 2237 678</button>
                </div>

                <div>
                    <img className="rounded-full w-12 h-12 bg-slate-500" />
                </div>
            </nav>
        </>
    );
}
