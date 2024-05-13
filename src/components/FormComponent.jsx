import { useContext, useState } from "react"
import MyContext from "../context/myContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { uploadReview } from "../services/uploadService";
import { handleImageUpload } from "../services/imageService"
import LoadingSpinner from "../ui/spinner";
import Rate from "../ui/Rate"

function FormComponent() {
  const queryClient = useQueryClient();
  const {userId, profileData} = useContext(MyContext)
  const navigate = useNavigate()
  const [reviewTitle, setReviewTitle] = useState('')
  const [locationCategory, setLocationCategory] = useState('')
  const [rating, setRating] = useState(0)
  const [message, setMessage] = useState('')
  const [photoOne, setPhotoOne] = useState(null)
  const [photoTwo, setPhotoTwo] = useState(null)
  const [photoFileOne, setPhotoFileOne] = useState(null);
  const [photoFileTwo, setPhotoFileTwo] = useState(null);

  if ( !userId || !profileData){
    return <LoadingSpinner />;
  }

  const profilePicture = profileData[0].profilepic
  const profileName =profileData[0].fullname
  console.log(profileData, profilePicture, profileName)
 
  //Mutation for uploading reviews
  const { isLoading, mutate: uploadReviewMutation } = useMutation({
    mutationFn: uploadReview,
    onSuccess: () => {
      queryClient.invalidateQueries('fetchReviews')
    }
  })

  //Mutation for uploading images
  const { mutate: uploadImageMutation } = useMutation({
    mutationFn: handleImageUpload,
    onSuccess: () => {
      queryClient.invalidateQueries('fetchReviews')
    }
  })

  // When the form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault()
    navigate('/')
    console.log(photoFileOne.name)
    // Call upload review mutation fn
    uploadReviewMutation({ reviewTitle, locationCategory, rating, message, photoFileOne, photoFileTwo, userId,profileName, profilePicture });

    //call upload image mutationFn
    uploadImageMutation({ photoFileOne, photoFileTwo })

    // Clear the input fields
    setReviewTitle('');
    setLocationCategory('');
    setRating(0);
    setMessage('');
    setPhotoOne(null);
    setPhotoTwo(null);

  }

  function handleRating(i) {
    setRating(i + 1)
  }

  function handleFileChangeOne(e) {
    const photoFile = e.target.files[0]
    setPhotoOne(photoFile.name)
    setPhotoFileOne(photoFile)
    console.log(photoFile)
  }
  function handleFileChangeTwo(e) {
    const photoFile = e.target.files[0]
    setPhotoTwo(photoFile.name)
    setPhotoFileTwo(photoFile)
    console.log(photoFile)
  }

  return <form className="px-3 bg-violet-50 py-3 h-screen rounded-t-lg" onSubmit={handleSubmit}>
    <div className="flex flex-col p-3 ">
      <label htmlFor="reviewTitle" className="mb-3">Review Title</label>
      <input className="text-xl p-1.5" type="text" id="reviewTitle" name="reviewTitle" placeholder="Enter the title" onChange={(e) => setReviewTitle(e.target.value)} />
    </div>

    <div className="p-3 text-left">
      <label>What's your rate</label>
      <Rate handleRating={handleRating} rating={rating} />
    </div>

    <div className="p-3 flex flex-col">
      <label htmlFor="category" className="me-3 mb-3">Category</label>
      <select id="category" name="category" defaultValue="Select a value" className="p-2" onChange={(e) => setLocationCategory(e.target.value)} >
        <option value="" disabled>Select a value</option>
        <option value="restaurant">restaurant</option>
        <option value="bar">bar</option>
        <option value="bakery">bakery</option>
      </select>
    </div>

    <div className="flex flex-col p-3">
      <label htmlFor="message" className="me-3 mb-3">Message</label>
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        className="p-2"
        id="message"
        name="message"
        placeholder="write your comment here"
      ></textarea>
    </div>
    <div className=" p-3">
      <label htmlFor="photo" className="me-3 mb-3">Photo 1</label>
      <input type="file" onChange={handleFileChangeOne} />
    </div>
    <div className=" p-3">
      <label htmlFor="photo" className="me-3 mb-3">Photo 2</label>
      <input type="file" onChange={handleFileChangeTwo} />
    </div>
    <button type="submit" className="w-full rounded bg-violet-900 text-violet-50 mt-4 py-1.5">Submit</button>
  </form>
}

export default FormComponent