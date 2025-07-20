import Offer10k from "../assets/10kOffer.svg";
import Offer100k from "../assets/100kOffer.svg";
import Offer5k from "../assets/5kOffer.svg";
import Offer50k from "../assets/50kOffer.svg";
import offerTicket from "../assets/offerTicket.svg";
import cashbackIcon from "../assets/cashbackIcon.svg";
import rejected from "../assets/rewardRejectedBadge.svg";
import proptype from "prop-types";

ListViewNode.propTypes = {
    cashback: proptype.number,
    type: proptype.string,
    subType: proptype.string,
    desc: proptype.string,
    status: proptype.string,
    eligibility: proptype.string,
    setCurrentOverlayData: proptype.func,
    setIsOverlayVisible: proptype.func,
};
export default function ListViewNode({
    cashback,
    type,
    subType,
    status,
    desc,
    eligibility,
    setCurrentOverlayData,
    setIsOverlayVisible,
}) {
    const handleClick = () => {
        if (type === "offers") {
            setCurrentOverlayData((prev) => ({
                ...prev,
                offer: {
                    type: type,
                    subType: subType,
                    desc: desc,
                    cashback: cashback,
                    eligibility: eligibility,
                },
            }));
            setTimeout(() => {
                setIsOverlayVisible((prev) => ({
                    ...prev,
                    offer: true,
                }));
            }, 200);
            console.log("passed through");
        } else if (type === "rewards") {
            if (status === "successful") {
                setCurrentOverlayData((prev) => ({
                    ...prev,
                    rewardsSuccess: {
                        cashback: cashback,
                    },
                }));
                setTimeout(() => {
                    setIsOverlayVisible((prev) => ({
                        ...prev,
                        rewardsSuccess: true,
                    }));
                }, 200);
            } else if (status === "rejected") {
                setTimeout(() => {
                    setIsOverlayVisible((prev) => ({
                        ...prev,
                        rewardsRejected: true,
                    }));
                }, 200);
            }
        }
    };
    return (
        <div
            onClick={handleClick}
            className={`w-full h-37 lg:min-h-48 rounded-[20px] md:px-6 md:py-4 gap-x-2.5 
            md:bg-[#F6F6F6] md:border border-[#E0DCDC] ${
                type === "offers" ? "cursor-pointer" : ""
            } `}
        >
            <div className="flex gap-x-3.5 w-full lg:w-[42rem] h-full">
                <div className="max-h-full md:h-49 w-35 md:w-52 shrink-0 bg-[#EAECF0] rounded-[22px] py-4 px-2.5">
                    <div className="flex items-center">
                        <img src={offerTicket} />
                        <span className="text-[10px] font-bold">{subType}</span>
                    </div>
                    <div className="flex justify-center items-center h-full">
                        {cashback === 5000 ? (
                            <img className="w-28 md:w-[60%]" src={Offer5k} />
                        ) : cashback === 10000 ? (
                            <img className="w-28 md:w-[70%]" src={Offer10k} />
                        ) : cashback === 50000 ? (
                            <img className="w-28 md:w-[70%]" src={Offer50k} />
                        ) : (
                            <img className="w-28 md:w-[70%]" src={Offer100k} />
                        )}
                    </div>
                </div>
                <div className="flex flex-col p-[7] md:gap-y-4 justify-between items-start">
                    <div className="flex items-center">
                        {type === "offers" && (
                            <>
                                <img src={offerTicket} />
                                <span className="text-[10px] font-bold">
                                    {subType}
                                </span>
                            </>
                        )}
                        {type === "rewards" &&
                            (status === "pending" ||
                                status === "successful") && (
                                <span className="ml-1 mt-2 text-[0.72rem] md:text-[1rem] text-slate-600">
                                    <strong>₦{`${cashback / 1000},000`}</strong>{" "}
                                    cashback
                                </span>
                            )}
                        {type === "rewards" && status === "rejected" && (
                            <img src={rejected} />
                        )}
                    </div>
                    <p className="text-[#101828] text-[0.79rem] md:text-[18px] font-medium leading-[21px]">
                        {desc}
                    </p>
                    {type === "offers" && (
                        <span className="inline-flex items-center gap-x-2.5 px-3 py-1 bg-[#F2F4F7] rounded-[11px]">
                            <img src={cashbackIcon} />
                            <span className="text-[0.72rem] md:text-[1rem]">
                                <strong>₦{`${cashback / 1000},000`}</strong>{" "}
                                cashback
                            </span>
                        </span>
                    )}

                    {type === "rewards" &&
                        (status === "pending" || status === "successful") && (
                            <button
                                className="inline-flex items-center gap-x-0.5 md:gap-x-1 text-xs md:text-sm rounded-md bg-[#039855] text-white cursor-pointer disabled:cursor-default disabled:bg-[#D1FADF] disabled:text-[#98A2B3] py-1 md:py-2 px-3 md:px-5"
                                disabled={status === "pending"}
                            >
                                <img src={cashbackIcon} />
                                <span>Claim Reward</span>
                            </button>
                        )}

                    {type === "rewards" && status === "rejected" && (
                        <button
                            className="inline-flex items-center gap-x-0.5 md:gap-x-1 text-xs md:text-sm rounded-md bg-[#039855] text-white cursor-pointer disabled:cursor-default disabled:bg-[#D1FADF] disabled:text-[#98A2B3] py-2 px-5"
                            disabled={status === "pending"}
                        >
                            <span>View Reason for Rejection</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
