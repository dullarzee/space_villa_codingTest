import proptype from "prop-types";

RewardSuccessOverlay.propTypes = {
    currentOverlayData: proptype.object,
    setIsOverlayVisible: proptype.func,
};
export default function RewardSuccessOverlay({
    currentOverlayData,
    setIsOverlayVisible,
}) {
    const handleClick = () => {
        setIsOverlayVisible((prev) => ({
            ...prev,
            rewardsSuccess: false,
        }));
    };
    return (
        <>
            <div className="z-100 fixed top-0 left-0 w-[100vw] h-[100vh] bg-black/20" />
            <div className="z-110 fixed flex items-center w-[100vw] h-[100vh] justify-center top-0 left-0 ">
                <div className="relative flex flex-col items-center w-120 h-115 bg-white rounded-[18px] p-11 pt-8 gap-y-6 ">
                    <div className="flex-1 "></div>
                    <div className="flex flex-col justify-between flex-1 ">
                        <h2 className="text-slate-800 text-2xl text-center">
                            Congratulations
                        </h2>
                        <p className="text-center text-slate-700 text-[0.8rem] px-[10%]">
                            You just claimed a{" "}
                            <strong className="text-black">
                                #{currentOverlayData.rewardsSuccess.cashback}
                            </strong>{" "}
                            cashback Reward for performing a shortlet
                            transaction above{" "}
                            <strong className="text-black">#50,000</strong>
                        </p>
                        <button
                            onClick={handleClick}
                            className="rounded-[9px] bg-[#039855] py-3 w-full text-white cursor-pointer"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
