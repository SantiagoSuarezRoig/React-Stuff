import { useRef, useEffect } from 'react';
import {ChatMessage} from './ChatMessage'

import './ChatMessagesComponent.css'



function ChatMessagesComponents({chatmessages}){
  
  const chatMessageRef = useAutoScroll([chatmessages])

  function useAutoScroll(dependencie){
    const chatMessagesRef = useRef(null);
    
    useEffect(()=>{
      const ContainerElem = chatMessagesRef.current; 
      if(ContainerElem){
        ContainerElem.scrollTop = ContainerElem.scrollHeight ; 
      }
    },dependencie)

    return chatMessagesRef;
  }



  return(
    <div
    className='messages-container'
    ref={chatMessageRef
    }>

      {chatmessages.map((chatMessage)=>{
        return (
          <ChatMessage
          message = {chatMessage.message}
          sender = {chatMessage.sender}
          key={chatMessage.id}
          />);
        })}

    </div>
  );
}


export default ChatMessagesComponents