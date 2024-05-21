import { useContext } from "react"
import NotificationAlert from "../components/NotificationAlert"
import MyContext from "../context/myContext"
import { fetchNotifications } from "../services/dataService"
import { useQuery } from "@tanstack/react-query"
import LoadingSpinner from "../ui/spinner"



function Notification() {
  const { profileData } = useContext(MyContext)

 // Always declare hooks at the top level of the component
 const userId = profileData ? profileData[0].userId : null;
 const name = profileData ? profileData[0].fullname : null;
 const profilepic = profileData ? profileData[0].profilepic : null;

  const { data: notificationData, error } = useQuery({
    queryKey: ["fetchNotification", userId],
    queryFn: () => fetchNotifications({ userId }),
    onSuccess: () => {
    },
  });


  if (!profileData) {
    return <LoadingSpinner />;
  }

  
  return <div className="dark:text-white ">
    <h2 className="p-3 text-xl text-violet-50 bg-violet-900">Notifications </h2>
    <NotificationAlert notificationData={notificationData} profileData={profileData} />
  </div>
}

export default Notification