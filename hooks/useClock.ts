'use client'

const { useState, useEffect } = require("react");

export default function useClock() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const getLocalTimeString = (date = new Date()) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  }

  const getLocalDateString = (date = new Date()) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    });
  }

  useEffect(() => {
      const now = new Date();
      setTime(getLocalTimeString(now))
      setDate(getLocalDateString(now))

      const interval = setInterval(() => {
        const now = new Date();
        setTime(getLocalTimeString(now));
        setDate(getLocalDateString(now));
      }, 1000)

      return () => clearInterval(interval);
  }, []);

  return {time, date};
}
