import { useState } from "react";

function Media({matchinRevData}){

    const [visibleItemsCount, setVisibleItemsCount] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleVisibility = () => {
    if (isExpanded) {
      setVisibleItemsCount(3);
    } else {
      setVisibleItemsCount(matchinRevData.length);
    }
    setIsExpanded(!isExpanded);
  };

    return <div className="p-3 rounded-lg mx-4 my-3 dark:bg-slate-900 pb-10">
        <div className="flex justify-between mb-3">
        <p>Media</p>
        {matchinRevData.length > 3 && (
        <button className="text-xs bg-violet-900 active:bg-violet-700 focus:outline-none text-white px-1.5 py-2 rounded" onClick={toggleVisibility}>
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      )}
        </div>
        <div className=" grid grid-cols-3 gap-2">
        {matchinRevData?.slice(0, visibleItemsCount).map((data, i)=>(
        <img key={i} src={data.img_one} alt="review-photos" className="size-24 object-cover rounded-lg" />
      ))}
        </div>
    </div>
}

export default Media