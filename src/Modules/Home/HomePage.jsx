import { useContext } from 'react';
import TaskList from '../../Components/TaskOperations/TaskList';
import { TaskContext } from '../../utils/TaskContext';
import { RealTimeClock } from '../../Components/RealTimeClock';
import Footer from '../../Components/Footer/Footer';

const HomePage = () => {
  const { tasks, deleteTask, updateTask } = useContext(TaskContext);

  return (
  
    <>
        
          <div className='m-8 '> 
            <h1 className="text-3xl font-bold text-center mt-8 mb-4">
                  YOUR TASKS
                  <div className="mt-8 pt-4 lg:mt-0">
                  <RealTimeClock />
                  </div>
            </h1>
            <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
          </div>
          <Footer/>
      
    </>
  );
};

export default HomePage;

