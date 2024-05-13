import { useContext } from "react"
import NotificationAlert from "../components/NotificationAlert"
import MyContext from "../context/myContext"
import { fetchNotifications} from "../services/dataService"
import { useQuery } from "@tanstack/react-query"
import LoadingSpinner from "../ui/spinner"



function Notification(){
    const { profileData} = useContext(MyContext)

    if ( !profileData) {
        return <LoadingSpinner />;
      }

const userId = profileData[0].userId
const name = profileData[0].fullname
const profilepic = profileData[0].profilepic
    const { data: notificationData, error } = useQuery({
        queryKey: ["fetchNotification", userId],
        queryFn: () => fetchNotifications({ userId, name, profilepic}),
        onSuccess: () => {
        },
      });
    
      console.log(profileData, userId, notificationData)
     
 return <div className="">
  <h2 className="p-3 text-xl text-violet-50 bg-violet-900">Notifications </h2>
  <NotificationAlert notificationData={notificationData} profileData={profileData}/>
 </div>
}

export default Notification