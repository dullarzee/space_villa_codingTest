import cancelIcon from "../assets/cancelOrCloseIcon.svg";
import Offer10k from "../assets/10kOffer.svg";
import Offer100k from "../assets/100kOffer.svg";
import Offer5k from "../assets/5kOffer.svg";
import Offer50k from "../assets/50kOffer.svg";
import ticket from "../assets/offerTicket.svg";
import proptype from "prop-types";

OfferDetailsOverlay.propTypes = {
    currentOverlayData: proptype.object,
    setIsOverlayVisible: proptype.func,
};

export default function OfferDetailsOverlay({
    currentOverlayData,
    setIsOverlayVisible,
}) {
    const cashback = currentOverlayData.offer.cashback;

    const handleClose = () => {
        setIsOverlayVisible((prev) => ({
            ...prev,
            offer: false,
        }));
    };
    return (
        <>
            <div className="z-100 fixed top-0 left-0 w-[100vw] h-[100vh] bg-black/20" />
            <div className="z-110 fixed flex items-center w-[100vw] h-[100vh] justify-center top-0 left-0 ">
                <div className="relative flex flex-col items-center w-130 h-155 bg-white rounded-[18px] p-14 pt-8 gap-y-6 ">
                    <div className="flex h-8 w-full justify-end">
                        <img onClick={handleClose} src={cancelIcon} />
                    </div>
                    <div className="flex justify-center w-45 h-45 ">
                        <img
                            className="w-[100%]"
                            src={
                                cashback === 5000
                                    ? Offer5k
                                    : cashback === 10000
                                    ? Offer10k
                                    : cashback === 50000
                                    ? Offer50k
                                    : cashback === 100000
                                    ? Offer100k
                                    : ""
                            }
                        />
                    </div>
                    <div className="flex flex-col items-start gap-[25px]">
                        <span className="inline-flex">
                            <img src={ticket} />
                            {currentOverlayData.offer.subType}
                        </span>
                        <h2 className="text-[20px]">
                            {currentOverlayData.offer.desc}
                        </h2>
                        <h3>
                            <strong>Eligibility:</strong>
                        </h3>
                        <p>{currentOverlayData.offer.eligibility}</p>
                    </div>
                    <button className="rounded-[9px] bg-[#039855] py-3 w-full text-white cursor-pointer">
                        Continue
                    </button>
                </div>
            </div>
        </>
    );
}
