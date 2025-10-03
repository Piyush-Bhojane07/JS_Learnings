import { useQuery } from "@tanstack/react-query";
import { apiService, User } from "@/services/api";

export const useUsers = () =>  {
    return useQuery({
        queryKey : ['users'], 
        queryFn : apiService.getUsers
    })
}