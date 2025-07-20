import proptype from "prop-types";

OffersAndRewardsSection.propTypes = {
    children: proptype.element,
    setCurrentView: proptype.func,
    setRewardsState: proptype.func,
    currentView: proptype.func,
    rewardsState: proptype.func,
    rewardsSubState: proptype.string,
    setRewardsSubState: proptype.func,
};
export default function OffersAndRewardsSection({
    children,
    setRewardsState,
    rewardsSubState,
    setRewardsSubState,
    setCurrentView,
    currentView,
    rewardsState,
}) {
    return (
        <div className="flex flex-col gap-y-[26px] mt-8 min-h-100 pb-16">
            <div className="flex items-center h-16 px-6 justify-between ">
                <div className="flex w-32 gap-x-6 ">
                    <button
                        onClick={() => {
                            setRewardsState("offers");
                        }}
                        className={`text-[14px] md:text-lg border-b-green-700 ${
                            rewardsState === "offers"
                                ? "font-bold text-green-700 border-b-3"
                                : "text-slate-400 font-medium"
                        }`}
                    >
                        Offers
                    </button>
                    <button
                        onClick={() => setRewardsState("rewards")}
                        className={`text-[14px] md:text-lg border-b-green-700 ${
                            rewardsState === "rewards"
                                ? "font-bold text-green-700 border-b-3"
                                : "text-slate-400 font-medium"
                        }`}
                    >
                        Rewards
                    </button>
                </div>

                <div className="flex items-center h-9 lg:h-auto w-25 md:w-32">
                    <button
                        onClick={() => setCurrentView("list")}
                        className={`flex-1 px-4 py-2.5 md:py-3 rounded-[8.4px] ${
                            currentView === "list" ? "bg-[#12B76A] " : ""
                        }`}
                    >
                        {/*svg for unique hamburger icon*/}
                        <svg
                            /*className="w-6 md:w-[30px]"*/
                            viewBox="0 0 26 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.12311 2.47998H24.4164M8.12311 9.99998H24.4164M8.12311 17.52H24.4164M1.85645 2.47998H1.86898M1.85645 9.99998H1.86898M1.85645 17.52H1.86898"
                                className={`${
                                    currentView === "list"
                                        ? "stroke-white"
                                        : "stroke-slate-700"
                                }`}
                                strokeWidth="3.008"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={() => setCurrentView("block")}
                        className={`flex-1 px-4 py-2 rounded-[8.4px] ${
                            currentView === "block" ? "bg-[#12B76A] " : ""
                        }`}
                    >
                        <svg
                            /*className="w-6 md:w-[30px]"*/
                            viewBox="0 0 31 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.3808 4.71973H6.62078C5.87287 4.71973 5.15559 5.01683 4.62674 5.54569C4.09789 6.07454 3.80078 6.79182 3.80078 7.53973V24.4597C3.80078 25.2076 4.09789 25.9249 4.62674 26.4538C5.15559 26.9826 5.87287 27.2797 6.62078 27.2797H10.3808C11.1287 27.2797 11.846 26.9826 12.3748 26.4538C12.9037 25.9249 13.2008 25.2076 13.2008 24.4597V7.53973C13.2008 6.79182 12.9037 6.07454 12.3748 5.54569C11.846 5.01683 11.1287 4.71973 10.3808 4.71973ZM11.3208 24.4597C11.3208 24.709 11.2217 24.9481 11.0455 25.1244C10.8692 25.3007 10.6301 25.3997 10.3808 25.3997H6.62078C6.37148 25.3997 6.13239 25.3007 5.9561 25.1244C5.77982 24.9481 5.68078 24.709 5.68078 24.4597V7.53973C5.68078 7.29042 5.77982 7.05133 5.9561 6.87505C6.13239 6.69876 6.37148 6.59973 6.62078 6.59973H10.3808C10.6301 6.59973 10.8692 6.69876 11.0455 6.87505C11.2217 7.05133 11.3208 7.29042 11.3208 7.53973V24.4597ZM23.5408 19.4777H17.9008C17.1529 19.4777 16.4356 19.7748 15.9067 20.3037C15.3779 20.8325 15.0808 21.5498 15.0808 22.2977V24.4597C15.0808 25.2076 15.3779 25.9249 15.9067 26.4538C16.4356 26.9826 17.1529 27.2797 17.9008 27.2797H23.5408C24.2887 27.2797 25.006 26.9826 25.5348 26.4538C26.0637 25.9249 26.3608 25.2076 26.3608 24.4597V22.2977C26.3608 21.5498 26.0637 20.8325 25.5348 20.3037C25.006 19.7748 24.2887 19.4777 23.5408 19.4777ZM24.4808 24.4597C24.4808 24.709 24.3817 24.9481 24.2055 25.1244C24.0292 25.3007 23.7901 25.3997 23.5408 25.3997H17.9008C17.6515 25.3997 17.4124 25.3007 17.2361 25.1244C17.0598 24.9481 16.9608 24.709 16.9608 24.4597V22.2977C16.9608 22.0484 17.0598 21.8093 17.2361 21.633C17.4124 21.4568 17.6515 21.3577 17.9008 21.3577H23.5408C23.7901 21.3577 24.0292 21.4568 24.2055 21.633C24.3817 21.8093 24.4808 22.0484 24.4808 22.2977V24.4597ZM23.5408 4.71973H17.9008C17.1529 4.71973 16.4356 5.01683 15.9067 5.54569C15.3779 6.07454 15.0808 6.79182 15.0808 7.53973V14.7777C15.0808 15.5256 15.3779 16.2429 15.9067 16.7718C16.4356 17.3006 17.1529 17.5977 17.9008 17.5977H23.5408C24.2887 17.5977 25.006 17.3006 25.5348 16.7718C26.0637 16.2429 26.3608 15.5256 26.3608 14.7777V7.53973C26.3608 6.79182 26.0637 6.07454 25.5348 5.54569C25.006 5.01683 24.2887 4.71973 23.5408 4.71973ZM24.4808 14.7777C24.4808 15.027 24.3817 15.2661 24.2055 15.4424C24.0292 15.6187 23.7901 15.7177 23.5408 15.7177H17.9008C17.6515 15.7177 17.4124 15.6187 17.2361 15.4424C17.0598 15.2661 16.9608 15.027 16.9608 14.7777V7.53973C16.9608 7.29042 17.0598 7.05133 17.2361 6.87505C17.4124 6.69876 17.6515 6.59973 17.9008 6.59973H23.5408C23.7901 6.59973 24.0292 6.69876 24.2055 6.87505C24.3817 7.05133 24.4808 7.29042 24.4808 7.53973V14.7777Z"
                                className={`${
                                    currentView === "block"
                                        ? "fill-white"
                                        : "fill-slate-700"
                                }`}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/*conditionally rendered buttons for choosing reward types*/}
            {rewardsState === "rewards" && (
                <div className="flex min-h-14.5 md:min-h-17.5 w-[96%] lg:w-144 bg-[#F3F4F6] p-1 rounded-[15px] mx-auto md:mx-0">
                    <button
                        onClick={() => setRewardsSubState("pending")}
                        className={`flex-1 rounded-[11.5px] text-[#101828] border-[#12B76A] text-md md:text-lg font-medium ${
                            rewardsSubState === "pending"
                                ? "bg-[#F6FEF9] border-[2px]"
                                : ""
                        }`}
                    >
                        Pending
                    </button>
                    <button
                        onClick={() => setRewardsSubState("successful")}
                        className={`flex-1 rounded-[11.5px] text-[#101828] border-[#12B76A] text-md md:text-lg font-medium ${
                            rewardsSubState === "successful"
                                ? "bg-[#F6FEF9] border-[2px]"
                                : ""
                        }`}
                    >
                        Successful
                    </button>
                    <button
                        onClick={() => setRewardsSubState("rejected")}
                        className={`flex-1 rounded-[11.5px] text-[#101828] border-[#12B76A] text-md md:text-lg font-medium ${
                            rewardsSubState === "rejected"
                                ? "bg-[#F6FEF9] border-[2px]"
                                : ""
                        }`}
                    >
                        Rejected
                    </button>
                </div>
            )}

            {/*container for displaying rendered items*/}
            <div
                className={`flex min-h-80 w-full py-5 px-2.5 md:p-0 gap-y-8 flex-wrap ${
                    currentView === "block"
                        ? "flex-row justify-between"
                        : "flex-col gap-8"
                }`}
            >
                {children}
            </div>
        </div>
    );
}
