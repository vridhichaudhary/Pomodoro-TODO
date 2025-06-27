import React, { useState } from 'react';
import bgVideo from '../assets/bg-video.mp4';

const Main = () => {
  const [intervalId, setIntervalId] = useState(null);
  const [count, setCount] = useState(0);

  const startClickHandler = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const resetClickHandler = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setCount(0);
  };

  const stopClickHandler = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={bgVideo} autoPlay loop muted />
      <div className="content">
        <h1 className='title'>STUDY TIMER</h1>
        <hr />
        <p className='timer' id='timer'>{new Date(count * 1000).toISOString().substr(11, 8)}</p>
        <div className="button-wrapper">
          <button onClick={startClickHandler} className="start">Start</button>
          <button onClick={stopClickHandler} className="stop">Pause</button>
          <button onClick={resetClickHandler} className="reset">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
