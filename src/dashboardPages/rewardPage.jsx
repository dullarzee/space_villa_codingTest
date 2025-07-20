import villaStarterIcon from "../assets/villaStarterIcon.svg";
import infoIcon from "../assets/infoIcon.svg";
import referFriendIcon from "../assets/referFriendIcon.svg";
import redeemIcon from "../assets/redeemIcon.svg";
import historyIcon from "../assets/historyIcon.svg";
import spacepointCoin from "../assets/spacepointCoin.svg";
import comingSoonBadge from "../assets/comingSoonBadge.svg";
import OffersAndRewardsSection from "../components/offerAndRewardsSection";
import BlockViewNode from "../components/blockViewNode";
import {
    offers,
    rewards_pending,
    rewards_success,
    rewards_rejected,
} from "../lib/data";
import { useState } from "react";
import ListViewNode from "../components/listViewNode";

export default function RewardPages() {
    const [rewardsState, setRewardsState] = useState("offers");
    const [rewardsSubState, setRewardsSubState] = useState("pending");
    const [currentView, setCurrentView] = useState("list");

    {
        /*function for rendering rewards based on states like pending, successful etc*/
    }
    const renderRewards = () => {
        const result = [...Array(0)];
        if (rewardsSubState === "pending") {
            rewards_pending.map((it) => {
                if (currentView === "list") {
                    result.push(
                        <ListViewNode
                            key={it.id}
                            type={it.type}
                            subType={it.subType}
                            status={it.status}
                            cashback={it.cashback}
                        >
                            {it.desc}
                        </ListViewNode>
                    );
                } else if (currentView === "block") {
                    result.push(
                        <BlockViewNode
                            key={it.id}
                            type={it.type}
                            subType={it.subType}
                            status={it.status}
                            cashback={it.cashback}
                        >
                            {it.desc}
                        </BlockViewNode>
                    );
                }
            });
            return result;
        } else if (rewardsSubState === "successful") {
            rewards_success.map((it) => {
                if (currentView === "list") {
                    result.push(
                        <ListViewNode
                            key={it.id}
                            type={it.type}
                            subType={it.subType}
                            status={it.status}
                            cashback={it.cashback}
                        >
                            {it.desc}
                        </ListViewNode>
                    );
                } else if (currentView === "block") {
                    result.push(
                        <BlockViewNode
                            key={it.id}
                            type={it.type}
                            subType={it.subType}
                            status={it.status}
                            cashback={it.cashback}
                        >
                            {it.desc}
                        </BlockViewNode>
                    );
                }
            });
            return result;
        } else if (rewardsSubState === "rejected") {
            rewards_rejected.map((it) => {
                if (currentView === "list") {
                    result.push(
                        <ListViewNode
                            key={it.id}
                            type={it.type}
                            subType={it.subType}
                            status={it.status}
                            cashback={it.cashback}
                        >
                            {it.desc}
                        </ListViewNode>
                    );
                } else if (currentView === "block") {
                    result.push(
                        <BlockViewNode
                            key={it.id}
                            type={it.type}
                            subType={it.subType}
                            status={it.status}
                            cashback={it.cashback}
                        >
                            {it.desc}
                        </BlockViewNode>
                    );
                }
            });
            return result;
        }
    };

    return (
        <>
            <div className="w-full min-h-[100vh] z-0">
                <div className="bg-[#F9FAFB] rounded-[20px] h-90 p-[1.4rem] gap-y-[1.9rem] shadow-lg">
                    <div className="flex h-12.5 items-center justify-between">
                        <div className="flex gap-x-4">
                            <h1 className="text-black text-[1.2rem] font-bold">
                                Welcome, Semiat
                            </h1>
                            <span className="inline-flex items-center rounded-full bg-green-300 px-3 py-1.5 text-sm text-green-700">
                                <img src={villaStarterIcon} /> Villa Starter
                            </span>
                        </div>
                        <button className="font-semibold text-lg">Rules</button>
                    </div>

                    <div className="flex gap-x-[1.5rem] justify-between h-35">
                        <div className="flex flex-1 rounded-[1rem] bg-[#039654] h-full p-4 justify-between">
                            <div className="flex flex-col h-full justify-between">
                                <h2 className="flex items-center text-white text-2xl">
                                    <span>Cashbacks</span>
                                    <button className="p-2.5">
                                        <img src={infoIcon} />
                                    </button>
                                </h2>
                                <h3 className="text-5xl text-white font-semibold">
                                    <span className="text-xl">₦</span>
                                    170,000
                                </h3>
                            </div>

                            <div className="flex items-center h-full">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.7002 15.1019L12.5173 10.2848L7.7002 5.46777"
                                        stroke="#F2F4F7"
                                        strokeWidth="2.40853"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-1 justify-between rounded-[1rem] justify-between bg-[#F2F4F7] w-[11rem] h-full p-4 border-[1px] border-[#FCFCFD]">
                            <div className="flex flex-col justify-between h-full w-[40%] ">
                                <h2 className="flex items-center text-gray-400 text-2xl">
                                    <span>Spacepoints</span>
                                    <button className="p-2.5">
                                        {/*info icon for spacepoints*/}
                                        <svg
                                            className="w-7 h-7 fill-gray-400"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_1595_178148)">
                                                <path
                                                    d="M12.0724 15.7853V11.881M12.0724 7.97664H12.0822M21.8333 11.881C21.8333 17.2718 17.4632 21.6419 12.0724 21.6419C6.68161 21.6419 2.31152 17.2718 2.31152 11.881C2.31152 6.49021 6.68161 2.12012 12.0724 2.12012C17.4632 2.12012 21.8333 6.49021 21.8333 11.881Z"
                                                    stroke="#F2F4F7"
                                                    strokeWidth="2.92826"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1595_178148">
                                                    <rect
                                                        width="23.4261"
                                                        height="23.4261"
                                                        fill="white"
                                                        transform="translate(0.359375 0.167969)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                </h2>
                                <h3 className="flex items-center gap-x-1.5 text-5xl text-gray-500 font-semibold ">
                                    <span className="inline-block text-lg">
                                        <img src={spacepointCoin} />
                                    </span>
                                    <span>0</span>
                                    <img src={comingSoonBadge} />
                                </h3>
                            </div>

                            <div className="flex items-center h-full">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.7002 15.1019L12.5173 10.2848L7.7002 5.46777"
                                        className="stroke-slate-500"
                                        strokeWidth="2.40853"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
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

                <OffersAndRewardsSection
                    rewardsState={rewardsState}
                    currentView={currentView}
                    setRewardsState={setRewardsState}
                    setCurrentView={setCurrentView}
                    rewardsSubState={rewardsSubState}
                    setRewardsSubState={setRewardsSubState}
                >
                    {rewardsState === "offers"
                        ? offers.map((it) => {
                              if (currentView === "block") {
                                  return (
                                      <BlockViewNode
                                          key={it.id}
                                          type={it.type}
                                          subType={it.subType}
                                          cashback={it.cashback}
                                          status={it.status}
                                      >
                                          {it.desc}
                                      </BlockViewNode>
                                  );
                              } else if (currentView === "list") {
                                  return (
                                      <ListViewNode
                                          key={it.id}
                                          type={it.type}
                                          subType={it.subType}
                                          cashback={it.cashback}
                                          status={it.status}
                                      >
                                          {it.desc}
                                      </ListViewNode>
                                  );
                              }
                          })
                        : rewardsState === "rewards"
                        ? renderRewards()
                        : ""}
                </OffersAndRewardsSection>
            </div>
        </>
    );
}
