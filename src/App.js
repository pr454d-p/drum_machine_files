import { useState , useEffect } from 'react';
import './style.css';
import cev from './music/Cev_H2.mp3';
import dsc from "./music/Dsc_Oh.mp3";
import hea1 from './music/Heater-1.mp3';
import hea2 from './music/Heater-2.mp3';
import hea3 from './music/Heater-3.mp3';
import hea4 from './music/Heater-4_1.mp3';
import hea6 from './music/Heater-6.mp3';
import kick from './music/Kick_n_Hat.mp3';
import rp4 from './music/RP4_KICK_1.mp3';

function App() {
  const [displayScreen, setDisplayScreen] = useState('')
  useEffect(()=>{
    document.addEventListener('keydown',(event)=>[
      playMusic(event.key.toUpperCase())
    ])
  },[]);
  const drumSound = [
    {
      id:113,
      text:'Q',
      src: cev
    },
    {
      id:119,
      text:'W',
      src: dsc
    },
    {
      id:101,
      text:'E',
      src: hea1
    },
    {
      id:97,
      text:'A',
      src: hea2
    },
    {
      id:115,
      text:'S',
      src: hea3
    },
    {
      id:100,
      text:'D',
      src: hea4
    },
    {
      id:122,
      text:'Z',
      src: hea6
    },
    {
      id:120,
      text:'X',
      src: kick
    },
    {
      id:99,
      text:'C',
      src: rp4
    }
  ]
const playMusic =(beat)=>{
const audio = document.getElementById(beat)
audio.play();
setDisplayScreen(beat)
}


  return (
    <div id="container">
      <div id="drum-machine" >
        {
          drumSound.map((drumpad)=> 
          <button key={drumpad.src} 
          className='drum-pad' id={drumpad.src} onClick={()=>{
            playMusic(drumpad.text)
          }} >
            {drumpad.text}
            <audio className='clip' id={drumpad.text} src={drumpad.src}>
            </audio>
          </button>)
        }
      <div id="display">
        {displayScreen}
      </div>

      </div>
    </div>
  );
}

export default App;
