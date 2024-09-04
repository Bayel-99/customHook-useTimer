import React from 'react';
import useTimer from './UseTimer';

function TimerComponent() {
  const { timeLeft, start, stop, restart, isRunning } = useTimer(2);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(
      2,
      '0'
    )}`;
  };

  return (
    <div>
      <div>Time Left: {formatTime(timeLeft)}</div>
      <button onClick={start} disabled={isRunning || timeLeft === 0}>
        Start
      </button>
      <button onClick={stop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={restart} disabled={timeLeft === 0 && isRunning}>
        Restart
      </button>
    </div>
  );
}

export default TimerComponent;
