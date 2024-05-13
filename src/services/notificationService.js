import supabase from "./supabase";

export const postNotifications = async ({sendersId, recieversId, name, profilepic,type}) => {
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

        },
      ])
      .select();
 
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    
  }
 };