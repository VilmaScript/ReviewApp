import supabase from "./supabase";

export async function signOut() {
 try {
    const { error } = await supabase.auth.signOut()
 
    return error

 } catch (error) {
   console.error("An unexpected error occurred:", error);
 }
}



