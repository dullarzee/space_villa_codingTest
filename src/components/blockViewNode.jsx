import proptype from "prop-types";
import offerTicket from "../assets/offerTicket.svg";
import Offer10k from "../assets/10kOffer.svg";
import Offer100k from "../assets/100kOffer.svg";
import Offer5k from "../assets/5kOffer.svg";
import Offer50k from "../assets/50kOffer.svg";
import rejected from "../assets/rewardRejectedBadge.svg";
import cashbackIcon from "../assets/cashbackIcon.svg";

BlockViewNode.propTypes = {
    children: proptype.element,
    type: proptype.string,
    subType: proptype.string,
    cashback: proptype.number,
    status: proptype.string,
};

export default function BlockViewNode({
    cashback,
    type,
    subType,
    status,
    children,
}) {
    return (
        <div
            className={`flex flex-col w-57 gap-y-3 border border-transparent ${
                type === "offers" ? "min-h-84" : "min-h-94"
            }`}
        >
            <div className="h-49 bg-[#EAECF0] rounded-[22px] py-4 px-2.5">
                <div className="flex items-center">
                    <img src={offerTicket} />
                    <span className="text-[10px] font-bold">{subType}</span>
                </div>
                <div className="flex justify-center items-center">
                    {cashback === 5000 ? (
                        <img src={Offer5k} />
                    ) : cashback === 10000 ? (
                        <img src={Offer10k} />
                    ) : cashback === 50000 ? (
                        <img src={Offer50k} />
                    ) : (
                        <img src={Offer100k} />
                    )}
                </div>
            </div>
            {/*details*/}
            <div className="flex flex-col justify-between gap-y-3 items-start">
                <div className="flex flex-col px-[6px]">
                    {type === "rewards" && status === "rejected" && (
                        <img src={rejected} />
                    )}
                    {status !== "rejected" && (
                        <span
                            className={`inline-flex items-center gap-x-2.5 px-3 py-1 w-42 bg-[#F2F4F7] rounded-[11px] ${
                                type !== "offers"
                            }`}
                        >
                            {type === "offers" && <img src={cashbackIcon} />}
                            {/*conditional for rendering a badge if eiter on the offers section or on the rewards section with status pending or successful*/}

                            {type === "rewards" &&
                                (status === "pending" ||
                                    status === "successful") && (
                                    <span className="text-4">
                                        <strong>
                                            ₦{`${cashback / 1000},000`}
                                        </strong>{" "}
                                        cashback
                                    </span>
                                )}
                            {type === "offers" && (
                                <span className="text-[12px]">
                                    <strong>₦{`${cashback / 1000},000`}</strong>{" "}
                                    cashback
                                </span>
                            )}
                        </span>
                    )}
                </div>
                <p className="text-[#101828] text-[14px] leading-[21px]">
                    {children}
                </p>

                {type === "rewards" &&
                    (status === "pending" || status === "successful") && (
                        <button
                            className="inline-flex items-center justify-center gap-x-1 text-sm rounded-md w-full  bg-[#039855] text-white cursor-pointer disabled:cursor-default disabled:bg-[#D1FADF] disabled:text-[#98A2B3] py-2 px-5"
                            disabled={status === "pending"}
                        >
                            <img src={cashbackIcon} />
                            <span>Claim Reward</span>
                        </button>
                    )}

                {type === "rewards" && status === "rejected" && (
                    <button
                        className="inline-flex items-center justify-center gap-x-1 text-sm rounded-md bg-[#039855] text-white cursor-pointer disabled:cursor-default disabled:bg-[#D1FADF] disabled:text-[#98A2B3] py-2 px-5"
                        disabled={status === "pending"}
                    >
                        <span>View Reason for Rejection</span>
                    </button>
                )}
            </div>
        </div>
    );
}
