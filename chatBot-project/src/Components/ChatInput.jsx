import { Chatbot } from 'supersimpledev';
import { useState } from 'react';
import './ChatInput.css'


export function ChatInput({chatmessages,setChatMessages}){

  const [inputText, setInputText] = useState('')
  const [isLoading,changeLoading] = useState(false)

  function saveInput(event){
    setInputText(event.target.value)
  }

  async function sendMessage(){

    if(inputText === '' || isLoading)
      return;

    const newMessage = [...chatmessages, {
      message: inputText,
      sender: 'user',
      id: crypto.randomUUID()
    }]

    setInputText('')

    
    setChatMessages([...newMessage, {
      message: 'Loading...',
      sender: 'robot',
      id: crypto.randomUUID()
    }])
    

    changeLoading(true)
    let responseFromBack = await Chatbot.getResponseAsync(inputText) 
    changeLoading(false)
    

    setChatMessages([...newMessage, {
      message: responseFromBack,
      sender: 'robot',
      id: crypto.randomUUID()
    }])
      
  }

  
  function onkeydownInput(event){
    if(event.key === 'Enter'){
      sendMessage();
      return;
    }
    if(event.key === 'Escape')
      setInputText('');
  } 


  function ClearMessages(){
    localStorage.removeItem('Messages')
    setChatMessages([])
  }

  return (
    <div className="Chat-input-container">
      <input 
        placeholder="Send a message to ChatBot"
        size="30"
        onChange={saveInput}
        onKeyDown={onkeydownInput}
        value={inputText}
        className = "input"
        />

      <button
      onClick={sendMessage}
      className = "send-button"
      >Send</button>

      <button
      onClick={ClearMessages}
      className = "send-button"
      >Clear</button>
    </div>

  );
}

