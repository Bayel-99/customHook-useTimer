import React from 'react';
import useTimer from './components/UseTimer';
import TimerComponent from './components/TimerComponent';
const App = () => {
  useTimer();
  return (
    <div>
      <TimerComponent />
    </div>
  );
};

export default App;
