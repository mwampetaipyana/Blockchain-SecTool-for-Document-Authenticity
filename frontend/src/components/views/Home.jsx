import React from 'react'
import Header from '../Header'
import Hero from '../Hero'
const Home = () => {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
    <div className="flex-1">
        <Header />
        <Hero/> 
    </div>
    </div>
  )
}

export default Home
