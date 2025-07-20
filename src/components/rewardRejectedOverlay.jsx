import proptype from "prop-types";

RewardRejectedOverlay.propTypes = {
    setIsOverlayVisible: proptype.func,
};

export default function RewardRejectedOverlay({ setIsOverlayVisible }) {
    const handleClick = () => {
        setIsOverlayVisible((prev) => ({
            ...prev,
            rewardsRejected: false,
        }));
    };
    return (
        <>
            <div className="z-100 fixed top-0 left-0 w-[100vw] h-[100vh] bg-black/20" />
            <div className="z-110 fixed flex items-center w-[100vw] h-[100vh] justify-center top-0 left-0 ">
                <div className="relative flex flex-col justify-between items-center w-115 h-100 bg-white rounded-[18px] p-11 pt-8 gap-y-6 ">
                    <div className="flex flex-col gap-y-5">
                        <img className="border w-15 h-15 rounded-full" />
                        <h2 className="text-4xl text-slate-900">
                            Reason for Rejection
                        </h2>
                        <p className="text-xl">
                            You didn&apos;t meet up the eligibility for this
                            reward
                        </p>
                    </div>

                    <button
                        onClick={handleClick}
                        className="inline-flex items-center justify-center text-xl rounded-[9px] bg-[#039855] py-3 w-full text-white cursor-pointer"
                    >
                        Check out other rewards
                    </button>
                </div>
            </div>
        </>
    );
}
