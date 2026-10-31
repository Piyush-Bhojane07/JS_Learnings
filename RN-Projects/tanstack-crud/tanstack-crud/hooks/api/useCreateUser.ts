import { apiServiceCreateUser } from "@/services/api";
import { useQueryClient, useMutation,  } from "@tanstack/react-query";


export const useCreateUser = () =>  {
    const queryClient = useQueryClient()
    return useMutation({
    mutationFn : apiServiceCreateUser.createUser,
    onSuccess : () => {
        queryClient.invalidateQueries({ queryKey: ["users"] });

    }
    
})
}
