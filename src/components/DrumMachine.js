import { useState } from "react"
import useKeypress from 'react-use-keypress'

import useSound from "use-sound"

import HH from "../sounds/hihat.wav"
import Kick from "../sounds/kick.wav"
import SnareClap from "../sounds/clap.wav"
import Crash from "../sounds/crash.wav"
import FloorTom from "../sounds/floor-tom.wav"
import RackTom from "../sounds/rack-tom.wav"
import Ride from "../sounds/ride.wav"
import Snare from "../sounds/snare.wav"

function DrumMachine() {

    const [crash] = useSound(Crash)
    const [hihat] = useSound(HH)
    const [kick] = useSound(Kick)
    const [clap] = useSound(SnareClap)
    const [ride] = useSound(Ride)
    const [snare] = useSound(Snare)
    const [ft] = useSound(FloorTom)
    const [rt] = useSound(RackTom)

    useKeypress(["1", "2", "3", "4", ";", "q", "w", "e", "r"], (e) => {
        if (e.key === "1") {
            clap()
        } else if (e.key === "2") {
            rt()
        } else if (e.key === "3") {
            ft()
        } else if (e.key === "4") {
            hihat()
        } else if (e.key === "q") {
            kick()
        } else if (e.key === "w") {
            snare()
        } else if (e.key === "e") {
            ride()
        } else if (e.key === "r") {
            crash()
        }
    })


    return (
        <div>
            <h1>8 voice Drum Machine</h1>
            <h2>click on the buttons to hear each sound</h2>
            <h3>then use "1, 2, 3, 4, q, w, e, & r" keys on the keyboard to finger drum!</h3>
            <div id="DMTitles">
                <h2>clap</h2>
                <h2>rack tom</h2>
                <h2>floor tom</h2>
                <h2>hi hat</h2>
            </div>
            <div id="DMButtons">
                <button className="button" onClick={clap}>1</button>
                <button className="button" onClick={rt}>2</button>
                <button className="button" onClick={ft}>3</button>
                <button className="button" onClick={hihat}>4</button>
                <button className="button" onClick={kick}>q</button>
                <button className="button" onClick={snare}>w</button>
                <button className="button" onClick={ride}>e</button>
                <button className="button" onClick={crash}>r</button>
            </div>
            <div id="DMTitles">
                <h2>kick</h2>
                <h2>snare</h2>
                <h2>ride</h2>
                <h2>crash</h2>
            </div>

        </div>
    )
}

export default DrumMachine