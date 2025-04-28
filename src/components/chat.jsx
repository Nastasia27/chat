import { useEffect, useRef, useState } from 'react';
import { useChatStore } from '../store/chatStore';
import MessageList from './messageList';

export default function Chat() {
    const [text, setText] = useState('');
    const { messages, isTyping, addMessage, setIsTyping } = useChatStore();
    const bottomRef = useRef(null);
    const textareaRef = useRef(null);

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (text.trim() === '') return;

        addMessage({ sender: 'user', text: text });
        setText('');

        setTimeout(() => {
            handleInputResize();
        }
        , 100);
        
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
          addMessage({ sender: 'bot', text: "Bot message." });
        }, 1500);
      };
    
    const handleInputResize = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'; 
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }

    return (
        <div className='chat-container'>
            <MessageList messages={messages} isTyping={isTyping}/>
            <div className='input-container'>
                <div className='input'>
                    <label htmlFor="chat"></label>
                    <textarea 
                        ref={textareaRef}
                        onInput={handleInputResize}
                        id='chat'
                        placeholder='Type your message...'
                        rows="2"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    >    
                    </textarea>
                </div>
                
                <div className='button-container'>
                    <button 
                        onClick={handleSend}
                        className="button-primary"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}