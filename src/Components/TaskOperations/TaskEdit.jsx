
import  { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TaskContext } from '../../utils/TaskContext';
// import Footer from '../Footer/Footer';
import Notiflix from 'notiflix';
// import { ClockIcon, CheckCircleIcon, DocumentTextIcon, TagIcon } from '@heroicons/react/outline';


const TaskEdit = () => {
    const { tasks, updateTask } = useContext(TaskContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const [editTask, setEditTask] = useState(() => tasks.find(task => task.id === id) || { id: '', title: '', description: '', status: 'todo' });
    const { title, description, status } = editTask;

    const handleInput = (e) => {
        const { name, value } = e.target;
        setEditTask(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTask(id, editTask);
        navigate('/');
        Notiflix.Notify.success('Task edited successfully.');
    };

    return (
        <>
        <div className="container mx-auto px-20 pt-12 mt-8">
            <div className="flex justify-center items-center p-4">
                <h1 className="text-2xl basis-1/2 font-semibold text-white mb-4 ">Edit Your Task</h1>
                <p className='text-lg basis-1/2 text-right text-white italic'>{id}</p>
            </div>
            <div className="bg-gray-800 text-white  p-4 rounded-md shadow-md">
                <form onSubmit={handleSubmit} className=''>
                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-2">Title</label>
                        <input type="text" name="title" value={title} onChange={handleInput} className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-700 text-white" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-medium">Description</label>
                        <input type='text' name='description' value={description} onChange={handleInput} className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-700 text-white"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-medium">Status</label>
                        <select name="status" value={status} onChange={handleInput} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-gray-700 text-white">
                            <option value="todo">ToDo</option>
                            <option value="completed">Completed</option>
                            <option value="yet-to-start">Yet-To-Start</option>
                            <option value="hold-on">Hold-On</option>
                            <option value="pending">Pending</option>
                        </select>
                    </div>
                    <div className="text-right">
                        <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
        </>

    );
};

export default TaskEdit;

