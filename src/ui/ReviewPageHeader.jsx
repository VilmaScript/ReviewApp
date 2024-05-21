import { useContext, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { signOut } from "../services/signOut";
import { Navigate } from "react-router-dom";
import MyContext from "../context/myContext";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthProvider";

function ReviewPageHeader(){
 const [isOpen, setIsOpen] = useState(false)
 const { updateUserId} = useContext(MyContext)
 const {setUser}  = useAuth()
 const navigate = useNavigate();


 function handleClick(){
    setIsOpen(!isOpen)
    console.log(isOpen)

 }

 const handleSignOut = async () => {
    const error = await signOut();
    if (error) {
      console.error("Sign out failed:", error.message);
    } else {
      console.log("User signed out successfully");
      updateUserId(null)
      setUser(null)
      navigate('/sign-in');
    }
  };

 return <div className="px-3 py-3 flex justify-between items-center text-2xl text-violet-50 ">
  <div>
  <h1 className="text-xl text-violet-50 ">Reviews</h1>
 <p className="text-violet-300 text-sm">Browse any reviews of your choice</p>
  </div>
  <div>
  <HiMenuAlt3 onClick={handleClick} />
  <div className="relative">
    <button onClick={handleSignOut} className={`bg-white dark:text-violet-200 dark:bg-slate-900 text-amber-600 whitespace-nowrap shadow-md shadow-amber  text-sm p-1.5 absolute right-5 rounded   ${!isOpen ? `hidden` : ''}`}>Sign out</button>
  </div>
  </div>
 
 </div>
 
}

export default ReviewPageHeader