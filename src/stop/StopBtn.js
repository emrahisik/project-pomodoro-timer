import React from "react";


const StopBtn = ({ session, setSession, setIsTimerRunning }) => {
  // Reset the timer when stopped
  const stopSessionHandler = () => {
    setSession(null);
    setIsTimerRunning(false);
  };

  return (
    <button
      type="button"
      className="btn btn-secondary"
      data-testid="stop"
      title="Stop the session"
      onClick={stopSessionHandler}
      disabled={!session}
    >
      <span className="oi oi-media-stop" />
    </button>
  );
};

export default StopBtn;