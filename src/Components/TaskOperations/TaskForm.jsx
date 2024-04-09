import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TaskContext } from '../../utils/TaskContext';
import { useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';
// import img1 from '../../assets/images.jpeg';
// import { RealTimeClock } from '../RealTimeClock';

const TaskForm = () => {
  const navigate = useNavigate();
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('todo');
  const [category, setCategory] = useState('Work');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      Notiflix.Notify.failure('Please enter a title and description for the task.', {
        position: 'center-center',
        width: '65%',
      });
      return;
    }
    setIsLoading(true);
    try {
      await addTask({ id: uuidv4(), title, description, status, datestamp: new Date().toLocaleString(), category });
      setTitle('');
      setDescription('');
      setStatus('todo');
      setCategory('Work');
      navigate('/');
      Notiflix.Notify.success('Task added successfully!', {
        position: 'center-center',
        width: '65%',
      });
    } catch (error) {
      Notiflix.Notify.failure('Failed to add task.', {
        position: 'center-center',
        width: '65%',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className=" flex flex-col items-center justify-center">
      {/* <RealTimeClock /> */}
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-900 text-white ">
      

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full md:w-2/3 lg:w-1/2 m-4 p-4 rounded-lg bg-gray-800 shadow-lg">
        <h2 className='text-2xl font-bold text-center m-4 p-2 '>Create Your Task</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-style w-full"
          />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-style w-full"
          />
        </div>
        <div className="relative">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input-style w-full"
          >
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Study">Study</option>
          </select>
        </div>
        <div className="relative">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="input-style w-full"
          >
            <option value="todo">ToDo</option>
            <option value="completed">Completed</option>
            <option value="yet-to-start">Yet-To-Start</option>
            <option value="hold-on">Hold-On</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 py-3 text-lg font-semibold"
          disabled={isLoading}
          >
          {isLoading ? 'Adding Task...' : 'Add Task'}
        </button>
      </form>

      <div className="hidden lg:flex ml-20" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-64 h-64">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
        </svg>

      </div>
    </div>
    </div>
    </>
  );
};

export default TaskForm;
