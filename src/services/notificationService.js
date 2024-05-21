import supabase from "./supabase";

export const postNotifications = async ({sendersId, recieversId, name, profilepic,type, reviewId}) => {
    console.log(sendersId, recieversId )
  try {
    const { data, error } = await supabase
      .from('notifications')
      .insert([
        {
          senderId: sendersId,
          recieverId: recieversId,
          name: name,
          profilepic: profilepic,
          type: type,
          reactedId: reviewId

        },
      ])
      .select();
 
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    
  }
 };


 //Fetch liked posts
 export const fetchReactedPosts = async ({reactedId}) => {
  try {
   const { data } = await supabase.from('notifications')
   .select('*')
   .order('created_at', { ascending: false })
   .eq('senderId', reactedId);
 
     return data
     
  } catch (error) {
     console.error('Error fetching data:', error);
   }
 };