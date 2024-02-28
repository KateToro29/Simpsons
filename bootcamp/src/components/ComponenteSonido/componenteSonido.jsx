
import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';


const AudioButton = ({ soundSrc }) => {
  const [playSound, setPlaySound] = useState(false);

  const handleClick = () => {
    setPlaySound(!playSound);

  };

  return (
    <div>
      
      <button onClick={handleClick}>Reproducir Sonido</button>
      {playSound && <ReactAudioPlayer src={soundSrc} autoPlay />}
    </div>
  );
};

export default AudioButton;



