import { useState, useEffect } from "react";

export function OTPGenerator() {
  const [otp, setOTP] = useState(null);
  const [timerValue, setTimerValue] = useState(null);

  function handleOTPGeneration() {
    setOTP(Math.floor(Math.random() * 999999));
    setTimerValue(5);
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      setTimerValue(timerValue > 0 ? timerValue - 1 : 0);
    }, 999);

    return () => clearTimeout(timer);
  }, [timerValue]);

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">
        {otp ? otp : "Click 'Generate OTP' to get a code"}
      </h2>
      <p
        id="otp-timer"
        role="timer"
        aria-live={timerValue === 1 ? "assertive" : "polite"}
      >
        {otp
          ? timerValue
            ? `Expires in: ${timerValue} seconds`
            : "OTP expired. Click the button to generate a new OTP."
          : ""}
      </p>
      <button
        disabled={timerValue && true}
        id="generate-otp-button"
        onClick={handleOTPGeneration}
        style={{ border: `2px solid ${timerValue ? "red" : "green"}` }}
      >
        Generate OTP
      </button>
    </div>
  );
}
