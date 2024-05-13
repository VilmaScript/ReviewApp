import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { getSearchReviews } from "../services/searchService";

export const useFetchSearchDataQuery = (value) => {
    const queryClient = useQueryClient();
  
    const { data, isLoading, error } = useQuery({
      queryKey: ["fetchSearchReviews"],
      queryFn:() => getSearchReviews(value),
      refetchOnWindowFocus: false,
      onSuccess: (fetchedData) => {
        console.log(fetchedData);
      },
    });

    useEffect(() => {
      queryClient.invalidateQueries('fetchSearchReviews');
    }, [value, queryClient]);
  
    return { data, isLoading, error };
  };
  