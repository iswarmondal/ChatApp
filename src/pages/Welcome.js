import React from 'react'
import '../styles/style.css'
import {Link} from 'react-router-dom'
// import Nav from '../components/Nav'

function Welcome() {
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