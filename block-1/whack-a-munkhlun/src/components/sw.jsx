import { useState } from "react";
import { useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState({
    second: 0,
    ms: 0,
  });
  const [min, setMin] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    console.log(min);

    if (min >= 30000) {
      setRunning(false);
    }
    if (running) {
      interval = setInterval(() => {
        setMin((preTime) => preTime + 1);
      }, 1);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [running, min]);
  // console.log(min);

  // useEffect(() => {
  //   let interval;
  //   console.log(time.second);

  //   if (running) {
  //     interval = setInterval(() => {
  //       if (time.second !== 1) {
  //         setTime((prevTime) => {
  //           return {
  //             second: prevTime.ms == 90 ? prevTime.second + 1 : prevTime.second,
  //             ms: prevTime.ms == 100 ? (prevTime.ms = 0) : prevTime.ms + 1,
  //           };
  //         });
  //       }
  //       // } else alert("your time is invalid");
  //     }, 10);
  //   }
  //   return () => clearInterval(interval);
  // }, [running, time]);
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className="stopwatch">
      <button
        style={{
          fontWeight: "800",
          fontSize: "100px",
          backgroundColor: "#b40000",
          color: "white",
          border: "5px solid white",
          borderRadius: "15px",
        }}
        onClick={() => {
          setRunning(true);
        }}
      >
        Start
      </button>

      <div className="numbers">
        {min !== 30000 ? (
          <div>
            {/* <span>{time.second}:</span>
            <span>{time.ms}</span> */}
            <span>{min}</span>
          </div>
        ) : (
          <div
            style={{
              fontWeight: "600",
              fontSize: "60px",
              color: "yellow",
            }}
          >
            your time is up
          </div>
        )}
        <button
          style={{
            fontWeight: "800",
            fontSize: "100px",
            backgroundColor: "#b40000",
            color: "white",
            border: "5px solid white",
            borderRadius: "15px",
          }}
          onClick={refreshPage}
        >
          New Game
        </button>
      </div>
    </div>
  );
};
export default Stopwatch;
