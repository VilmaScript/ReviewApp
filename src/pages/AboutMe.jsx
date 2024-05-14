import { useFormik } from 'formik';
import * as Yup from "yup"
import { uploadUserDetails } from '../services/userService';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import myContext from '../context/myContext'
import { useMutation } from '@tanstack/react-query';
import { uploadProfileData, uploadReview } from '../services/uploadService';
import { handleImageUpload } from '../services/imageService';
import MyContext from '../context/myContext';

function AboutMe(){
  const {userId} = useContext(myContext)
  console.log(userId)
  const [disable, setDisabled] = useState(false)
  const [name, setName] = useState()
  const [photoOne, setPhotoOne] = useState(null)
  const [photoTwo, setPhotoTwo] = useState(null)
  const [photoFileOne, setPhotoFileOne] = useState(null); 
  const [bio, setBio] = useState(null)
  const [photoFileTwo, setPhotoFileTwo] = useState(null); 

 const navigate = useNavigate()

 function handleFileChangeOne(e){

  const photoFile = e.target.files[0]
  setPhotoOne(photoFile.name)
  setPhotoFileOne(photoFile)
  console.log(photoFile)
}
 function handleFileChangeTwo(e){
  const photoFile = e.target.files[0]
  setPhotoTwo(photoFile.name)
  setPhotoFileTwo(photoFile)
  console.log(photoFile)
}
const {isLoading, mutate : uploadReviewMutation} =useMutation({
  mutationFn: uploadProfileData,
  onSuccess : () => {
    // queryClient.invalidateQueries('fetchReviews')
  }
})

//Mutation for uploading images
const { mutate : uploadImageMutation} = useMutation({
  mutationFn: handleImageUpload,
  onSuccess : () => {
    // queryClient.invalidateQueries('fetchReviews')
  }
})
const handleSubmit = async (e) => {
  e.preventDefault()
  navigate('/')
  console.log(photoFileOne.name)
  console.log(photoFileTwo.name)
// Call upload review mutation fn
  uploadProfileData({ name, bio ,photoFileOne, photoFileTwo, userId });
  
//call upload image mutationFn
uploadImageMutation({photoFileOne, photoFileTwo})

// Clear the input fields
setName('');
setPhotoOne(null);
setPhotoTwo(null);

}

 
 return <div className="bg-white h-screen">
 <h2 className="text-2xl text-center font-normal p-4">Profile Information</h2>

 <form className="py-5 px-5" onSubmit={handleSubmit}>
  <div className="py-3">
  <label htmlFor="name" className=" font-medium">What is your Name?</label>
  <input 
  type="text" 
  id="name" 
  name="name" 
  placeholder="Whichever name you prefer.." 
  className="border-2 border-purple-200 rounded-full w-full px-2 py-1 mt-3"
  onChange={(e)=> setName(e.target.value)} />
  </div>
  <div className="py-3">
  <label htmlFor="name" className=" font-medium">Profile Bio</label>
  <textarea
  type="text" 
  id="bio" 
  name="bio" 
  placeholder="Your bio describes you" 
  className="border-2 border-purple-200 rounded-lg w-full px-2 py-1 mt-3"
  onChange={(e)=> setBio(e.target.value)} 
  ></textarea>
  </div>
   
  <div className=" p-3">
  <label htmlFor="photo" className="me-3 mb-3">Profile picture</label>
  <input type="file" onChange={handleFileChangeOne}/>
 </div>
  <div className=" p-3">
  <label htmlFor="photo" className="me-3 mb-3">Profile banner </label>
  <input type="file" onChange={handleFileChangeTwo}/>
 </div>

  <button type="submit" disabled={disable} className="bg-violet-900 w-full text-white px-3 py-1.5 rounded-full mt-7">Submit</button>
 </form>

 </div>
}

export default AboutMe