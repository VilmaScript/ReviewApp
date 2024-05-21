import { useContext, useState } from "react"
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
import Media from "../components/Media"

function Profile() {
  const { userId, profileData} = useContext(MyContext);
  const [visibleItemsCount, setVisibleItemsCount] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleVisibility = () => {
    if (isExpanded) {
      setVisibleItemsCount(1);
    } else {
      setVisibleItemsCount(matchinRevData.length);
    }
    setIsExpanded(!isExpanded);
  };


  // Fetch Matching review
  const { data: matchinRevData, error } = useQuery({
    queryKey: ["fetchMatchingReviews", userId],
    queryFn: () => fetchMatchingReviews({ userId }),
    onSuccess: () => {
    },
  });

  if ( !userId || !profileData || !matchinRevData) {
    return <LoadingSpinner />;
  }
  return <div className="bg-violet-50 dark:bg-slate-800 dark:text-white ">
    <ProfilePic userId={userId} profileData={profileData} />
    <AboutProfile userId={userId} profileData={profileData} />
    <ReviewNumbers matchinRevData={matchinRevData}  toggleVisibility={toggleVisibility} isExpanded={isExpanded}/>
    {matchinRevData?.slice(0, visibleItemsCount).map((review) => (
      <div key={review.id} className="bg-white dark:bg-slate-900 mx-3.5 mb-4 rounded-lg px-3 py-3 shadow-md shadow-amber">
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
    <Media matchinRevData={matchinRevData}/>
  </div>
}

export default Profile