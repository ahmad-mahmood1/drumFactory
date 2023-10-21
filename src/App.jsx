import { useEffect, useState } from "react";
import { keyAudioHash } from "./constants";
import Drum from "./components/Drum";
import Controls from "./components/Controls";

function App() {
  const [action, setAction] = useState("");

  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(30);

  const [sounds] = useState(() => {
    return Object.keys(keyAudioHash).map((key) => ({
      key: key.toUpperCase(),
      src: keyAudioHash[key],
    }));
  });

  return (
    <div id="drum-machine">
      <div id="display">
        <Drum
          sounds={sounds}
          setAction={setAction}
          volume={volume}
          power={power}
        />
        <Controls
          action={action}
          power={power}
          volume={volume}
          setVolume={(e) => {
            setAction("Volume: " + e.target.value);
            setVolume(e.target.value);
          }}
          setPower={setPower}
        />
      </div>
    </div>
  );
}

export default App;
