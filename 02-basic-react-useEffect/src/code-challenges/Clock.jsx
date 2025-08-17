import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  console.log(time);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

  let greeting;
  if (hours >= 5 && hours < 12) {
    greeting = "Good Morning";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <div>
      <h1>{formattedTime}</h1>
      <h2>{greeting}</h2>
    </div>
  );
}

export default Clock;
