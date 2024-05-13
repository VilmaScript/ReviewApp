
import supabase from "./supabase";

export const handleImageUpload = async ({ photoFileOne, photoFileTwo }) => {
  try {
    // Upload first photo
    const { data: photoDataOne} = await supabase.storage
      .from('Images')
      .upload(`images/${photoFileOne.name}`, photoFileOne);

    // Upload second photo
    const { data: photoDataTwo } = await supabase.storage
      .from('Images')
      .upload(`images/${photoFileTwo.name}`, photoFileTwo);

    console.log(photoFileOne, photoFileTwo)
    // Return information about both uploaded photos
    return { photoDataOne, photoDataTwo };
  } catch (error) {
    console.error('Unhandled error during image upload:', error.message);
    return { error };
  }
};

