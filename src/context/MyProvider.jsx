import { useEffect, useState } from "react";
import MyContext from "./myContext";
import { useFetchDataQuery } from "../hooks/useData";
import { useFetchSearchDataQuery } from "../hooks/useSearchData";
import { useProfile } from "../hooks/useProfile";
import { useGetUser } from "../hooks/useGetUser";


function MyProvider({ children }) {
  const { data: reviewData, isLoading } = useFetchDataQuery()
  const {data: userData, isLoading: userLoading} = useGetUser()

  const [isReviewPageActive, setIsReviewPageActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { data: searchData } = useFetchSearchDataQuery(inputValue)
  const [userId, setUserId] = useState(null)
  const { data: profileData } = useProfile(userId)
  const [search, setSearch] = useState(null)
 
  const updateUserId = (usersId) => {
    setUserId(usersId)
  }

  useEffect(() => {
    if (!userLoading && userData) {
      const { user: { id } } = userData;
      console.log(id);
      updateUserId(id);
    }
  }, [userData, userLoading]);


console.log(userId)
  const contextValue = { reviewData, isLoading, isReviewPageActive, setIsReviewPageActive, search, setSearch, updateUserId, userId, setInputValue, searchData, profileData, userData, userLoading};
  console.log(contextValue)
  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider