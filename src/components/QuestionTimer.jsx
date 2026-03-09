import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setremainingTime] = useState(timeout);

    

  useEffect(() => {
    const interval = setInterval(() => {
      setremainingTime((prevRemainingTime) => prevRemainingTime -100);
  },100);
  
  return () =>{ clearInterval(interval) };
}, []);

  useEffect(() => {
   const timer = setTimeout(onTimeout, timeout);

   return () => clearTimeout(timer);
  }, [timeout, onTimeout]);
  return (
    <>
      <progress id="question-time" max={timeout} value={remainingTime} className={mode} />
    </>
  );
}
