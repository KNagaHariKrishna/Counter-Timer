import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [timeCount, setTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (timeCount > 0) {
      intervalId = setInterval(() => {
        setTime((timeCount) => timeCount - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [timeCount]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const count = parseInt(event.target.value);
      if (!isNaN(count) && count >= 0) {
        setTime(count);
      }
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter time in seconds"
        onKeyDown={handleKeyDown}
      />
      <p>{timeCount}</p>
    </div>
  );
}

export default CountdownTimer;
