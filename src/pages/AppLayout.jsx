import { Link, Outlet } from 'react-router-dom';
import { VscPreview } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { FaBell, FaUser  } from "react-icons/fa";

function AppLayout(){
 return (
  <>
    <nav className='fixed left-0 right-0 bottom-0 rounded-t-lg'>
      <ul className='flex justify-around rounded-t-lg items-center bg-violet-50 dark:bg-slate-800 py-3 '>
        <li>
          <Link to="/"><VscPreview className='size-5 text-violet-400'/></Link>
        </li>
        <li>
          <Link to="/search"><IoSearch className='size-5 text-violet-400'/></Link>
        </li>
        <li>
          <Link to="/add-reviews"><MdEdit className='size-5 text-violet-400'/></Link>
        </li>
        <li>
          <Link to="/notification"><FaBell className='size-5 text-violet-400'/></Link>
        </li>
        <li>
          <Link to="/profile"><FaUser className='size-5 text-violet-400'/></Link>
        </li>
      </ul>
    </nav>
 
    <Outlet />
  </>
)
}


export default AppLayout