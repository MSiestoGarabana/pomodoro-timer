import "./App.css";
import Settings from "./Settings";
import Timer from "./Timer";
import { useState } from "react";
import SettingsContext from "./SettingsContext";
function App() {
  const [showSettings, setSwhoSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);
  return (
    <main>
      <SettingsContext.Provider
        value={{
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
