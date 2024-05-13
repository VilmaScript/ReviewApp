import supabase from "./supabase";


// Fetch Search data
export const getSearchReviews = async (value) => { 
    try {
      if (!value) {
        return []; // Return an empty array if value is empty
      }
      let { data, error } = await supabase
        .from('reviews')
        .select('*')
        .or(`category.eq.${value},name.ilike.%${value}%,locationName.ilike.%${value}%`);
      console.log(data)
      return data;
    } catch (error) {
      console.error('Error fetching reviews:', error.message)
    }
  };
  