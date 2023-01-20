import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PauseButton from "./PauseButton";
import PlayButton from "./PlayButton";
import SettingsButton from "./SettingsButton";
import { useContext } from "react";
import SettingsContext from "./SettingsContext";

const red = "#f54e4e";
const green = "#4aec8c";
function Timer() {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div>
      <CircularProgressbar
        value={60}
        text={`${60}%`}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: red,
          tailColor: "rgba(255, 255, 255, .2)",
        })}
      />
      <div style={{ marginTop: "20px" }}>
        <PlayButton />
        <PauseButton />
      </div>
      <div style={{ marginTop: "20px" }}>
        <SettingsButton
          onClick={() =>
            console.log("works") || settingsInfo.setShowSettings(true)
          }
        />
      </div>
    </div>
  );
}
export default Timer;
