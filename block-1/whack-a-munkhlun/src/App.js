import { useState, useEffect } from "react";
import Stopwatch from "./components/sw";
import "./App.css";
import Hole from "./components/munkhluns";
function App() {
  const [score, setScore] = useState(0);
  const [rats, setRats] = useState(
    new Array(3).fill(null).map(() => new Array(3).fill(false))
  );
  useEffect(() => {
    const interval = setInterval(() => {
      let newRats = new Array(3).fill(null).map(() => new Array(3).fill(false));
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          newRats[i][j] = Math.random() >= 0.5;
        }
      }
      setRats(newRats);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        {rats.map((ratRow, index) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {ratRow.map((rat, index) => (
              <Hole active={rat} setScore={setScore} />
            ))}
          </div>
        ))}
      </div>
      <div
        style={{
          marginLeft: "200px",
          color: "white",
          fontWeight: "800",
          fontSize: "100px",
        }}
      >
        <div>score: {score}</div>
        <Stopwatch />
      </div>
    </div>
  );
}

export default App;
