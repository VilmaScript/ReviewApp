import { HiDotsHorizontal } from "react-icons/hi";
import { formatDistanceToNow } from 'date-fns';

function ReviewHeader({review}){
    const time = review.created_at
    const timeAgo = formatDistanceToNow(new Date(time), { addSuffix: true });
 return <> <div className="flex justify-between px-3 py-3 items-center">
  <div className="flex">
  <img src={review?.profilepic} alt="profile-picture" className="border-2 border-amber-500 rounded-full size-10 bg-cover object-cover bg-center"/>
   <div className="ml-1.5"><p className="text-sm font-medium">{review?.name}</p>
   <small >{timeAgo}</small></div>
  </div>
  <HiDotsHorizontal/>
 </div>
 <h3 className=" text-center text-2xl mb-3 font-bold">{review?.locationName}</h3>
 </>
}

export default ReviewHeader