// Banner.js
import React, { useState, useEffect } from 'react';

const Banner = ({ visible = true, description, timer = 30, link }) => {
  const [countdown, setCountdown] = useState(timer);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdown]);

  if (!visible) return null;

  return (
    <div>
        <div>
      <h2>{description}</h2>
      <p>Countdown: {countdown} seconds</p>
      <a href={link}>Click here</a>
      
    </div>
    <div>
<p>hii</p>
    </div>
    </div>
    
  );
};

export default Banner;