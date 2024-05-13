import { useContext } from "react"
import MyContext from "../context/myContext"
import AboutProfile from "../components/AboutProfile"
import ProfilePic from "../components/ProfilePic"
import ReviewNumbers from "../ui/ReviewNumbers"
import Follow from "../ui/follow"
import LoadingSpinner from "../ui/spinner"
import { fetchMatchingReviews } from "../services/dataService"
import { useQuery } from "@tanstack/react-query"
import ReviewHeader from "../ui/ReviewHeader"
import Rate from "../ui/Rate"
import Comment from "../ui/Comment"
import Images from "../ui/Images"
import Category from "../ui/Category"
import Reaction from "../ui/Reactions"

function Profile() {
  const { userId, profileData, userLoading } = useContext(MyContext);

  // Fetch Matching review
  const { data: matchinRevData, error } = useQuery({
    queryKey: ["fetchMatchingReviews", userId],
    queryFn: () => fetchMatchingReviews({ userId }),
    onSuccess: () => {
    },
  });

  if (userLoading || !userId || !profileData || !matchinRevData) {
    return <LoadingSpinner />;
  }
  return <div className="bg-violet-50">
    <ProfilePic userId={userId} profileData={profileData} />
    <AboutProfile userId={userId} profileData={profileData} />
    <ReviewNumbers matchinRevData={matchinRevData} />
    {matchinRevData?.map((review) => (
      <div key={review.id} className="bg-white mx-3.5 mb-2 rounded-lg px-3 py-3 ">
        {review && (<> <ReviewHeader review={review} />
          <div className="unclickable flex justify-center">
            <Rate review={review} />
          </div>
          <Comment review={review} />
          <Images review={review} />
          <Category review={review} />
          <Reaction review={review} profileData={profileData} />
        </>
        )}

      </div>
    ))}
    <Follow follow={`followers`} number={334} />
    <Follow follow={`following`} number={224} />
  </div>
}

export default Profile