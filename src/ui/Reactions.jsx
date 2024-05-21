import { useState } from "react";
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { FaCommentDots, FaLess } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { uploadComment } from "../services/uploadComment";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchComments } from "../services/dataService";
import { postNotifications } from "../services/notificationService";
import { updateDislike, updateLike } from "../services/updateService";
import { useContext } from "react";
import MyContext from "../context/myContext";


const unClickedBtn = 'text-violet-300 size-6'

function Reaction({ review, profileData }) {
  const { updateReviewData, reviewData } = useContext(MyContext)

  const [like, isLike] = useState(false)
  const [hate, isHate] = useState(false)
  const [comment, setComment] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [commentArray, setCommentArray] = useState([])
  const [commentPhoto, setCommentPhoto] = useState([])


  const reviewId = review?.id
  // Fetch Comments 
  const { data: commentData, error } = useQuery({
    queryKey: ["fetchComments", reviewId],
    queryFn: () => fetchComments({ reviewId }),
    onSuccess: () => {
    },
  });

  //Mutation for uploading reviews
  const { mutate: uploadCommentMutation } = useMutation({
    mutationFn: uploadComment,
    onSuccess: (data) => {
    }
  })

  const { mutate: uploadNotification } = useMutation({
    mutationFn: postNotifications,
    onSuccess: () => {
      // queryClient.invalidateQueries('fetchReviews')
    }
  })

  function handleLike() {
    isLike(true)
    isHate(false)

     
    const recieversId = review.usersId
    const sendersId = profileData[0].userId
    const name = profileData[0].fullname
    const profilepic = profileData[0].profilepic
    const currentLike = review?.likes + 1
    
    const type = 'liked'

    //Upload like to supabase
    updateLike({ currentLike, reviewId })

    //    // Update UI to reflect the change
    const updatedReviews = (review.id == reviewId) ? { ...review, likes: currentLike } : review;
   
    const reviewIndex = reviewData.findIndex(review => review.id == reviewId);
 
    if (reviewIndex !== -1) {
      // Create a copy of the review object to update the like count
      const updatedReview = { ...reviewData[reviewIndex] };
      updatedReview.likes += 1; // Increment the like count
      // Update the reviewData array with the modified review object
      const updatedReviewData = [...reviewData];
      updatedReviewData[reviewIndex] = updatedReview;
      // Update the state with the modified reviewData array
      updateReviewData(updatedReviewData);
    }
    // updateReviewData(updatedReviews);
    uploadNotification({ recieversId, sendersId, name, profilepic, type, reviewId })
  }

  function handleHate() {
    isHate(true)
    isLike(false)
    console.log(hate)

    const recieversId = review.usersId
    const currentDislike = review?.likes + 1
    const sendersId = profileData[0].userId
    const name = profileData[0].fullname
    const profilepic = profileData[0].profilepic

    console.log(sendersId, recieversId)
    const type = 'disliked'
    //Upload like to supabase
    updateDislike({ currentDislike, reviewId })

    //    // Update UI to reflect the change
    const updatedReviews = (review.id == reviewId) ? { ...review, dislikes: currentDislike } : review;
    console.log(updatedReviews)
    const reviewIndex = reviewData.findIndex(review => review.id == reviewId);
    console.log(reviewIndex)
    if (reviewIndex !== -1) {
      // Create a copy of the review object to update the like count
      const updatedReview = { ...reviewData[reviewIndex] };
      updatedReview.dislikes += 1; // Increment the like count
      // Update the reviewData array with the modified review object
      const updatedReviewData = [...reviewData];
      updatedReviewData[reviewIndex] = updatedReview;
      // Update the state with the modified reviewData array
      updateReviewData(updatedReviewData);
    }
    // updateReviewData(updatedReviews);
    console.log(type, like, hate)
    uploadNotification({ recieversId, sendersId, name, profilepic, type })
  }


  // const handleReaction = (type) => {
  //   const isLikeAction = type === 'liked';
  //   isLike(isLikeAction);
  //   isHate(!isLikeAction);

  //   const recieversId = review.usersId;
  //   const sendersId = profileData[0].userId;
  //   const name = profileData[0].fullname;
  //   const profilepic = profileData[0].profilepic;
  //   const currentCount = isLikeAction ? review.likes + 1 : review.dislikes + 1;

  //   const updateFunction = isLikeAction ? updateLike : updateDislike;

  //   updateFunction({ currentCount, reviewId })
  //     .then(() => {
  //       const updatedReviews = reviewData?.map(r => 
  //         r.id === reviewId ? { ...r, [isLikeAction ? 'likes' : 'dislikes']: currentCount } : r
  //       );
  //       const reviewIndex = reviewData.findIndex(review => review.id == reviewId);
  //       const updatedReviewData = [...reviewData];
  //       updatedReviewData[reviewIndex] = updatedReviews
  //       updateReviewData(updatedReviewData);
  //       uploadNotification({ recieversId, sendersId, name, profilepic, type });
  //     })
  //     .catch(err => console.error('Failed to update reaction:', err));
  // };




  function handleComment() {
    setComment(!comment)
    setCommentArray(commentData.map(c => c.comment_text));
    setCommentPhoto(commentData.map(c => c.profilepic));
  }

  function handleInput(e) {
    setInputValue(e.target.value)
  }

  function handleInputComment() {
    if (inputValue.trim() !== '') {
      const commentPic = profileData[0].profilepic
      uploadCommentMutation({ inputValue, reviewId, commentPic });
      setCommentArray([...commentArray, inputValue])
      setCommentPhoto([...commentPhoto, commentPic])
      setInputValue('')
    }
  }

  return <div>
    <div>
      {comment && (
        <>
          <p className="mt-4 mb-2 text-sm font-medium">Comments Section</p>
          <div className="h-20 overflow-auto px-4">
            {commentArray?.map((comment, index) => (
              <div key={index} className="comment-box text-sm dark:bg-slate-800 dark:text-white bg-gray-50 my-8 mx-4 px-3 pb-2 relative" >
                <p className="text-xs font-medium">{comment}</p>
                <img className="size-7 object-cover rounded-full border-2 border-amber-500 bg-center absolute bottom-8 -left-6" src={commentPhoto[index]} alt="Profile" />

              </div>
            ))}
          </div>
          <div className="relative">
            <input type="text" className="w-full border-gray-100 dark:bg-slate-800 dark:text-white outline-none border-2 rounded outline-none p-1 " onChange={(e) => handleInput(e)} value={inputValue} />
            <IoIosSend className="absolute top-1.5 right-5 text-amber-500 size-6" onClick={handleInputComment} />
          </div>
        </>)}
    </div>
    <div className="flex justify-around pt-2">
      <div >
        <AiFillLike className={like ? `text-red-600 size-6 pop-button` : `${unClickedBtn}`} onClick={() => handleLike()} />
        <p className="text-neutral-500 text-xs font-medium">{review.likes}</p>
      </div>
      <div>
        <AiFillDislike className={hate ? `text-neutral-500 size-6 pop-button` : `${unClickedBtn}`} onClick={() => handleHate()} />
        <p className="text-neutral-500 text-xs font-medium">{review.dislikes}</p>
      </div>
      <div>
        <FaCommentDots className="text-violet-300 size-6" onClick={handleComment} />
        <p className="text-neutral-500 text-xs font-medium">{commentData?.length}</p>
      </div>
      <div>
        <FaShare className="text-violet-300 size-6" />
        <p className="text-neutral-500 text-xs font-medium">10</p>
      </div>
    </div>
  </div>

}
export default Reaction