import userProfile from '../assets/asimov620.jpg'
import robotProfile from '../assets/robot.png'
import dayjs from 'dayjs'


import './ChatMessage.css'

export function ChatMessage({message, sender}){
  const timeNow = dayjs().format('HH:mm')
    return (
      <div className={sender==='robot'? 'chatMessage-robot':'chatMessage-user'}>
        {sender === 'robot' && <img src={robotProfile} className ='message-profile'/> }
        
        <div className='messages'>
          {message}
          <div className='messageTime'>
            {timeNow}
          </div>
        </div>
        {sender === 'user' && <img src={userProfile} className ='message-profile'/> }
      </div>
    );
}
