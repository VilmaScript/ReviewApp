import ReviewComponent from "../components/ReviewComponent"
import AboutProfile from "../components/AboutProfile"
import ProfilePic from "../components/ProfilePic"
import ReviewNumbers from "../ui/ReviewNumbers"
import Follow from "../ui/follow"

function Profile(){
 return <div className="bg-violet-50">
  <ProfilePic/>
  <AboutProfile/>
  <ReviewNumbers/>
  <ReviewComponent/>
  <Follow follow={`followers`} number={334}/>
  <Follow follow={`following`} number={224}/>
 </div>
}

export default Profile