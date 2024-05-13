import { useQuery } from "@tanstack/react-query";
import { fetchData, fetchMatchingReviews} from "../services/dataService";


export const useFetchDataQuery = () => {
      const { data, isLoading, error } = useQuery({
        queryKey: ["fetchReviews"],
        queryFn: fetchData,
        refetchOnWindowFocus: false,
        onSuccess: (fetchedData) => {
          // setUserReview(fetchedData);
        },
      });
      return { data, isLoading, error };
    }
    

    
    
    

    
