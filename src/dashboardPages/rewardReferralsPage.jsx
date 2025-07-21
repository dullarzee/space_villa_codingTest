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
        <div className="w-full min-h-[100vh]">
            <div className="mb-4">
                <div className="flex items-center w-9 h-9">
                    <img
                        className="w-full"
                        onClick={() => navigate(-1)}
                        src={chevronLeft}
                    />
                </div>
            </div>
            <div className="flex w-full px-5 py-12 pt-20 bg-[#03a154] rounded-[9px]">
                <div className="flex-2 relative">
                    <img className="z-1 absolute bottom-0" src={wallet} />
                    <img className="z-0 absolute bottom-0" src={cash} />
                </div>
                <div className="flex flex-col gap-y-5 flex-5 text-white">
                    <h1 className="text-[2.5rem] font-semibold text-center">
                        Refer & Earn
                    </h1>
                    <p1 className="text-xl text-center text-white/80">
                        Know someone looking to book a shortlet or property?
                        Help them out and enjoy cash rewards from us.
                    </p1>
                    <div className="flex gap-x-2.5 w-[60%] mx-auto justify-center pt-3">
                        <button className="flex-1 rounded-md py-2 px-5 bg-gray-50 text-[#03a154] ">
                            Start Earning!
                        </button>
                        <button className="flex-1 inline-flex items-center rounded-md py-2 px-5 border border-white">
                            Referral History
                        </button>
                    </div>
                </div>
                <div className="flex-2 relative">
                    <img className="z-1 absolute bottom-0" src={wallet} />
                    <img className="z-0 absolute bottom-0" src={cash} />
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl text-slate-900 mb-3 font-semibold">
                    How to Earn
                </h2>
                <div>
                    <div className="flex items-start p-6 gap-x-2 bg-gray-50 pb-3">
                        {/*flex of steps to earn*/}
                        <div className="flex flex-col basis-45 gap-2 items-center">
                            <img src={entrance} className="w-14" />
                            <p className="text-center text-[#03a154] font-semibold">
                                Sign up as an Affiliate
                            </p>
                        </div>
                        <img className="self-center" src={arrow} />
                        <div className="flex flex-col basis-45 gap-2 items-center">
                            <img src={share} className="w-14" />
                            <p className="text-center text-[#03a154] font-semibold">
                                Share your Referral code
                            </p>
                        </div>
                        <img className="self-center" src={arrow} />
                        <div className="flex flex-col basis-45 gap-2 items-center">
                            <img src={personAdd} className="w-14" />
                            <p className="text-center text-[#03a154] font-semibold">
                                Friends sign in with your code
                            </p>
                        </div>
                        <div className="flex flex-col basis-45 gap-2 items-center">
                            <img src={personVerified} className="w-14" />
                            <p className="text-center text-[#03a154] font-semibold">
                                Friend perform a transaction
                            </p>
                        </div>
                        <img className="self-center" src={arrow} />
                        <div className="flex flex-col  basis-45 gap-2 items-center">
                            <img src={personDuo} className="w-14" />
                            <p className="text-center text-[#03a154] font-semibold">
                                You both get rewarded.
                            </p>
                        </div>
                    </div>
                    <p className="flex gap-3 py-2 items-center font-semibold justify-center text-2xl text-slate-900 bg-gray-100 rounded-br-2xl rounded-bl-2xl">
                        <img className="w-13" src={shoppingBag} />
                        <span>
                            The more you invite friends, the more you earn.
                        </span>
                    </p>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-2xl text-slate-900 font-semibold">
                    Referral Offers
                </h3>
                <p className="text-lg my-4 text-slate-500">
                    You receive cashback rewards when your friends successfully
                    finishes a transaction
                </p>
                <div className="bg-gray-50 rounded-lg py-8 px-4">
                    <p className="w-[60%] border-l-2 border-l-green-400 px-2 py-3.5 text-lg text-slate-500 rounded-lg">
                        Invite a friend to book a shortlet priced between
                        #100,000 and #150,000 and enjoy rewards!
                    </p>
                </div>
            </div>
        </div>
    );
}
