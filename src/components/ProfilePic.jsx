function ProfilePic({profileData}){
 return <div className="h-44 bg-cover flex items-center justify-center object-contain bg-center" style={{backgroundImage: `url(${profileData[0].profilebanner})` }} >
  <img src={profileData[0].profilepic} alt="profile-picture" className="rounded-full size-20 border-2 border-white bg-cover object-cover bg-center" />
 </div>
}


export default ProfilePic