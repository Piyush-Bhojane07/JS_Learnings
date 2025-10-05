import { apiServiceAddPost } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreatePost = () =>  {

    const queryClient = useQueryClient()
    
    return useMutation({
      mutationFn: apiServiceAddPost.createPost,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["posts"] });
      },
    });
}
