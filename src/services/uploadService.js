import supabase from "./supabase";

export const uploadReview = async ({reviewTitle, locationCategory, rating, profilePicture,profileName, message,userId, photoFileOne, photoFileTwo}) => {
    const projectUrl = 'https://qyhemyljfotujmxntqqd.supabase.co'
    const photo1 = photoFileOne.name
    const photo2 = photoFileTwo.name
    const imageUrlOne = `${projectUrl}/storage/v1/object/public/Images/images/${photo1}`
    const imageUrlTwo= `${projectUrl}/storage/v1/object/public/Images/images/${photo2}`
  
  try {
    const { data, error } = await supabase
      .from('reviews')
      .insert([
        {
          usersId: userId,
          name : profileName,
          profilepic : profilePicture,
          category: locationCategory,
          comments: message,
          locationName: reviewTitle,
          rate: rating,
          img_one: imageUrlOne,
          img_two : imageUrlTwo
        },
      ])
      .select();
 
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    
  }
 };
export const uploadProfileData = async ({name,bio, photoFileOne, photoFileTwo, userId}) => {
    const projectUrl = 'https://qyhemyljfotujmxntqqd.supabase.co'
    const photo1 = photoFileOne.name
    const photo2 = photoFileTwo.name
    const imageUrlOne = `${projectUrl}/storage/v1/object/public/Images/images/${photo1}`
    const imageUrlTwo= `${projectUrl}/storage/v1/object/public/Images/images/${photo2}`
  
  try {
    const { data, error } = await supabase
      .from('user')
      .insert([
        {
         fullname : name,
         profile_bio: bio,
          profilepic: imageUrlOne,
          profilebanner : imageUrlTwo,
          userId: userId
        },
      ])
      .select();
 
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    
  }
 };