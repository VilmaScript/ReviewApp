import { useState } from "react"
 import supabase from "../services/supabase";
import Rate from "../ui/Rate"
import { useNavigate } from "react-router-dom";


function FormComponent(){
const [reviewTitle, setReviewTitle] = useState('')
const [locationCategory, setLocationCategory] = useState('')
const [rating, setRating] = useState(0)
const [message, setMessage] = useState('')
const [photo, setPhoto] = useState(null)


const navigate = useNavigate()
const handleSubmit = async (e) => {
  e.preventDefault()
  
const { data, error } = await supabase
.from('reviews')
.insert([
  { 
    category: locationCategory,
     comments: message, 
     locationName: reviewTitle ,
     rate : rating,
     
    },
])
.select()

// Clear the input fields
setReviewTitle('');
setLocationCategory('');
setRating(0);
setMessage('');
setPhoto(null);

 navigate('/')
}

function handleRating(i){
  setRating(i + 1)
}

 return <form className="px-3 bg-violet-50 py-3 h-screen rounded-t-lg" onSubmit={handleSubmit}>
 <div className="flex flex-col p-3 ">
   <label htmlFor="reviewTitle" className="mb-3">Review Title</label>
   <input className="text-xl p-1.5" type="text" id="reviewTitle" name="reviewTitle" placeholder="Enter the title" onChange={(e)=> setReviewTitle(e.target.value)}/>
 </div>

 <div className="p-3 text-left">
   <label>What's your rate</label>
   <Rate handleRating={handleRating} rating={rating}/>
 </div>

 <div className="p-3 flex flex-col">
   <label htmlFor="category" className="me-3 mb-3">Category</label>
   <select id="category" name="category" defaultValue="Select a value" className="p-2" onChange={(e)=> setLocationCategory(e.target.value)} >
   <option value="" disabled>Select a value</option> 
   <option value="restaurant">restaurant</option>
   <option value="bar">bar</option>
   <option value="bakery">bakery</option>
   </select>
 </div>
 {/* <div>
 <label>Location:</label>
 </div> */}
 <div className="flex flex-col p-3">
 <label htmlFor="message" className="me-3 mb-3">Message</label>
 <textarea
 onChange={(e)=> setMessage(e.target.value)}
 className="p-2"
 id="message"
 name="message"
 placeholder="write your comment here"
 // value={message}
 // onChange={handleMessageChange}
 //rows="4"
 ></textarea>
  </div>
  <div className="flex flex-col p-3">
  <label htmlFor="photo" className="me-3 mb-3">Photo</label>
  <input type="file" onChange={(e)=> setPhoto(e.target.value)}/>
 </div>
 <button type="submit" className="w-full rounded bg-violet-900 text-violet-50 mt-4 py-1.5">Submit</button>
</form>
}

export default FormComponent