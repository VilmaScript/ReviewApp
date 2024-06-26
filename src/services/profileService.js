import supabase from "./supabase";

export const fetchProfileDetails = async (userId) => {
    try {
     const { data } = await supabase.from('user')
     .select('*')
     .eq('userId', userId);
   
       return data
       
    } catch (error) {
       console.error('Error fetching data:', error);
     }
   };