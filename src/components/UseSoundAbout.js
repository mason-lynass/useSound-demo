import JoshComeau from "../images/josh-comeau.png"
import Howler from "../images/howler.png"

function UseSoundAbout() {

    return (
        <div id="useSoundAbout">
            <h2 className="border"><a href="https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/">useSound</a> is a custom React Hook developed by Josh Comeau.</h2>
            <div id="USAFlex">
                <img id="JoshComeau" src={JoshComeau} alt="useSound docs" />
                <div >
                    <p className="border">Josh says "I defer most of the hard audio work to <a href="https://howlerjs.com/">Howler</a>".</p>
                    <img src={Howler} alt="Howler" id="Howler" />
                </div>
            </div>
            <div id="documentation">
                <h2>Documentation:</h2>
                <div id="docLinks">
                    <a href="https://github.com/joshwcomeau/use-sound">useSound</a>
                    <a href="https://github.com/goldfire/howler.js#documentation">Howler</a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement">HTMLAudioElement</a>
                </div>

            </div>
        </div>
    )
}

export default UseSoundAbout