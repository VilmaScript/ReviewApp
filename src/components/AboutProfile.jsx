
function AboutProfile({profileData}){
  
 return <div className="bg-violet-50 text-center px-4 mb-4">
  <h2 className="text-lg mt-3 font-medium">{profileData[0].fullname}</h2>
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