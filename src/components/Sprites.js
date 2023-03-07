import DrumSprites from "../images/drum-sprites.png"

function Sprites () {

    return (
        <div id="sprites">
            <h2 className="border">Instead of importing sounds individually, you can use "sprites" to extract multiple samples from the same audio file</h2>
            <img className="code" src={DrumSprites} alt="sprites for drum machine" id="DrumSprites" />
        </div>
    )
}

export default Sprites