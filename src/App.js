import React  from 'react';
import './styles/style.css'
import io from 'socket.io-client'
import Chat from './pages/Chat'
import Welcome from './pages/Welcome'
import { BrowserRouter, Route, Routes } from "react-router-dom";

const socket = io.connect("http://localhost:3001")

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome socket={socket} />} />
        <Route path="/chat" element={<Chat socket={socket} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
