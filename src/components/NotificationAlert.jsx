function NotificationAlert(){
 return <div className="">
  <div className="bg-violet-50 h-screen p-4 rounded-t-lg">
   <span className="text-slate-400 text-sm font-medium">TODAY</span>
   <div className="flex items-center">
    <img src="/img5.jpg" className="rounded-full size-10 bg-cover object-cover bg-center" />
    <div className="ms-3">
     <p className="text-sm">Lorretta Flemming liked your review</p>
     <small>Just now</small>
    </div>
   </div>
  </div>
 </div>
}

export default NotificationAlert