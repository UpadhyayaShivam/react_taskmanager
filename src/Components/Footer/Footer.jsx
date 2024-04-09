import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-white text-center md:text-left mb-4 md:mb-0">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
        <div className="flex items-center justify-center md:justify-end">
          <ul className="flex space-x-4 px-4 mx-8">
            <li>
              <Link to="/" className="text-white font-bold hover:text-gray-400 transition px-2 duration-300">Home</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white font-bold hover:text-gray-400 px-2 transition duration-300">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
