import userProfile from '../assets/user.png'
import robotProfile from '../assets/robot.png'

import './ChatMessage.css'

export function ChatMessage({message, sender}){
    return (
      <div className={sender==='robot'? 'chatMessage-robot':'chatMessage-user'}>
        {sender === 'robot' && <img src={robotProfile} className ='message-profile'/> }
        <div className='messages'>
          {message}
        </div>
        {sender === 'user' && <img src={userProfile} className ='message-profile'/> }
      </div>
    );
}
