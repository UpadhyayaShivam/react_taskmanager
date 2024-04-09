import  { useContext, useState } from 'react';
import { TaskContext } from '../../utils/TaskContext';
import Task from './Task';
import PropTypes from 'prop-types';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900 text-white">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-gray-700 rounded-md px-4 py-2 mb-4 w-full bg-gray-800 text-gray-300 focus:outline-none focus:border-blue-500"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))
        ) : (
          <p className="text-gray-500 text-center">No tasks found.</p>
        )}
      </div>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
};

export default TaskList;