import referFriendIcon from "../assets/referFriendIcon.svg";
import redeemIcon from "../assets/redeemIcon.svg";
import historyIcon from "../assets/historyIcon.svg";
import offerTicket from "../assets/offerTicket.svg";
import Offer10k from "../assets/10kOffer.svg";
import offer100k from "../assets/100kOffer.svg";
import offer5k from "../assets/5kOffer.svg";
import offer50k from "../assets/50kOffer.svg";
import cashbackIcon from "../assets/cashbackIcon.svg";
import spacepointCoin from "../assets/spacepointCoin.svg";
export default function RewardPages() {
    return (
        <>
            <div className="pl-60 p-20 fixed w-full h-[100vh] z-0 overflow-y-auto">
                <div className="bg-[#F9FAFB] rounded-[20px] h-90 p-[1.4rem] gap-y-[1.9rem] shadow-lg">
                    <div className="flex h-12.5 items-center justify-between">
                        <div className="flex gap-x-4">
                            <h1 className="text-black text-[1.2rem] font-bold">
                                Welcome, Semiat
                            </h1>
                            <span className="inline-block rounded-full bg-green-300 px-3 py-1.5 text-sm text-green-700">
                                Villa Starter
                            </span>
                        </div>
                        <button className="font-semibold text-lg">Rules</button>
                    </div>

                    <div className="flex gap-x-[1.5rem] justify-between h-35">
                        <div className="flex flex-1 flex-col rounded-[1rem] bg-[#039654] h-full p-4 justify-between">
                            <h2 className="text-white text-xl">Cashbacks</h2>
                            <h3 className="text-4xl text-white font-semibold">
                                <span className="text-xl">₦</span>
                                0.00
                            </h3>
                        </div>

                        <div className="flex-1 flex-col justify-between rounded-[1rem] bg-[#F2F4F7] w-[11rem] h-full p-4 border-[1px] border-[#FCFCFD]">
                            <div className="flex flex-col justify-between h-full w-[30%]">
                                <h2 className="text-gray-400 text-xl">
                                    Spacepoints
                                </h2>
                                <h3 className="flex items-center gap-x-1.5 text-4xl text-gray-500 font-semibold ">
                                    <span className="text-lg">
                                        <img src={spacepointCoin} />
                                    </span>
                                    <span>0</span>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-115 h-[6rem] gap-x-4 mt-[1.9rem]">
                        <div className="flex flex-col border-[#F2F4F7] bg-[#FCFCFD] w-115 h-[6rem] border rounded-[12px] p-[9.63px] gap-[4px]">
                            <div className="flex flex-col justify-center items-center gap-y-[3.5px]">
                                <div className="flex justify-center items-center h-11 w-11 rounded-full">
                                    <img src={referFriendIcon} className="" />
                                </div>
                                <span className="inline-block text-center text-[#039654]">
                                    Refer Friend
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col border-[#F2F4F7] bg-[#FCFCFD] w-115 h-[6rem] border rounded-[12px] p-[9.63px] gap-[4px]">
                            <div className="flex flex-col justify-center items-center gap-y-[3.5px]">
                                <div className="flex justify-center items-center h-11 w-11 border-[5px] rounded-full border-[#F2F4F7]">
                                    <img src={redeemIcon} className="" />
                                </div>
                                <span className="inline-block text-center text-[#039654]">
                                    Redeem
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col border-[#F2F4F7] bg-[#FCFCFD] w-115 h-[6rem] border rounded-[12px] p-[9.63px] gap-[4px]">
                            <div className="flex flex-col justify-center items-center gap-y-[3.5px]">
                                <div className="flex justify-center items-center h-11 w-11 rounded-full">
                                    <img src={historyIcon} className="" />
                                </div>
                                <span className="inline-block text-center text-[#039654]">
                                    History
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-y-[26px] mt-8 h-100 ">
                    <div className="flex items-center h-16 px-6 justify-between">
                        <div className="flex w-32 gap-x-6">
                            <button className="">Offers</button>
                            <button className="">Rewards</button>
                        </div>

                        <div className="flex w-32 gap-x-6">
                            <button className="">
                                {/*svg for unique hamburger icon*/}
                                <svg
                                    width="26"
                                    height="20"
                                    viewBox="0 0 26 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.12311 2.47998H24.4164M8.12311 9.99998H24.4164M8.12311 17.52H24.4164M1.85645 2.47998H1.86898M1.85645 9.99998H1.86898M1.85645 17.52H1.86898"
                                        stroke="#344054"
                                        strokeWidth="3.008"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <button className="">
                                <svg
                                    width="60"
                                    height="46"
                                    viewBox="0 0 60 46"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="0.751953"
                                        y="0.439941"
                                        width="58.656"
                                        height="45.12"
                                        rx="9.024"
                                        fill="#12B76A"
                                    />
                                    <path
                                        d="M25.3808 11.7197H21.6208C20.8729 11.7197 20.1556 12.0168 19.6267 12.5457C19.0979 13.0745 18.8008 13.7918 18.8008 14.5397V31.4597C18.8008 32.2076 19.0979 32.9249 19.6267 33.4538C20.1556 33.9826 20.8729 34.2797 21.6208 34.2797H25.3808C26.1287 34.2797 26.846 33.9826 27.3748 33.4538C27.9037 32.9249 28.2008 32.2076 28.2008 31.4597V14.5397C28.2008 13.7918 27.9037 13.0745 27.3748 12.5457C26.846 12.0168 26.1287 11.7197 25.3808 11.7197ZM26.3208 31.4597C26.3208 31.709 26.2217 31.9481 26.0455 32.1244C25.8692 32.3007 25.6301 32.3997 25.3808 32.3997H21.6208C21.3715 32.3997 21.1324 32.3007 20.9561 32.1244C20.7798 31.9481 20.6808 31.709 20.6808 31.4597V14.5397C20.6808 14.2904 20.7798 14.0513 20.9561 13.875C21.1324 13.6988 21.3715 13.5997 21.6208 13.5997H25.3808C25.6301 13.5997 25.8692 13.6988 26.0455 13.875C26.2217 14.0513 26.3208 14.2904 26.3208 14.5397V31.4597ZM38.5408 26.4777H32.9008C32.1529 26.4777 31.4356 26.7748 30.9067 27.3037C30.3779 27.8325 30.0808 28.5498 30.0808 29.2977V31.4597C30.0808 32.2076 30.3779 32.9249 30.9067 33.4538C31.4356 33.9826 32.1529 34.2797 32.9008 34.2797H38.5408C39.2887 34.2797 40.006 33.9826 40.5348 33.4538C41.0637 32.9249 41.3608 32.2076 41.3608 31.4597V29.2977C41.3608 28.5498 41.0637 27.8325 40.5348 27.3037C40.006 26.7748 39.2887 26.4777 38.5408 26.4777ZM39.4808 31.4597C39.4808 31.709 39.3817 31.9481 39.2055 32.1244C39.0292 32.3007 38.7901 32.3997 38.5408 32.3997H32.9008C32.6515 32.3997 32.4124 32.3007 32.2361 32.1244C32.0598 31.9481 31.9608 31.709 31.9608 31.4597V29.2977C31.9608 29.0484 32.0598 28.8093 32.2361 28.633C32.4124 28.4568 32.6515 28.3577 32.9008 28.3577H38.5408C38.7901 28.3577 39.0292 28.4568 39.2055 28.633C39.3817 28.8093 39.4808 29.0484 39.4808 29.2977V31.4597ZM38.5408 11.7197H32.9008C32.1529 11.7197 31.4356 12.0168 30.9067 12.5457C30.3779 13.0745 30.0808 13.7918 30.0808 14.5397V21.7777C30.0808 22.5256 30.3779 23.2429 30.9067 23.7718C31.4356 24.3006 32.1529 24.5977 32.9008 24.5977H38.5408C39.2887 24.5977 40.006 24.3006 40.5348 23.7718C41.0637 23.2429 41.3608 22.5256 41.3608 21.7777V14.5397C41.3608 13.7918 41.0637 13.0745 40.5348 12.5457C40.006 12.0168 39.2887 11.7197 38.5408 11.7197ZM39.4808 21.7777C39.4808 22.027 39.3817 22.2661 39.2055 22.4424C39.0292 22.6187 38.7901 22.7177 38.5408 22.7177H32.9008C32.6515 22.7177 32.4124 22.6187 32.2361 22.4424C32.0598 22.2661 31.9608 22.027 31.9608 21.7777V14.5397C31.9608 14.2904 32.0598 14.0513 32.2361 13.875C32.4124 13.6988 32.6515 13.5997 32.9008 13.5997H38.5408C38.7901 13.5997 39.0292 13.6988 39.2055 13.875C39.3817 14.0513 39.4808 14.2904 39.4808 14.5397V21.7777Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between h-80 w-full">
                        <div className="flex flex-col w-57 h-full gap-y-3">
                            <div className="h-49 bg-[#EAECF0] rounded-[22px] py-4 px-2.5">
                                <div className="flex items-center">
                                    <img src={offerTicket} />
                                    <span className="text-[10px] font-bold">
                                        Transaction
                                    </span>
                                </div>
                                <div className="flex justify-center items-center">
                                    <img src={Offer10k} />
                                </div>
                            </div>
                            {/*details*/}
                            <div className="flex flex-col px-[6px]">
                                <span className="inline-flex items-center gap-x-2.5 px-3 py-1 w-40 bg-[#F2F4F7] rounded-[11px]">
                                    <img src={cashbackIcon} />
                                    <span className="text-[12px]">
                                        <strong>₦10,000</strong> cashback
                                    </span>
                                </span>
                            </div>
                            <p className="text-[#101828] text-[14px] leading-[21px]">
                                Book your first shortlet and enjoy a stay
                                costing between ₦50,000 and ₦100,000.
                            </p>
                        </div>
                        <div className="flex flex-col w-57 h-full gap-y-3">
                            <div className="h-49 bg-[#EAECF0] rounded-[22px] py-4 px-2.5">
                                <div className="flex items-center">
                                    <img src={offerTicket} />
                                    <span className="text-[10px] font-bold">
                                        Transaction
                                    </span>
                                </div>
                                <div className="flex justify-center items-center">
                                    <img src={offer100k} />
                                </div>
                            </div>
                            <div className="flex flex-col px-[6px]">
                                <span className="inline-flex items-center gap-x-2.5 px-3 py-1 w-40 bg-[#F2F4F7] rounded-[11px]">
                                    <img src={cashbackIcon} />
                                    <span className="text-[12px]">
                                        <strong>₦10,000</strong> cashback
                                    </span>
                                </span>
                            </div>
                            <p className="text-[#101828] text-[14px] leading-[21px]">
                                Purchase your first property priced between ₦10
                                million and ₦25 million.
                            </p>
                        </div>
                        <div className="flex flex-col w-57 h-full gap-y-3">
                            <div className="h-49 bg-[#EAECF0] rounded-[22px] py-4 px-2.5">
                                <div className="flex items-center">
                                    <img src={offerTicket} />
                                    <span className="text-[10px] font-bold">
                                        Referral
                                    </span>
                                </div>
                                <div className="flex justify-center items-center pb-7">
                                    <img src={offer5k} />
                                </div>
                            </div>
                            <div className="flex flex-col px-[6px]">
                                <span className="inline-flex items-center gap-x-2.5 px-3 py-1 w-40 bg-[#F2F4F7] rounded-[11px]">
                                    <img src={cashbackIcon} />
                                    <span className="text-[12px]">
                                        <strong>₦10,000</strong> cashback
                                    </span>
                                </span>
                            </div>
                            <p className="text-[#101828] text-[14px] leading-[21px]">
                                Invite a friend to book a shortlet priced
                                between ₦100,000 and ₦150,000 and enjoy rewards!
                            </p>
                        </div>
                        <div className="flex flex-col w-57 h-full gap-y-3">
                            <div className="h-49 bg-[#EAECF0] rounded-[22px] py-4 px-2.5">
                                <div className="flex items-center">
                                    <img src={offerTicket} />
                                    <span className="text-[10px] font-bold">
                                        Referral
                                    </span>
                                </div>
                                <div className="flex justify-center items-center">
                                    <img src={offer50k} />
                                </div>
                            </div>
                            <div className="flex flex-col px-[6px]">
                                <span className="inline-flex items-center gap-x-2.5 px-3 py-1 w-40 bg-[#F2F4F7] rounded-[11px]">
                                    <img src={cashbackIcon} />
                                    <span className="text-[12px]">
                                        <strong>₦10,000</strong> cashback
                                    </span>
                                </span>
                            </div>
                            <p className="text-[#101828] text-[14px] leading-[21px]">
                                Invite a friend to purchase a property priced
                                between ₦15M and ₦20M and enjoy rewards!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
