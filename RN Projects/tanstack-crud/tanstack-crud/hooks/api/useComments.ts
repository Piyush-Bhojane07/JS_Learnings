import { apiServiceComments } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

useQuery ({
    queryKey : ['comments'], 
    queryFn : apiServiceComments.getComment
    
})