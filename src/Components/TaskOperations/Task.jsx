import  { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { TaskContext } from '../../utils/TaskContext';
import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { ClockIcon, TrashIcon, CheckIcon, PencilAltIcon } from '@heroicons/react/outline'; 
import Notiflix from 'notiflix';

const Task = ({ task }) => {
  const { deleteTask, updateTask } = useContext(TaskContext);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const navigate = useNavigate();

  if (!task || !task.title) {
    return <div>Error: Task data is missing or incomplete.</div>;
  }

  const handleEdit = () => {
    navigate(`/edit/${task.id}`);
    Notiflix.Notify.success('Task going to be edit');
  };

  const handleTaskClick = () => {
    navigate(`/task/${task.id}`);
  };

  const truncateDescription = (description, limit) => {
    if (description.length <= limit) {
      return description;
    }
    return `${description.slice(0, limit)}...`;
  };

  const handleDelete = () => {
    deleteTask(task.id);
    Notiflix.Notify.success('Task deleted successfully.');
  };

  const handleMarkCompleted = () => {
    updateTask(task.id, { ...task, status: 'completed' });
    Notiflix.Notify.success('Task marked as completed.');
  };

  return (
    <div className="bg-gray-800 p-4 rounded-md shadow-lg text-white">
      <div className="flex justify-between items-start mb-4 px-2">
        <div className='w-2/3'>
          <h3 className="text-3xl font-bold mb-2 pb-2 italic">{task.title}</h3>
        </div>
        <div className="text-right w-1/3">
          <h1 className="text-sm mb-2">{task.id}</h1>
        </div>
      </div>
      <div className="mb-4">
        <p
          className="line-clamp-3 mb-4 border-double border-b rounded p-2 text-xl hover:line-clamp-none cursor-pointer"
          onClick={handleTaskClick}
        >
          {showFullDescription ? task.description : truncateDescription(task.description, 50)}
        </p>
        <p className='text-sm font-bold italic'>Status: {task.status}</p>
        <p className='text-sm font-bold italic'>Category: {task.category}</p>
      </div>
      <div className="flex items-center text-gray-400 text-right">
        <ClockIcon className="h-4 w-4 mr-1" />
        <h5 className="text-xs">{task.datestamp}</h5>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none transition duration-300 ease-in-out"
          onClick={handleMarkCompleted}
        >
          <CheckIcon className="h-5 w-5 inline-block" /> 
        </button>
        <button
          type="button"
          className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none transition duration-300 ease-in-out"
          onClick={handleEdit}
        >
          <PencilAltIcon className="h-5 w-5 inline-block" /> 
        </button>
        <button
          type="button"
          className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none transition duration-300 ease-in-out"
          onClick={handleDelete}
        >
          <TrashIcon className="h-5 w-5 inline-block" /> 
        </button>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.oneOf([
      'todo',
      'completed',
      'yet-to-start',
      'hold-on',
      'pending',
    ]).isRequired,
    datestamp: PropTypes.string.isRequired,
    category: PropTypes.string,
  }).isRequired,
};

export default Task;
