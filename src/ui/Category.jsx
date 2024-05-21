
function Category ({review}){
 return <div className="flex justify-between bg-gray-100 dark:bg-slate-800 p-3 pt-1.5 rounded-sm mt-3">
 <div>
 <h6 className="text-xs font-medium">Category</h6>
 <p className="text-sm">{review.category}</p>
 </div>
 <div>
 <h6 className="text-xs font-medium">location</h6>
 {/* <LocationName className="text-sm"/> */}
 <p className="text-sm">{review.locationName}</p>
 </div>
 </div>
}

export default Category