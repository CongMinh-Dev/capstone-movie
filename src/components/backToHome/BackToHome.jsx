import React from 'react'
import "./backToHome.scss"
import {  useNavigate } from 'react-router-dom'

function BackToHome() {
  let navigate=useNavigate()
  return (
    <div className='back_home'>
      <button onClick={() => {
        navigate("/")
        
      }
      }>BACK</button>
    </div>
  )
}

export default BackToHome
