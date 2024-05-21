function ReviewNumbers({matchinRevData, toggleVisibility, isExpanded}){
 return <div className="flex justify-between px-4 mb-2 font-medium">
  <h4>My Reviews <span className="text-gray-400">{`(${matchinRevData.length})`}</span></h4>
  {matchinRevData.length > 1 && (
        <button className="text-xs bg-violet-900 active:bg-violet-700 focus:outline-none text-white px-1.5 py-2 rounded" onClick={toggleVisibility}>
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      )}
 </div>
}

export default ReviewNumbers