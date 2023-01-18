import "./App.css";
import Settings from "./Settings";
import Timer from "./Timer";
import { useState } from "react";
import SettingsContext from "./SettingsContext";
function App() {
  const [showSettings, setSwhoSettings] = useState(true);

  return (
    <main>
      <SettingsContext.Provider
        value={{
          workMinutes: 45,
          breakMinutes: 15,
        }}
      >
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
