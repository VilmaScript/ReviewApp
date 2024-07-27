import { useContext, useEffect, useState } from "react";
import { IoIosSunny } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import MyContext from "../context/myContext";

function AboutProfile({ profileData }) {
  const {  darkMode, setDarkMode } = useContext(MyContext)

  return <div className="bg-violet-50 dark:bg-slate-800 dark:text-white text-center px-4 mb-4">
    <div className="flex items-center justify-center">
      <h2 className="text-lg mt-3 font-medium ">{profileData[0].fullname}</h2>
      {darkMode ? <IoIosSunny className=" sm:hidden text-2xl text-amber-500" onClick={() => setDarkMode(!darkMode)} />
        : <MdDarkMode className="text-2xl text-gray-800" onClick={() => setDarkMode(!darkMode)} />}
    </div>

    <p className="text-md mb-4">{profileData[0].profile_bio}</p>
    <div className="flex justify-center ">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-2xl">365</h2>
        <p className="text-gray-400">Followers </p>
      </div>
      <div className="bg-slate-200 h-9 w-0.5 mx-3"></div>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-2xl">245</h2>
        <p className="text-gray-400">Following</p>
      </div>
    </div>
  </div>
}

export default AboutProfile