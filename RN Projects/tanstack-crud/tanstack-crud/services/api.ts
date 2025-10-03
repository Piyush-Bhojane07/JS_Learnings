// services/api.ts
import axios from "axios";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const apiService = {
  async getUsers(): Promise<User[]> {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log(res.data);
    return res.data;
  },
};

export interface Post {
  id : number,
  userId: number;
  title: string;
  body: string;
}


export const apiServicePosts = {
  async getPost(): Promise<Post[]> {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // console.log(res.data)
    return res.data;
  }
};


export interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body : string;
}

export const apiServiceComments = {
 async getComment () : Promise<Comments[]> {
   const response = await axios.get(
     "https://jsonplaceholder.typicode.com/comments"
   );
   console.log(response.status);
   console.log(response.data)
   return response.data
 }
}


// More endpoints from JSONPlaceholder
// const jsonPlaceholderEndpoints = [
//   'https://jsonplaceholder.typicode.com/comments',
//   'https://jsonplaceholder.typicode.com/albums',
//   'https://jsonplaceholder.typicode.com/photos',
//   'https://jsonplaceholder.typicode.com/todos'
// '
// // ];

// const githubEndpoints = [
//   "https://api.github.com/users/octocat",
//   "https://api.github.com/users/octocat/repos",
//   "https://api.github.com/search/repositories?q=react",
//   "https://api.github.com/orgs/facebook/repos",
// ];
