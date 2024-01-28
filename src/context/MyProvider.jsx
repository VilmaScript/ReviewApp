import { useState, useEffect } from "react";
import MyContext from "./myContext";
import supabase from "../services/supabase";
// Define the table you want to query
const tableName = 'reviews';


function MyProvider({children}){
 const [reviewData, setReview] = useState([])
 
 useEffect(() => {
  const fetchData = async () => {
   try {
    const { data } = await supabase.from(tableName).select('*');
    console.log('Fetched data:', data);
      setReview(data);
      
   } catch (error) {
      console.error('Error fetching data:', error);
    }
 };
  fetchData();
  }
  ,[])
  return (
   <MyContext.Provider value={{ reviewData, setReview}}>
     {children}
   </MyContext.Provider>
 );
}

export default MyProvider