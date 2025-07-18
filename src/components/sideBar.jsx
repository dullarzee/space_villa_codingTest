export default function SideBar() {
    return (
        <div className="z-15 bottom-0 left-0 fixed border border-[#D0D5DD] w-56 bg-[#F2F4F7] h-[100vh]">
            <div className="flex flex-col gap-y-10">
                <div className="flex flex-col gap-y-5 pt-20 p-4">
                    <button className="flex justify-start">
                        <span>Home</span>
                    </button>
                    <button className="flex justify-start">
                        <span>Explore Marketplace</span>
                    </button>
                    <button className="flex justify-start">
                        <span>Rewards</span>
                    </button>
                    <button className="flex justify-start">
                        <span>My wishlist</span>
                    </button>
                    <button className="flex justify-start">
                        <span>Transactions</span>
                    </button>
                    <button className="flex justify-start">
                        <span>Tour Schedules</span>
                    </button>
                    <button className="flex justify-start">
                        <span>Payments</span>
                    </button>
                    <button className="flex justify-start">
                        <span>Notifications</span>
                    </button>
                </div>

                <div className="">
                    <h2 className="text-gray-400 text-sm">SETTINGS</h2>
                    <div className="flex flex-col gap-y-5 px-4">
                        <button className="flex justify-start">
                            Help & Support
                        </button>
                        <button className="flex justify-start">Log Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
