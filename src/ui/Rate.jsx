import { FaStar } from "react-icons/fa6";

function Rate({handleRating, rating , review }){
 return <div className="flex mb-3">
  {Array.from({length:5}, (_, i) => (
 <FaStar key={i} onClick={() => handleRating(i)} className={
  (review && review.rate >= i + 1) || (!review && rating >= i + 1)
    ? "text-amber-500 size-6  fill-amber-animation"
    : "text-gray-200 size-6"
}/>
  )
   
  )}
 </div>
}

export default Rate