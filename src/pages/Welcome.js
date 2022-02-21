import React from 'react'
import '../styles/style.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import { Socket, io } from 'socket.io-client'
// import Nav from '../components/Nav'

function Welcome({socket}) {

  const [username, setUsername] = useState("")
  const [room, setRoom] = useState("")

  const joinRoom = () =>{
    if(username !== "" && room === ""){

    }else if(username !=="" && room !== ""){
      socket.emit("joinRoom", room)
    }
  }

  return (
    <>
      {/* <Nav /> */}
      <div className='welcome'>
        <section>
          <header>
            <h1>This is a shitty chat app</h1>
          </header>

          <main>
            <h2>If you ever want to use it, just ckick on the button</h2>
            <input type="text" placeholder='Room id...' onChange={e =>{setRoom(e.target.value)}} />
            <br />
            <input type="text" placeholder='Name' onChange={e => setUsername(e.target.value)} />
            <br />
            <button onClick={joinRoom}>Enter</button>
          </main>

          <footer>
            <Link to="/chat">Chat</Link>
          </footer>
        </section>
      </div>
    </>
  )
}

export default Welcome