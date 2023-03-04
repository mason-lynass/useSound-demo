import PluckLow from "../sounds/pluck-pcm8.wav"
import PluckMid from "../sounds/pluck-1.wav"
import PluckHigh from "../sounds/pluck-2.wav"

import { useState } from "react"
import useKeypress from 'react-use-keypress'
import useSound from "use-sound"

function RandomNotes () {

  const [LplaybackRate, setLPlaybackRate] = useState(1)
  const [MplaybackRate, setMPlaybackRate] = useState(1)
  const [HplaybackRate, setHPlaybackRate] = useState(1)
  // const [playbackRate, setPlaybackRate] = useState(1)

  let playbackRate = 1

  const [pluckLow] = useSound(PluckLow, { playbackRate, interrupt: true, volume: .7 })
  const [pluckMid] = useSound(PluckMid, { playbackRate, interrupt: true, volume: .6 })
  const [pluckHigh] = useSound(PluckHigh, { playbackRate, interrupt: true, volume: .5 })

  // instrument functions, making one note

  function low() {
    const scale = [1, 1.122, 1.26, 1.335, 1.498, 1.682, 1.888, 2]
    const pitchMod = scale[Math.floor(Math.random() * scale.length)] / 2
    
    // this doesn't work because it changes the state, re-rendering the component, resetting the fourTimer variable
    playbackRate = pitchMod
    console.log(pitchMod)
    pluckLow()
  }

  function middle() {
    const scale = [1, 1.122, 1.26, 1.335, 1.498, 1.682, 1.888, 2]
    const pitchMod = scale[Math.floor(Math.random() * scale.length)]
    // let pitchMod = Math.round(Math.random()*100) / 100 + .5
    console.log(pitchMod)
    // setPlaybackRate(pitchMod)
    pluckMid()
  }

  function high() {
    const scale = [1, 1.122, 1.26, 1.335, 1.498, 1.682, 1.888, 2]
    const pitchMod = scale[Math.floor(Math.random() * scale.length)] * 2
    // let pitchMod = Math.round(Math.random()*100) / 100 + .5
    console.log(pitchMod)
    // setPlaybackRate(pitchMod)
    pluckHigh()
  }

  // playing notes from instrument functions at an interval (ms)

  let fourTimer;
  function startFourTimer() {
    if (!fourTimer) {
      fourTimer = setInterval(low, 700)
    }
  }

  let eightTimer;
  function startEightTimer() {
    if (!eightTimer) {
      eightTimer = setInterval(middle, 600)
    }
  }

  let sixteenTimer;
  function start16Timer() {
    if (!sixteenTimer) {
      sixteenTimer = setInterval(high, 500)
    }
  }

  console.log(fourTimer)
  // a feeble attempt at a STOP button

  function stopFourTimer() {
    console.log("stoppppp")
    clearInterval(fourTimer)
    fourTimer = null;
  }

  // play button

  function arpeggiator() {
    // start16Timer()
    // startEightTimer()
    startFourTimer()
  }

    return (
        <div>
          <h1>Random note generator</h1>
          <button onClick={arpeggiator}>START</button>
          <button onClick={stopFourTimer}>STOP</button>
        </div>
    )
}

export default RandomNotes