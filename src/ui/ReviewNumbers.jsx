function ReviewNumbers({matchinRevData}){
 return <div className="flex justify-between px-4 mb-2 font-medium">
  <h4>My Reviews <span className="text-gray-400">{`(${matchinRevData.length})`}</span></h4>
  <small>see all</small>
 </div>
}

export default ReviewNumbers