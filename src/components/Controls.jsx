import Slider from "./ui/Slider";
import Switch from "./ui/Switch";
import styles from "./Controls.module.css";

export default function Controls({
  action,
  power,
  setPower,
  volume,
  setVolume,
}) {
  return (
    <div className={styles.controls}>
      <div style={{ width: "100%", textAlign:"center" }}>
        <div>Power</div>
        <Switch
          checked={power}
          onToggle={(e) => {
            setPower((prev) => !prev);
          }}
        />
      </div>
      <div className="displayText">{action}</div>
      <div className="volume-control">
        <Slider value={volume} onChange={setVolume} />
      </div>
    </div>
  );
}
