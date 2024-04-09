import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Modules/Home/HomePage';
// import TaskContextProvider from './utils/TaskContext';
import TaskForm from './Components/TaskOperations/TaskForm';
// import TaskList from './Components/TaskOperations/TaskList';
import NavBar from './Components/NavBar/NavBar';
import TaskEdit from './Components/TaskOperations/TaskEdit';
// import Task from './Components/TaskOperations/Task';
import TaskDetails from './Components/TaskOperations/TaskDetails';
// import Footer from './Components/Footer/Footer';
import ContactPage from './Modules/Contact';

function App() {
  return (
    <>
      <div className="bg-gray-950 text-[#1fc1c3] min-h-screen">
        <Router>
            <NavBar/>
            <Routes>
              <Route path="/" exact element={<HomePage /> } />
              <Route path="/createtask" element={<TaskForm /> } />
              <Route path="/edit/:id" element={<TaskEdit />} />
              <Route path='/task/:id' element={<TaskDetails/>} />
              <Route path='/contact' element={<ContactPage/>} />

            </Routes>
            {/* <TaskList /> */}
            {/* <Footer /> */}
          </Router>

      </div>
    </>
  );
}

export default App;