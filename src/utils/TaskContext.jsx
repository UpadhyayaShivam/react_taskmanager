import  { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState(() => {
    const localData = localStorage.getItem('tasks');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const taskWithDatestamp = { ...task, datestamp: new Date().toLocaleString() };
    setTasks([...tasks, taskWithDatestamp]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, updateTask }}>
      {props.children}
    </TaskContext.Provider>
  );
};

TaskContextProvider.propTypes = {
  children: PropTypes.node,
};

export default TaskContextProvider;


