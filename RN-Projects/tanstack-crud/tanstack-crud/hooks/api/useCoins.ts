import { useQuery } from "@tanstack/react-query";
import { apiServiceCoins } from "@/services/api";


export const useCoins = () => {
    return useQuery ({
    queryKey : ['coins'],
    queryFn : apiServiceCoins.getCoins
})
} 
