import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchProfileDetails } from "../services/profileService";
import { useEffect } from "react";

export const useProfile = (userId) => {
  const queryClient = useQueryClient();

    const { data, isLoading, error } = useQuery({
      queryKey: ["fetchProfile", userId],
      queryFn:() => fetchProfileDetails(userId),
      onSuccess: (fetchedData) => {
    
      },
    });

    useEffect(() => {
      queryClient.invalidateQueries('fetchProfile');
    }, [userId, queryClient]);
  
    return { data, isLoading, error };
  }