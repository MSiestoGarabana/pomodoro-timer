import "./App.css";
import Settings from "./Settings";
import Timer from "./Timer";
import { useState } from "react";
function App() {
  const [showSettings, setSwhoSettings] = useState(true);

  return <main>{showSettings ? <Settings /> : <Timer />}</main>;
}

export default App;
