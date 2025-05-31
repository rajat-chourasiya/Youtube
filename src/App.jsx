import React from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Home from './components/Home'
import PlayingVideo from './components/PlayingVideo'
import { useAuth } from './context/AuthProvider'
import Loading from './loader/Loading'
import { Route, Routes } from 'react-router-dom'


export default function App() {
  const {loading}=useAuth()
  return (
  <div>
    {loading && <Loading/>}
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/search/:searchQuery" element={<Search />}></Route>
      <Route path="/video/:id" element={<PlayingVideo />}></Route>
    </Routes>
  </div>
  )
}
//VITE_YOUTUBE_API_KEY="cccfbdf069msh258bc93af90fac3p137b1ajsn9181f9bb64ac"