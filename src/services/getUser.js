import supabase from "./supabase";

export async function getTheUser() {
 try {
    const { data } = await supabase.auth.getUser();
   
   return data;
 } catch (error) {
   console.error("An unexpected error occurred:", error);
 }
}
