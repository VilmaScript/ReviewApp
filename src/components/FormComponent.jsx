import Rate from "../ui/Rate"

function FormComponent(){
 return <form className="px-3 bg-violet-50 py-3 h-screen rounded-t-lg">
 <div className="flex flex-col p-3 ">
   <label htmlFor="reviewTitle" className="mb-3">Review Title</label>
   <input className="text-xl p-1.5" type="text" id="reviewTitle" name="reviewTitle" placeholder="Enter the title"/>
 </div>

 <div className="p-3">
   <label>What's your rate</label>
   <Rate/>
 </div>

 <div className="p-3 flex flex-col">
   <label htmlFor="category" className="me-3 mb-3">Category</label>
   <select id="category" name="category" defaultValue="Select a value" className="p-2" >
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
 className="p-2"
 id="message"
 name="message"
 placeholder="write your comment here"
 // value={message}
 // onChange={handleMessageChange}
 //rows="4"
 ></textarea>
  </div>
 {/* <div>
  <label htmlFor="photo">Photo</label>
 </div>
 <div>
  <label htmlFor="video">Video</label>
 </div> */}
 <button type="submit" className="w-full rounded bg-violet-900 text-violet-50 mt-4 py-1.5">Submit</button>
</form>
}

export default FormComponent