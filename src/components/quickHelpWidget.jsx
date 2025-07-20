import chatBubble from "../assets/chatBubble.svg";
export default function QuickHelpWidget() {
    return (
        <div className="flex justify-center items-center fixed top-[75%] right-20 w-20 h-20 rounded-full bg-[#075E54] border border-[#0F6258] shadow-chatBubble">
            <img alt="chat bubble" src={chatBubble} />
        </div>
    );
}
