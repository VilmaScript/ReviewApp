function Images({review}){
 return  <><div className="grid grid-cols-3 gap-4 ">
  <div  className="col-span-2 ">
  <img  className="h-32 w-full object-cover rounded-md" src={review?.img_one} alt="Uploaded Image" />
  </div>
  <div >
  <img className="h-32 w-full object-cover rounded-md"  src={review?.img_two} alt="pizza" />
  </div>
 </div>
 </>
}

export default Images
