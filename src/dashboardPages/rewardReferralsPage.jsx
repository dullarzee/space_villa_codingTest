import chevronLeft from "../assets/chevron-left.svg";
import wallet from "../assets/wallet.svg";
import cash from "../assets/cash.svg";
import entrance from "../assets/entrance.svg";
import share from "../assets/share.svg";
import personAdd from "../assets/personAdd.svg";
import personVerified from "../assets/personVerified.svg";
import personDuo from "../assets/personDuo.svg";
import arrow from "../assets/arrowRight.svg";
import shoppingBag from "../assets/cashbackIcon.svg";
import { useNavigate } from "react-router-dom";

export default function RewardReferralPage() {
    const navigate = useNavigate();
    return (
        <div className="w-full min-h-[100vh] p-4">
            <div className="mb-4">
                <button className="flex items-center w-7 md:w-9 md:h-9">
                    <img
                        className="w-full"
                        onClick={() => navigate(-1)}
                        src={chevronLeft}
                    />
                </button>
            </div>
            <div className="relative">
                <div className="absolute w-full h-full top-0 left-0 rounded-[9px] bg-[url(../assets/bgImageReferralFrontPage.jpg)] bg-contain bg-blend-overlay bg-green-950 z-1" />
                <div className="relative flex flex-col lg:flex-row w-full px-5 py-7 md:py-12 lg:pt-20 rounded-[9px] z-3">
                    <div className="h-26 lg:h-auto lg:flex-2 relative w-28 md:w-auto mx-auto lg:mx-0">
                        <img className="z-1 absolute bottom-0" src={wallet} />
                        <img className="z-0 absolute bottom-0" src={cash} />
                    </div>
                    <div className="flex flex-col gap-y-5 flex-3 lg:flex-5 text-white">
                        <h1 className="text-[30px] md:text-[2.5rem] font-semibold text-center">
                            Refer & Earn
                        </h1>
                        <p1 className="text-[12px] md:text-xl text-center text-white/80">
                            Know someone looking to book a shortlet or property?
                            Help them out and enjoy cash rewards from us.
                        </p1>
                        <div className="flex gap-x-2.5 w-[60%] mx-auto justify-center pt-3">
                            <button className="hidden lg:block flex-1 rounded-md py-2 px-5 bg-gray-50 text-[#03a154] ">
                                Start Earning!
                            </button>
                            <button className="lg:flex-1 inline-flex items-center rounded-md py-2 px-5 border border-white">
                                Referral History
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:block flex-2 relative">
                        <img className="z-1 absolute bottom-0" src={wallet} />
                        <img className="z-0 absolute bottom-0" src={cash} />
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-[14px] lg:text-2xl text-slate-900 mb-3 font-semibold">
                    How to Earn
                </h2>
                <div>
                    <div className="flex items-start flex-wrap lg:flex-nowrap p-2 lg:p-6 gap-x-0.5 gap-y-3 md:gap-x-2 bg-gray-50 pb-3">
                        {/*flex of steps to earn*/}
                        <div className="flex flex-col basis-20 lg:basis-45 gap-2 items-center">
                            <img src={entrance} className="w-8.5 md:w-14" />
                            <p className="text-center text-[#03a154] text-[9px] lg:text-base font-semibold">
                                Sign up as an Affiliate
                            </p>
                        </div>
                        <img
                            className="w-6 lg:w-auto self-center"
                            src={arrow}
                        />
                        <div className="flex flex-col basis-20 md:basis-45 gap-2 items-center">
                            <img src={share} className="w-8.5 md:w-14" />
                            <p className="text-center text-[#03a154] text-[9px] lg:text-base font-semibold">
                                Share your Referral code
                            </p>
                        </div>
                        <img
                            className="w-6 lg:w-auto self-center"
                            src={arrow}
                        />
                        <div className="flex flex-col basis-20 md:basis-45 gap-2 items-center">
                            <img src={personAdd} className="w-8.5 md:w-14" />
                            <p className="text-center text-[#03a154] text-[9px] lg:text-base font-semibold">
                                Friends sign in with your code
                            </p>
                        </div>
                        <div className="flex flex-col basis-20 lg:basis-45 gap-2 items-center">
                            <img
                                src={personVerified}
                                className="w-8.5 md:w-14"
                            />
                            <p className="text-center text-[#03a154] text-[9px] lg:text-base font-semibold">
                                Friend perform a transaction
                            </p>
                        </div>
                        <img
                            className="w-6 lg:w-auto self-center"
                            src={arrow}
                        />
                        <div className="flex flex-col basis-20 lg:basis-45 gap-2 items-center">
                            <img src={personDuo} className="w-8.5 md:w-14" />
                            <p className="text-center text-[#03a154] text-[9px] lg:text-base font-semibold">
                                You both get rewarded.
                            </p>
                        </div>
                    </div>
                    <p className="flex gap-3 py-2 items-center font-semibold justify-center text-[11px] md:text-xl lg:text-2xl text-slate-900 bg-gray-100 rounded-br-2xl rounded-bl-2xl">
                        <img className="w-7 md:w-13" src={shoppingBag} />
                        <span>
                            The more you invite friends, the more you earn.
                        </span>
                    </p>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-[15px] md:text-2xl text-slate-900 font-semibold">
                    Referral Offers
                </h3>
                <p className="text-[12px] md:text-lg my-4 text-slate-500">
                    You receive cashback rewards when your friends successfully
                    finishes a transaction
                </p>
                <div className="flex flex-col gap-y-4 md:gap-y-8 bg-gray-50 rounded-lg py-8 px-4">
                    <div className="flex justify-between items-center">
                        <p className="w-[75%] md:w-[60%] border-l-2 border-l-green-400 px-2 py-3.5 text-[13px] md:text-lg text-slate-500 rounded-lg">
                            Invite a friend to book a shortlet priced between
                            ₦100,000 and ₦150,000 and enjoy rewards!
                        </p>
                        <span className="text-sm md:text-lg text-slate-800 font-semibold">
                            +₦5,000
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="w-[75%] md:w-[60%] border-l-2 border-l-green-400 px-2 py-3.5 text-[13px] md:text-lg text-slate-500 rounded-lg">
                            Invite a friend to purchase a property priced
                            between ₦15M and ₦20M and enjoy rewards!
                        </p>
                        <span className="text-sm md:text-lg text-slate-800 font-semibold">
                            +₦50,000
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
