function ProfilePic({profileData}){

 return <div className="h-44 relative bg-cover flex items-center  justify-center object-contain bg-center " style={{backgroundImage: `url(${profileData[0].profilebanner})` }} >
   <div className="absolute inset-0 bg-black opacity-50"></div>
  <img src={profileData[0].profilepic} alt="profile-picture" className="rounded-full z-10 size-20 border-2 border-amber-500  bg-cover object-cover bg-center" /> 
 </div>
}


export default ProfilePic