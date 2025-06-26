import React from 'react'
import bgVideo from '../assets/bg-video.mp4'

const Main = () => {
  return (
    <div>
        <div className="overlay"></div>
      <video src={bgVideo} autoPlay loop muted/>
      <div className="content">
        <h1>Welcome</h1>
      </div>
    </div>
  )
}

export default Main
