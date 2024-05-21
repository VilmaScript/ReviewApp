import NotifyTime from "./NotifyTime"


function NotificationAlert({notificationData}){

   return <div className="">
  <div className=" p-4 rounded-t-lg">
   <span className="text-slate-400 text-sm font-medium">Who's checking my reviews out?</span>
   {notificationData?.map((data, index)=> (
   <div className="flex items-center my-3" key={index}>
    <img src={data.profilepic} className="rounded-full size-10 bg-cover object-cover bg-center" />
    <div className="ms-3">
     <p className="text-sm">{data.name} {data.type} your review</p>
     <NotifyTime notificationData={data}/>
    </div>
    </div> ))}
  
  </div>
 </div>
}

export default NotificationAlert