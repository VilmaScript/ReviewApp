import { useContext, useState } from "react";
import { IoSearchCircle } from "react-icons/io5";
import MyContext from "../context/myContext";
import Rate from "../ui/Rate";
import Images from "../ui/Images";
import Category from "../ui/Category";
import Reaction from "../ui/Reactions";
import ReviewHeader from "../ui/ReviewHeader";
import Comment from "../ui/Comment";


function Search() {
  const { searchData, setInputValue, inputValue, search, setSearch, profileData } = useContext(MyContext)
  function handleChange(e) {
    setInputValue(e.target.value)
  }

  function handleClick() {
    setSearch(searchData)
    console.log(searchData)
  }

  return (
    <div className="text-center ">
      <div className="mb-4 py-4">
      <img
        src="/img8.png"
        className="rounded-full w-44 h-44 m-auto"
        alt="search here"
      />
      <h2 className="text-xl text-gray-700 mb-3">
        Search for reviews & ratings
      </h2>
      <div className="relative">
        <input
          type="text"
          className="w-4/5 bg-violet-50 rounded-full"
          onChange={handleChange}
        />
        <IoSearchCircle
          className="absolute end-11 top-0.5 text-xl text-gray-700"
          onClick={handleClick}
        />
        </div>
      </div>
    <div className="">
      {inputValue !== '' && search?.map((review) => (
        <div key={review.id} className="bg-gray-100 mx-3.5 mb-2 rounded-lg px-3 py-3 ">
          {review && (<> <ReviewHeader review={review} />
            <div className="unclickable flex justify-center">
              <Rate review={review} />
            </div>
            <Comment review={review} />
            <Images review={review} />
            <Category review={review} />
            <Reaction review={review} profileData={profileData}/>
          </>
          )}
        </div>
      ))}
      </div>
    </div>
  );
}

export default Search;
