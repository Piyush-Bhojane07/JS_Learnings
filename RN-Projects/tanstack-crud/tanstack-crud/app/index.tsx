import { View, Text, FlatList } from "react-native";

import { useUsers } from "@/hooks/api/useUsers";



export default function HomeScreen() {
  const { isLoading, data, refetch, error } = useUsers();

  if (isLoading) return <Text>Loading...</Text>;

  if (error) return <Text>Error : {error.message}</Text>;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        Users
      </Text>

      <Text>Home Screen</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 16,
              backgroundColor: "white",
              marginBottom: 8,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#aea7a7ff",
            }}
          >
            <Text> id : {item.id}</Text>
            <Text>name : {item.name}</Text>
            <Text>Username : {item.username}</Text>

            <Text>email : {item.email}</Text>
            <Text>address : {item.address.city}</Text>
            <Text>phone : {item.phone}</Text>
            <Text>company : {item.company.name}</Text>
            <Text>
              geo : {item.address.geo.lat} , {item.address.geo.lng}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
