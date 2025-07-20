import homeIcon from "../assets/homeIcon.svg";
import exploreIcon from "../assets/exploreIcon.svg";
import rewardsIcon from "../assets/rewardsIcon.svg";
import wishlistIcon from "../assets/wishlist.svg";
import tourSchedulesIcon from "../assets/tourSchedules.svg";
import transactionsIcon from "../assets/transactionsIcon.svg";
import notificationsIcon from "../assets/notificationsIcon.svg";
import paymentsIcon from "../assets/paymentsIcon.svg";
import helpIcon from "../assets/help&SupportIcon.svg";
import logOutIcon from "../assets/logOut.svg";
import { useLocation } from "react-router-dom";

export default function SideBar() {
    const location = useLocation();
    console.log(location);
    return (
        <div className="z-15 bottom-0 left-0 fixed border border-[#D0D5DD] w-56 pb-6 bg-[#F2F4F7] custom-scrollbar h-[100vh] overflow-y-scroll">
            <div className="flex flex-col gap-y-10 pl-4">
                <div className="flex flex-col gap-y-5 pt-20">
                    <button className="flex items-center  font-semibold gap-x-[10px] rounded-[8px] justify-start h-9">
                        <img src={homeIcon} />
                        <span>Home</span>
                    </button>
                    <button className="flex items-center font-semibold gap-x-[10px] rounded-[8px] justify-start h-9">
                        <img src={exploreIcon} />
                        <span>Explore Marketplace</span>
                    </button>
                    <button
                        className={`flex items-center  font-semibold gap-x-[10px] rounded-[8px] justify-start h-9 ${
                            location.pathname === "/dashboard/rewards" &&
                            "bg-[#D1FADF]"
                        }`}
                    >
                        <img src={rewardsIcon} />
                        <span>Rewards</span>
                    </button>
                    <button className="flex items-center  font-semibold gap-x-[10px] rounded-[8px] justify-start h-9">
                        <img src={wishlistIcon} />
                        <span>My wishlist</span>
                    </button>
                    <button className="relative flex items-center  font-semibold gap-x-[10px] rounded-[8px] justify-start h-9">
                        <img src={transactionsIcon} />
                        <span>Transactions</span>
                        <span className="inline-block absolute text-white text-xs w-4 h-4 rounded-[4px] left-[80%] bg-[#054F31] px-[4px] py-[0.5px]">
                            3
                        </span>
                    </button>
                    <button className="flex items-center  font-semibold gap-x-[10px] rounded-[8px] justify-start h-9">
                        <img src={tourSchedulesIcon} />
                        <span>Tour Schedules</span>
                    </button>
                    <button className="flex items-center  font-semibold gap-x-[10px] rounded-[8px] justify-start h-9">
                        <img src={paymentsIcon} />
                        <span>Payments</span>
                    </button>
                    <button className="relative flex items-center  font-semibold gap-x-[10px] rounded-[8px] justify-start h-9">
                        <img src={notificationsIcon} />
                        <span>Notifications</span>
                        <span className="inline-block absolute text-white text-xs w-4 h-4 rounded-[4px] left-[80%] bg-[#054F31] px-[4px] py-[0.5px]">
                            3
                        </span>
                    </button>
                </div>

                <div className="">
                    <h2 className="text-gray-400 text-sm">SETTINGS</h2>
                    <div className="flex flex-col gap-y-5">
                        <button className="flex items-center  font-semibold gap-x-[10px] rounded-[8px] justify-start h-9">
                            <img src={helpIcon} />
                            <span>Help & Support</span>
                        </button>
                        <button className="flex items-center  font-semibold gap-x-[10px] rounded-[8px] justify-start h-9">
                            <img src={logOutIcon} />
                            <span>Log Out</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
