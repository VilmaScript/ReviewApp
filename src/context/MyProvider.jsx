import { useEffect, useState } from "react";
import MyContext from "./myContext";
import { useFetchDataQuery } from "../hooks/useData";
import { useFetchSearchDataQuery } from "../hooks/useSearchData";
import { useProfile } from "../hooks/useProfile";
import { useAuth } from "./AuthProvider";


function MyProvider({ children }) {
  const { user } = useAuth()
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });
  const { data: initialReviewData, isLoading: isLoading } = useFetchDataQuery()
  const [reviewData, setReviewData] = useState(null);
  const [isReviewPageActive, setIsReviewPageActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { data: searchData } = useFetchSearchDataQuery(inputValue)
  const [userId, setUserId] = useState(null)
  const { data: profileData } = useProfile(userId)
  const [search, setSearch] = useState(null)


  const updateUserId = (usersId) => {
    setUserId(usersId)
  }

  // Function to update reviewData state
  const updateReviewData = (data) => {
    setReviewData(data);
  };

  useEffect(() => {
    if (user) {
      const id = user.id;
      updateUserId(id);
    }
  }, [user]);


  useEffect(() => {
    updateReviewData(initialReviewData)
  }, [initialReviewData])


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const contextValue = {darkMode, setDarkMode, reviewData, initialReviewData, isLoading, isReviewPageActive, setIsReviewPageActive, search, setSearch, updateUserId, userId, setInputValue, searchData, profileData, updateReviewData };
  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider