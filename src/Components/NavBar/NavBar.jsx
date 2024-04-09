import { Link } from 'react-router-dom';
import { HomeIcon, PlusIcon } from '@heroicons/react/outline';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
           
            <Link to="/" className="text-xl font-semibold">Task Manager</Link>
          </div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="flex items-center text-lg font-medium">
                <HomeIcon className="h-5 w-5 mr-1" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/createtask" className="flex items-center text-lg font-medium">
                <PlusIcon className="h-5 w-5 mr-1" />
                Create Task
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
