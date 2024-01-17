import { IoSearchCircle } from "react-icons/io5";


function Search(){
 return <div className="text-center  bg-white h-screen ">
  <img src="/img8.png" className="rounded-full w-44 h-44 m-auto" alt="search here" />
  <h2 className="text-xl text-gray-700 mb-3">Search for reviews & ratings</h2>
  <div className="relative">
  <input type="text" className="w-4/5 bg-violet-50 rounded-full" />
  <IoSearchCircle className="absolute end-11 top-0.5 text-xl text-gray-700"  />
  </div>

 </div>
}

export default Search