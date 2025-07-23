import chatBubble from "../assets/chatBubble.svg";
export default function QuickHelpWidget() {
    return (
        <div className="flex justify-center items-center z-200 fixed top-[80%] md:top-[75%] right-7 lg:right-20 w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#075E54] border border-[#0F6258] shadow-chatBubble">
            <img alt="chat bubble" className="w-8 md:w-auto" src={chatBubble} />
        </div>
    );
}
