import { useEffect, useRef } from 'react';

export default function MessageList({ messages, isTyping }) {
    const bottomRef = useRef(null);

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className="message-list">
            {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                    {msg.text}
                </div>
            ))}
            {isTyping && <div className="message typing-indicator"></div>}
            <div ref={bottomRef}></div>
        </div>
    )
}