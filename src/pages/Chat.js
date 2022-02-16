import React from 'react'
import {useEffect, useState} from 'react'

function Chat() {

  const [chatList, setChatList] = useState("")
  
  return (
    <div className='chat-wrapper'>
      <section>
        <header>Chat</header>
        <main>
          {/* {chatList} */}
          <div className='textBubbles'> <strong>UserNotFound</strong> 
          <br />
          This is just the begining</div>
        </main>
      </section>
      <div className='input-space'>
        <input className='msg-box' />
        <button type='submit' >Send</button>
      </div>
    </div>
  )
}

export default Chat