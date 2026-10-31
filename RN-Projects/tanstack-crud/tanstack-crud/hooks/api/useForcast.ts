import { useQuery } from "@tanstack/react-query"
import { apiServiceForcast } from "@/services/api"


export const useForcast = () => {
    return useQuery({
      queryKey: ["forcast"],
      queryFn: apiServiceForcast.getForcast,
    });
}
