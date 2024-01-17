import Category from "../ui/Category"
import Comment from "../ui/Comment"
import Images from "../ui/Images"
import Rate from "../ui/Rate"
import Reaction from "../ui/Reactions"
import ReviewHeader from "../ui/ReviewHeader"



function ReviewComponent({reviewData}){
 return <>
 {reviewData.map((review) => (
 <div key={review.id} className="bg-white mx-3.5 mb-2 rounded-lg px-3 py-3 ">
 <ReviewHeader review={review}/>
<Rate/>
<Comment review={review}/>
<Images />
<Category review={review}/>
<Reaction/>
</div>
))}
</>
}

export default ReviewComponent