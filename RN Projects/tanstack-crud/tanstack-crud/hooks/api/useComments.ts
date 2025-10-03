import { apiServiceComments } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export const useComment = () =>   {
    return  useQuery ({
    queryKey : ['comments'], 
    queryFn : apiServiceComments.getComment
    
})
}
