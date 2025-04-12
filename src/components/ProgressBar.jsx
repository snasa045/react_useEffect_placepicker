import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const remainingTimer = setInterval(() => {
      console.log("setInterval");
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);

    return () => {
      clearInterval(remainingTimer);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
