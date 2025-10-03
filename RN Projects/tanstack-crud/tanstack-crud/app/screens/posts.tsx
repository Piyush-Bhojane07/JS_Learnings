import React from "react";
import { View, Text, FlatList } from "react-native";
import { usePosts } from "@/hooks/api/usePosts";

export default function PostsScreen() {
  const { data } = usePosts();
  return (
    <View>
      <Text>Posts Screen</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style = {{
            borderWidth : 1, 
            borderRadius : 10, 
            backgroundColor : 'white',
            padding : 8, 
            margin : 15, 
            

          }}>
            <Text>userId : {item.userId}</Text>
            <Text>Id : {item.id}</Text>
            <Text>title : {item.title}</Text>
            <Text>body : {item.body}</Text>
          </View>
        )}
      />
    </View>
  );
}
