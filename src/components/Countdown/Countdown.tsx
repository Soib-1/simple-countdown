import { useEffect, useState } from "react";
import "./Countdown.style.scss";

const formatTimerDigit = (digit: number) => {
  return digit > 9 ? digit + "" : "0" + digit;
};

const Countdown = () => {
  const newYear = new Date().getFullYear() + 1 + "";
  const [daysText, setDaysText] = useState("");
  const [hoursText, setHoursText] = useState("");
  const [minutesText, setMinutesText] = useState("");
  const [secondsText, setSecondsText] = useState("");

  useEffect(() => {
    const timer = (newYear: string) => {
      const eventTime = new Date(`01-01-${newYear}`).getTime();
      const currentTime = new Date().getTime();
      const diffTime = eventTime - currentTime;
      let duration = diffTime;
      const interval = 1000;
      if (diffTime > 0) {
        setInterval(() => {
          if (duration > 0) {
            duration = duration - interval;

            setDaysText(
              formatTimerDigit(Math.floor(duration / 1000 / 3600 / 24))
            );
            setHoursText(
              formatTimerDigit(Math.floor((duration / 1000 / 3600) % 24))
            );
            setMinutesText(
              formatTimerDigit(Math.floor(((duration / 1000 / 60) % 24) % 60))
            );
            setSecondsText(
              formatTimerDigit(Math.floor((duration / 1000) % 60))
            );
          }
        }, interval);
      }
    };
    timer(newYear);
  }, [newYear]);
  return (
    <div className="timer-container">
      <p>
        {daysText}
        <span>d</span>
      </p>
      <p>
        {hoursText}
        <span>hr</span>
      </p>
      <p>
        {minutesText}
        <span>min</span>
      </p>
      <p>
        {secondsText}
        <span>sec</span>
      </p>
    </div>
  );
};

export default Countdown;
