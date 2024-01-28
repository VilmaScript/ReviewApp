import { HiDotsHorizontal } from "react-icons/hi";

function ReviewHeader({review}){
 return <> <div className="flex justify-between px-3 py-3 items-center">
  <div className="flex">
  <img src="/img1.jpg" alt="profile-picture" className="rounded-full size-10 bg-cover object-cover bg-center"/>
   <div className="ml-1.5"><p className="text-sm">{review?.name}</p>
   <small >30 minutes ago</small></div>
  </div>
  <HiDotsHorizontal/>
 </div>
 <h3 className=" text-center text-2xl mb-3 font-bold">{review?.locationName}</h3>
 </>
}

export default ReviewHeader