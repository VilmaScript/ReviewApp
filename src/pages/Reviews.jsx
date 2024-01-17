import { useEffect, useState } from "react"
import { createClient } from '@supabase/supabase-js';
import ReviewComponent from "../components/ReviewComponent"
import ReviewPageHeader from "../ui/ReviewPageHeader"
 const projectUrl = 'https://qyhemyljfotujmxntqqd.supabase.co'
 const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5aGVteWxqZm90dWpteG50cXFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0MDg4ODYsImV4cCI6MjAyMDk4NDg4Nn0.Mv1kWIw4cx-hGhysx3H0Rd63X-7ehpjNUHl1et3Aw1M'
 
 const supabase = createClient(projectUrl, apiKey);

// Define the table you want to query
const tableName = 'reviews';

function Reviews(){
 const [reviewData, setReview] = useState([])
 
 useEffect(() => {
  const fetchData = async () => {
   try {
    const { data, error } = await supabase.from(tableName).select('*');
      setReview(data);
   } catch (error) {
      console.error('Error fetching data:', error);
    }
 };
  fetchData();
  }
  ,[])




 return <div>
 <ReviewPageHeader/>
 <ReviewComponent reviewData={reviewData}/>
</div>
}

export default Reviews