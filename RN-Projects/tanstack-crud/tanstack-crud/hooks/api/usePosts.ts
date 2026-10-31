import { useQuery } from "@tanstack/react-query";
import { apiServicePosts , Post } from "@/services/api";


export const usePosts = () =>  {
return useQuery({
    queryKey : ['posts'] ,
    queryFn : apiServicePosts.getPost
});

}
