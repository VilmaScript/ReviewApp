import supabase from "./supabase"

export const uploadUserDetails = async({name, username, userId}) => {
    try{
   
  const { data, error } = await supabase
  .from('user')
  .insert([{ 
    fullname: name,
  username : username,
 userId: userId },])
  .select()
    } catch(error){
  
    }
  }
  