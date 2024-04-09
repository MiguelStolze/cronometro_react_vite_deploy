import { useState, useEffect } from "react";

function Cronometro() {
  const [time, setTime] = useState(0);
  const [save, setSave] = useState([]);
  const [run, setRun] = useState(false);

  const startStop = () => {
    setRun(!run);
  };

  const reset = () => {
    setTime(0);
    setRun(false);
  };

  const saveTime = () => {
    setSave([...save, time]);
  };

  const deletSalved = () => {
    setSave([]);
  };

  useEffect(() => {
    let timer;

    if (run) {
      timer = setInterval(() => {
        setTime((time) => time + 1);
      }, 10);
    }

    return () => clearInterval(timer);
  }, [run]);

  return (
    <>
      <h1>
        {Math.floor(time / 60)
          .toString()
          .padStart(2, "0")}
        :{(time % 60).toString().padStart(2, "0")}
      </h1>

      <button onClick={startStop}>{run ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
      <button onClick={saveTime}>Save</button>
      <button onClick={deletSalved}>Delete saved</button>
      <ul>
        {save.map((save, index) => (
          <li key={index}>
            {Math.floor(save / 60)
              .toString()
              .padStart(2, "0")}
            :{(save % 60).toString().padStart(2, "0")}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cronometro;
