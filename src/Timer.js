import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const red = "#f54e4e";
const green = "#4aec8c";
function Timer() {
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
      <div></div>
    </div>
  );
}
export default Timer;
