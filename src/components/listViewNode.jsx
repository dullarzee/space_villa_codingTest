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
    children: proptype.element,
    status: proptype.string,
};
export default function ListViewNode({
    cashback,
    type,
    subType,
    status,
    children,
}) {
    return (
        <div
            className="w-full min-h-48 rounded-[20px] px-6 py-4 gap-x-2.5 
                                                  bg-[#F6F6F6] border border-[#E0DCDC] "
        >
            <div className="flex gap-x-3.5 w-[38rem] h-full">
                <div className="flex shrink-0 items-center justify-center rounded-[28px] h-full w-48 bg-[#EAECF0]">
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
                <div className="flex flex-col p-[7] gap-y-4 items-start">
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
                                <span className="text-3 text-slate-600">
                                    <strong>₦{`${cashback / 1000},000`}</strong>{" "}
                                    cashback
                                </span>
                            )}
                        {type === "rewards" && status === "rejected" && (
                            <img src={rejected} />
                        )}
                    </div>
                    <p className="text-[#101828] text-[18px] font-medium leading-[150%] leading-[21px]">
                        {children}
                    </p>
                    {type === "offers" && (
                        <span className="inline-flex items-center gap-x-2.5 px-3 py-1 bg-[#F2F4F7] rounded-[11px]">
                            <img src={cashbackIcon} />
                            <span className="text-4">
                                <strong>₦{`${cashback / 1000},000`}</strong>{" "}
                                cashback
                            </span>
                        </span>
                    )}

                    {type === "rewards" &&
                        (status === "pending" || status === "successful") && (
                            <button
                                className="inline-flex items-center gap-x-1 text-sm rounded-md w-40  bg-[#039855] text-white cursor-pointer disabled:cursor-default disabled:bg-[#D1FADF] disabled:text-[#98A2B3] py-2 px-5"
                                disabled={status === "pending"}
                            >
                                <img src={cashbackIcon} />
                                <span>Claim Reward</span>
                            </button>
                        )}

                    {type === "rewards" && status === "rejected" && (
                        <button
                            className="inline-flex items-center gap-x-1 text-sm rounded-md bg-[#039855] text-white cursor-pointer disabled:cursor-default disabled:bg-[#D1FADF] disabled:text-[#98A2B3] py-2 px-5"
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
