import supabase from "./supabase";

export const uploadComment = async ({inputValue, reviewId, commentPic }) => {
    console.log(inputValue, reviewId )
  try {
    const { data, error } = await supabase
      .from('comments')
      .insert([
        {
          comment_text: inputValue,
          review_id: reviewId,
          profilepic: commentPic,
        },
      ])
      .select();
 
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    
  }
 };