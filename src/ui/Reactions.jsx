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


const unClickedBtn = 'text-violet-300 size-6'

function Reaction({review,profileData}) {
  const [like, isLike] = useState(false)
  const [hate, isHate] = useState(false)
  const [comment, setComment] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [commentArray, setCommentArray] = useState([])
  const [commentPhoto, setCommentPhoto] = useState([])


  const reviewId = review?.id
  console.log(like)
  // Fetch Comments 
  const { data : commentData, error } = useQuery({
    queryKey: ["fetchComments", reviewId],
    queryFn:() => fetchComments({reviewId}),
    onSuccess: () => {
    },
  });
console.log(commentData)
  //Mutation for uploading reviews
 const { mutate : uploadCommentMutation} = useMutation({
  mutationFn: uploadComment,
  onSuccess : (data) => {
    console.log(data)
  }
})

const { mutate : uploadNotification} = useMutation({
  mutationFn: postNotifications,
  onSuccess : () => {
    // queryClient.invalidateQueries('fetchReviews')
  }
})
  function handleLike() {
    isLike(true)
    isHate(false)

    console.log(like)
    console.log(review.usersId)
    
      const recieversId = review.usersId
    const sendersId = profileData[0].userId
    const name = profileData[0].fullname
   const profilepic = profileData[0].profilepic

    console.log(sendersId, recieversId)
    const type =  'liked'
    console.log(type)
    uploadNotification({recieversId, sendersId,name, profilepic,type })
    }
  
  function handleHate() {
    isHate(true)
    isLike(false)
    console.log(hate)
   
      const recieversId = review.usersId
    const sendersId = profileData[0].userId
    const name = profileData[0].fullname
   const profilepic = profileData[0].profilepic

    console.log(sendersId, recieversId)
    const type = 'disliked'
    console.log(type,like, hate)
    uploadNotification({recieversId, sendersId,name, profilepic,type })
     }

  function handleComment() {
    setComment(!comment)
  setCommentArray(commentData.map(c => c.comment_text));
  setCommentPhoto(commentData.map(c => c.profilepic));
  }

  function handleInput(e) {
    setInputValue(e.target.value)
  }

  function handleInputComment() {
  if(inputValue.trim() !== '' ){
    const commentPic = profileData[0].profilepic 
    uploadCommentMutation({ inputValue, reviewId, commentPic });
    setCommentArray([...commentArray, inputValue])
    setCommentPhoto([...commentPhoto, commentPic])
    setInputValue('')
  }
  }
  console.log(commentPhoto)
  
  return <div>
    <div>
      {comment && (
        <>
          <p className="mt-4 mb-2 text-sm font-medium">Comments Section</p>
           {commentArray?.map((comment, index) => (
           <div key={index} className="comment-box text-sm bg-gray-50 my-8 mx-4 p-4 relative" >
            <p>{comment}</p>
              <img className="size-10 object-cover rounded-full border-2 border-amber-500 bg-center absolute bottom-8 right-3" src={commentPhoto[index] } alt="Profile" />
 
            </div>
           )) }
          <div className="relative">
            <input type="text" className="w-full border-gray-100 border-2 rounded outline-none p-1 " onChange={(e) => handleInput(e)} value={inputValue}/>
            <IoIosSend className="absolute top-1.5 right-5 text-amber-500 size-6" onClick={handleInputComment} />
          </div>
        </>)}
    </div>
    <div className="flex justify-around pt-2">
      <AiFillLike className={like ? `text-red-600 size-6` : `${unClickedBtn}`} onClick={handleLike} />
      <AiFillDislike className={hate ? `text-neutral-500 size-6` : `${unClickedBtn}`} onClick={handleHate} />
      <FaCommentDots className="text-violet-300 size-6" onClick={handleComment} />
      <FaShare className="text-violet-300 size-6" />
    </div>
  </div>

}
export default Reaction