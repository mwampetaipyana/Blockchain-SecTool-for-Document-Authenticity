import React from 'react'
import Footer from './Footer'

const Hero = () => {
  return (
   <div> 
        <div className="text-center bg-white text-gray-800 h-screen py-24 px-12 bg-[url('https://www.vestinda.com/wp-content/uploads/2023/09/flash-loans-defi-1030x483.jpg')] bg-cover bg-center bg-no-repeat">
            <h1
            className="text-5xl md:text-6xl xl:text-7xl font-bold
            tracking-tight mb-12">
            <span className="capitalize text-slate-100">SEC-TOOL FOR DOCUMENT AUTHENTICITY </span>
            <br />
            <span className=" text-gray-200">With Blockchain Timestamps.</span>
            </h1>
        </div>

        <div className='text-center h-auto bg-slate-500 opacity-60 text-gray-900  py-24 px-12 bg-cover bg-center bg-no-repeat'>
            
            <h2 className='text-2xl text-gray-50 md:text-6xl xl:text-7xl font-bold
            tracking-tight mb-12'>
               Why Sec-Tool for Document Authenticity 
            </h2>
            <p className='text-center text-gray-50 text-2xl'>
            This project aims to enhance document authenticity, build trust in information sharing,<br/> 
            mitigate tampering and forgery, reduce disputes and litigation risks, and comply with regulatory requirements.<br/>
            Security tool verify document authenticity in Tanzania public organizations using blockchain timestamping,<br/>
            incorporating features like authentication mechanism and blockchain integration.
            </p>
        </div>

        <div className='h-1'>
            <Footer/>

        </div>
        
   </div>
    
  
    
  )
}

export default Hero
