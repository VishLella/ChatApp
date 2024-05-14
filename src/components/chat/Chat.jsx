import { useState } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"

const Chat = () => {
    const [emoji, setEmoji] = useState(false);
    const [textBox, setTextBox] = useState("");


    /*
    activeSkinTone: "neutral"
    emoji: "💓"
    getImageUrl: ƒ getImageUrl(emojiStyle)
    imageUrl: "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f493.png"
    isCustom: false
    names: (2) ['heartbeat', 'beating heart']
    unified: "1f493"
    unifiedWithoutSkinTone: "1f493"
    [[Prototype]]: Object
    */
    const handleEmoji = (e) => {
        setTextBox(prev => prev + e.emoji);
        setEmoji(false);
    };

    return (
        <div className="chat">
            <div className="chat_top">
                <div className="chat_user">
                    <img src="./avatar.png" alt="" />
                    <div className="chat_texts">
                        <span>John Smith</span>
                        <p>Lorem ipsum dolor, sit amet.</p>
                    </div>
                </div>
                <div className="chat_icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="chat_center"></div>
            <div className="chat_bottom">
                <div className="send_icons">
                    <img src="./img.png" alt="" className="" />
                    <img src="./camera.png" alt="" className="" />
                    <img src="./mic.png" alt="" className="" />
                </div>
                <input type="text" placeholder="Type a message.." value={textBox} onChange={(e) => setTextBox(e.target.value)} />
                <div className="chat_emoji">
                    <img src="./emoji.png" alt="" onClick={() => setEmoji(prev => !prev)} />
                    <div className="picker">
                        <EmojiPicker open={emoji} onEmojiClick={handleEmoji} />
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}

export default Chat