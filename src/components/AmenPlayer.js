import useSound from "use-sound"
import { useState } from "react"

import AmenBreak from "../sounds/amen-break.mp3"
import VinylIcon from "./VinylIcon"
import AmenCode from "../images/amen-code.png"

function AmenPlayer() {

    const [amen, { pause }] = useSound(AmenBreak)
    const [isPlaying, setIsPlaying] = useState(false)

    function handlePlay() {
        setIsPlaying(true)
        amen()
    }

    function handlePause() {
        setIsPlaying(false)
        pause()
    }

    return (
        <div id="AmenPlayer">
            <div>
                <img src={AmenCode} alt="code for this component" id="AmenCode" />
            </div>
            
            <div id="AmenRight">
                <h2>In the second element of the array, you can use "stop" or "pause" functions to stop the audio.</h2>
                <p>Amen Break - from "Amen, Brother" by the Winstons</p>
                <div id="VinylIcon">
                <a onClick={isPlaying ? handlePause : handlePlay}>
                    <VinylIcon />
                </a>
            </div>
            </div>
        </div>

    )
}

export default AmenPlayer