import  { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../utils/TaskContext';
import { useParams } from 'react-router-dom';
import { ClockIcon, CheckCircleIcon, DocumentTextIcon, TagIcon } from '@heroicons/react/outline';

const TaskDetails = () => {
  const { id } = useParams();
  const { tasks } = useContext(TaskContext);
  const [task, setTask] = useState(null);

  useEffect(() => {
    const foundTask = tasks.find(task => task.id === id);
    setTask(foundTask);
  }, [id, tasks]);

  if (!task) {
    return <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">Loading task details...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
    <div className="w-full max-w-lg p-8 bg-gray-800 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <CheckCircleIcon className="h-6 w-6 mr-2 text-green-500" />
        <div>
          <p className="text-sm text-gray-400 mb-1">Title</p>
          <h1 className="text-xl font-bold mb-2">{task.title}</h1>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <DocumentTextIcon className="h-5 w-5 mr-2 text-gray-400" />
        <div>
          <p className="text-sm text-gray-400 mb-1">Description</p>
          <p className="text-sm">{task.description}</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <TagIcon className="h-5 w-5 mr-2 text-blue-400" />
        <div>
          <p className="text-sm text-gray-400 mb-1">Status</p>
          <p className="text-sm">{task.status}</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <ClockIcon className="h-5 w-5 mr-2 text-gray-400" />
        <div>
          <p className="text-sm text-gray-400 mb-1">Date</p>
          <p className="text-sm">{task.datestamp}</p>
        </div>
      </div>
      <div className="flex items-center">
        <TagIcon className="h-5 w-5 mr-2 text-blue-400" />
        <div>
          <p className="text-sm text-gray-400 mb-1">Category</p>
          <p className="text-sm">{task.category}</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default TaskDetails;
