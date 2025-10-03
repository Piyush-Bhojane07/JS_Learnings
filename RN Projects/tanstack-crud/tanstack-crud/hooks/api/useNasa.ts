import { useQuery } from "@tanstack/react-query";
import { apiServiceNasa } from "@/services/api";
export const useNasa = () => {
    return useQuery({
      queryKey: ["nasa"],
      queryFn: apiServiceNasa.getNasa,
    });
}
