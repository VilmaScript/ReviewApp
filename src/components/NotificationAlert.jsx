function NotificationAlert({notificationData}){

    console.log(notificationData)
 return <div className="">
  <div className="bg-violet-50 h-screen p-4 rounded-t-lg">
   <span className="text-slate-400 text-sm font-medium">TODAY</span>
   {notificationData?.map((data, index)=> (
   <div className="flex items-center mb-3" key={index}>
    <img src={data.profilepic} className="rounded-full size-10 bg-cover object-cover bg-center" />
    <div className="ms-3">
     <p className="text-sm">{data.name} {data.type} your review</p>
     <small>Just now</small>
    </div>
    </div> ))}
  
  </div>
 </div>
}

export default NotificationAlert