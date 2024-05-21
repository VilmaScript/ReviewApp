import supabase from "./supabase";

//fetch data
 export const fetchData = async () => {
 try {
  const { data } = await supabase.from('reviews').select('*').order('created_at', { ascending: false }); 
  
    return data
    
 } catch (error) {
    console.error('Error fetching data:', error);
  }
};

//fetch comments
 export const fetchComments = async ({reviewId}) => {
 try {
  const { data } = await supabase.from('comments')
  .select('*')
  .eq('review_id', reviewId);

    return data
    
 } catch (error) {
    console.error('Error fetching data:', error);
  }
};
//fetch matching reviews
 export const fetchMatchingReviews = async ({userId}) => {
 try {
  const { data } = await supabase.from('reviews')
  .select('*')
  .order('created_at', { ascending: false })
  .eq('usersId', userId);
  
    return data
    
 } catch (error) {
    console.error('Error fetching data:', error);
  }
};
 export const fetchNotifications = async ({userId}) => {
 try {
  const { data } = await supabase.from('notifications')
  .select('*')
  .eq('recieverId', userId);

    return data
    
 } catch (error) {
    console.error('Error fetching data:', error);
  }
};





