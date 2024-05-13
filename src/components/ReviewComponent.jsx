import { useContext } from "react"
import Category from "../ui/Category"
import Comment from "../ui/Comment"
import Images from "../ui/Images"
import Rate from "../ui/Rate"
import Reaction from "../ui/Reactions"
import ReviewHeader from "../ui/ReviewHeader"
import MyContext from "../context/myContext"
import LoadingSpinner from "../ui/spinner"

function ReviewComponent(){
 const { reviewData,profileData, isLoading} = useContext(MyContext)

 if (isLoading || !reviewData) {
    return <LoadingSpinner />;
  }

 return <>
 {reviewData?.map((review) => (
 <div key={review.id} className="bg-white mx-3.5 mb-2 rounded-lg px-3 py-3 ">
 {review && (<> <ReviewHeader review={review}/>
<div className="unclickable flex justify-center">
<Rate review={review} />
</div>
<Comment review={review}/>
<Images  review={review} />
<Category review={review}/>
<Reaction profileData={profileData} review={review}/>
</>
)}

</div>
))}
</>
}

export default ReviewComponent