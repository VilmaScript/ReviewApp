import React, { createContext, useState, useEffect, useContext } from 'react';
import supabase from "../services/supabase";
import { useMutation } from '@tanstack/react-query';
import { signIn, signUp } from '../services/authService';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const { mutate: signUpMutation } = useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
    },
  })

  const { mutate: signInMutation } = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
    },
  })


  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      const { user: currentUser } = data;
      setUser(currentUser ?? null);
      setAuthLoading(false);
    };
    getUser();
    //AuthSateListener
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setUser(session.user);
      }
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  //Sign out logic
  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);

  };

  return (
    <AuthContext.Provider value={{ user, authLoading, setUser, signInMutation, signOut, signUpMutation }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
