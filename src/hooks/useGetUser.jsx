import { useQuery } from "@tanstack/react-query";
import { getTheUser } from "../services/getUser";


export const useGetUser = () => {
      const { data, isLoading, error } = useQuery({
        queryKey: ["getuser"],
        queryFn: getTheUser,
        onSuccess: (fetchedData) => {
          // setUserReview(fetchedData);
        },
      });
      return { data, isLoading, error };
    }
    

    
