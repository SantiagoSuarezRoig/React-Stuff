import { useEffect, useState } from 'react';
import './App.css'

import {ChatInput} from './Components/ChatInput'
import ChatMessagesComponents from './Components/ChatMessagesComponent'



function App() {
  const chatMessagesFromStorage = JSON.parse(localStorage.getItem('Messages')) || []  
  const [chatmessages,setChatMessages] = useState(chatMessagesFromStorage)
  const [inTop,changeInTop] = useState(true)

  useEffect(()=>{
    localStorage.setItem('Messages',JSON.stringify(chatmessages))
  },[chatmessages])

  function moveTextBox(){
    changeInTop(!inTop)
  }

  return (
      <div className='app-container'>

        {inTop ?
        <>
          <ChatInput
          chatmessages={chatmessages}
          setChatMessages={setChatMessages} />

          {chatmessages.length == 0 && <p>Bienvenido al chatBot de los cojones</p> }

          <ChatMessagesComponents
          chatmessages={chatmessages} />

        </>
          :
        <>
        
          <ChatMessagesComponents
          chatmessages={chatmessages} />

          {chatmessages.length == 0 && <p>Bienvenido al chatBot de los cojones</p> }

          <ChatInput
          chatmessages={chatmessages}
          setChatMessages={setChatMessages} />
        </>
        }
        
        <div className= 'textbox-switcher-container'>
          <a onClick={moveTextBox} className= 'textbox-switcher'>
            Move textbox to {inTop? 'bottom':'top'}
          </a>
        </div>

      </div>
      );
}

export default App
