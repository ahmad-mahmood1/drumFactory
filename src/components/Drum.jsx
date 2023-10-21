import { useEffect } from "react";

export default function Drum({ sounds = [], setAction, volume, power }) {
  const playAudio = (audio) => {
    if (power) {
      audio.currentTime = 0;
      audio.volume = parseFloat(volume / 100).toFixed(2);
      audio.play();
    }
  };
  const handleKeyDown = (e) => {
    let pressedKey = e.key.toUpperCase();
    let element = document.getElementById("drum-pad-" + pressedKey);
    let audioElement = element?.childNodes?.[1];

    if (audioElement) {
      setAction(pressedKey);
      !element?.classList["value"]?.includes("active") &&
        element?.classList.toggle("active");
      playAudio(audioElement);
    }
  };

  const handleKeyUp = (e) => {
    let pressedKey = e.key.toUpperCase();
    let element = document.getElementById("drum-pad-" + pressedKey);
    element?.classList["value"].includes("active") &&
      element?.classList.toggle("active");
  };

  useEffect(() => {
    window.addEventListener("keypress", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keypress", handleKeyDown);
      window.removeEventListener("keypress", handleKeyUp);
    };
  }, [volume, power, sounds]);

  return (
    <div className="drum">
      {sounds?.map((item, i) => {
        let { key: keyToPress, src } = item;
        return (
          <div
            className="drum-pad"
            id={"drum-pad-" + keyToPress}
            key={keyToPress}
            onClick={() => {
              setAction(keyToPress);
              let element = document.getElementById(keyToPress);
              playAudio(element);
            }}
          >
            {keyToPress}
            <audio src={src} id={keyToPress} className="clip" />
          </div>
        );
      })}
    </div>
  );
}
