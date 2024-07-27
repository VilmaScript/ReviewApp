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

    return <div className="p-3 rounded-lg mx-4 my-3 bg-white dark:bg-slate-900 pb-10">
        <div className="flex justify-between mb-3">
        <p>Media</p>
        {matchinRevData.length > 3 && (
        <button className="text-xs bg-violet-900 active:bg-violet-700 focus:outline-none text-white px-1.5 py-2 rounded" onClick={toggleVisibility}>
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      )}
        </div>
        <div className=" grid gap-2 grid-cols-3 ">
        {matchinRevData?.slice(0, visibleItemsCount).map((data, i)=>(
        <img key={i} src={data.img_one} alt="review-photos" className=" sm:size-52 size-44 lg:size-60 object-cover rounded-lg" />
      ))}
        </div>
    </div>
}

export default Media