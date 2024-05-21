import supabase from "./supabase";

//fetch likes
 export const updateLike = async ({currentLike, reviewId}) => {
 try {
    const {error } = await supabase
    .from('reviews')
    .update({ likes: currentLike })
    .eq('id', reviewId);
 return error
 } catch (error) {
    console.error('Error fetching data:', error);
  }
};

//fetch dislikes
 export const updateDislike = async ({currentDislike, reviewId}) => {
 try {
    const { error } = await supabase
    .from('reviews')
    .update({ dislikes: currentDislike })
    .eq('id', reviewId);

    
 } catch (error) {
    console.error('Error fetching data:', error);
  }
};