import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-500 px-5 text-white'>
      <div className="logo">
        <span className="font-extrabold">Dhiman Todo App</span>
      </div>
      <div className="navbaritems">
        <ul className='flex flex-row gap-6'>
          <Link to="/"><li className='cursor-pointer hover:scale-[1.2] hover:text-red-300 transition-all duration-500'>Home</li></Link>
          <Link to="/about"><li className='cursor-pointer hover:scale-[1.2] hover:text-red-300 transition-all duration-500'>About us</li></Link>
          <Link to="/contact"><li className='cursor-pointer hover:scale-[1.2] hover:text-red-300 transition-all duration-500'>Contact us</li></Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
