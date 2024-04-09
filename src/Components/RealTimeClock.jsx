import { useState, useEffect } from 'react';
import { IoTimerOutline } from "react-icons/io5";

// import {  useContext } from 'react';
// import { ClockIcon } from '@heroicons/react/outline';
// import { TaskContext } from '../utils/TaskContext';
// import Task from './TaskOperations/Task';

const RealTimeClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center  mb-4">
      <IoTimerOutline className="h-20 w-16 mb-1" />
      <p className="text-sm  h-12 w-24">{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export { 
    RealTimeClock
};