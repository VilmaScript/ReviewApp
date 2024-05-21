import supabase from "./supabase";

export async function signIn({ email, password }) {
  try {
    const { data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return data;
  } catch (error) {
    console.error("An unexpected error occurred:", error);
  }
}

export async function signUp({ email, password }) {
  try {
    const { data } = await supabase.auth.signUp({
      email,
      password,
    })
    return data
  } catch (error) {
    console.error("An unexpected error occurred:", error);
  }
}

