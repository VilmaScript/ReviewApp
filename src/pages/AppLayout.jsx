import { Link, Outlet } from 'react-router-dom';
import { VscPreview } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import { MdDarkMode, MdEdit } from "react-icons/md";
import { FaBell, FaUser  } from "react-icons/fa";
import Notification from './Notification';
import { useContext } from 'react';
import MyContext from '../context/myContext';
import { IoIosSunny } from 'react-icons/io';


function AppLayout(){
  const {  darkMode, setDarkMode} = useContext(MyContext)
 return (
  <div className='lg:flex h-screen '>

    <nav className='fixed w-full right-0 left-0 sm:left-0 sm:top-0 bottom-0 lg:w-[20%] sm:w-[30%] sm:border-r-2 dark:sm:border-slate-700 sm:border-violet-50 px-3 sm:h-screen '>
      <ul className='flex justify-around sm:flex-col py-2 lg-h-screen rounded-t-lg sm:bg-white bg-violet-50 dark:bg-slate-800 sm:ms-7 sm:mt-28'>
        <li className='dark:sm:hover:bg-slate-700 px-2 rounded sm:hover:bg-violet-50'>
          <Link className='sm:flex py-3 items-center' to="/"><VscPreview className='size-5 dark:hover:text-amber-500  hover:text-violet-900 text-violet-400'/><p className='text-slate-400 hidden sm:block ms-2 text-sm font-medium'>Explore review</p></Link>
        </li>
        <li className='dark:sm:hover:bg-slate-700 sm:hover:bg-violet-50 px-2 rounded'>
          <Link className='sm:flex py-3 items-center'  to="/search"><IoSearch className='size-5 text-violet-400 dark:hover:text-amber-500  hover:text-violet-900 '/><p className='text-slate-400 hidden sm:block ms-2 text-sm font-medium'>Search review</p></Link>
        </li>
        <li className='dark:sm:hover:bg-slate-700 sm:hover:bg-violet-50 px-2 rounded'>
          <Link className='sm:flex py-3 items-center'  to="/add-reviews"><MdEdit className='size-5 text-violet-400 hover:text-violet-900 dark:hover:text-amber-500  '/><p className='text-slate-400 hidden sm:block  ms-2 text-sm font-medium'>Post review</p></Link>
        </li>
        <li className='lg:hidden dark:sm:hover:bg-slate-700 sm:hover:bg-violet-50 px-2 rounded'>
          <Link className='sm:flex py-3 items-center'  to="/notification"><FaBell className='size-5 text-violet-400 hover:text-violet-900 dark:hover:text-amber-500  '/><p className='text-slate-400 hidden sm:block ms-2 text-sm font-medium'>Notifications</p></Link>
        </li>
        <li className='dark:sm:hover:bg-slate-700 sm:hover:bg-violet-50 px-2 rounded'>
          <Link className='sm:flex py-3 items-center' to="/profile"><FaUser className='size-5 text-violet-400 hover:text-violet-900 dark:hover:text-amber-500  '/><p className='text-slate-400 hidden sm:block  ms-2 text-sm font-medium'>My profile</p></Link>
        </li>
        <li className='dark:sm:hover:bg-slate-700 sm:hover:bg-violet-50 px-2 rounded hidden sm:block'>
          <Link className='sm:flex py-3 items-center'onClick={() => setDarkMode(!darkMode)} > {darkMode ? <IoIosSunny className=" size-5 text-amber-500" />
        : <MdDarkMode className=" text-gray-800" />}<p className='text-slate-400 hidden sm:block  ms-2 text-sm font-medium'>{darkMode? `Light mode` : `Dark mode`}</p></Link>
        </li>
        
      </ul>
    </nav>
 
   <div className='flex-1 lg:ml-[20%]  lg:mr-[30%] sm:ml-[30%] lg:w-[50%] sm:w-[70%]'>
   <Outlet />
    </div>

     <div className='hidden fixed lg:right-0 lg:top-0 h-screen lg:block lg:w-[30%] border-l-2 sm:border-violet-50 dark:sm:border-slate-700 '> {/* Notifications on large screens */}
        <Notification />
      </div> 
  </div>
)
}


export default AppLayout