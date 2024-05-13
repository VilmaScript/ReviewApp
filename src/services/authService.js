import supabase from "./supabase";

export async function signIn({email, password}) {
 try {
   const {data} = await supabase.auth.signInWithPassword({
     email,
     password,
   });
   console.log(data)
   return data;
 } catch (error) {
   console.error("An unexpected error occurred:", error);
 }
}

export async function signUp({email,password}){
  try{
    const {data} = await supabase.auth.signUp({
      email,
      password,
    })
   console.log(data, 'hello')
 return data
  } catch (error) {
    console.error("An unexpected error occurred:", error);
  }
}

// const { data:userData , error: insertError } = await supabase
// .from('user')
// .insert([
//    {
//     userId: usersId,
//   },
// ])
// .select();