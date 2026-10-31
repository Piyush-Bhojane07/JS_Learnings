import { View, Text, FlatList } from "react-native";
import { useComment } from "@/hooks/api/useComments";
export default function Comments() {
  const { data, isLoading, error } = useComment();

  if (isLoading) return <Text>loading.....</Text>;

  if (error) return <Text>Error : {error.message}</Text>;
  return (
    <View>
      <Text>comments</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 8,
              margin: 18,
              borderWidth: 1,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          >
            <Text>post id : {item.postId}</Text>
            <Text>name : {item.name}</Text>
            <Text>email : {item.email}</Text>
            <Text>body : {item.body}</Text>
          </View>
        )}
      />
    </View>
  );
}
