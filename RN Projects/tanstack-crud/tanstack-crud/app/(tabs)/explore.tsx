import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function ExploreScreen() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Explore Screen
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#007AFF",
          padding: 15,
          borderRadius: 8,
          marginVertical: 10,
        }}
        onPress={() => router.push("/")} // Navigate to root (app/index.tsx)
      >
        <Text style={{ color: "white", fontSize: 18 }}>
          Go to Home (Users List)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#007AFF",
          padding: 15,
          borderRadius: 8,
          marginVertical: 10,
        }}
        onPress={() => router.push("/screens/posts")} // Navigate to root (app/index.tsx)
      >
        <Text style={{ color: "white", fontSize: 18 }}>
          Go to Home (Post List)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#007AFF",
          padding: 15,
          borderRadius: 8,
          marginVertical: 10,
        }}
        onPress={() => router.push("/screens/comments")} // Navigate to root (app/index.tsx)
      >
        <Text style={{ color: "white", fontSize: 18 }}>
          Go to Home (comments List)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#007AFF",
          padding: 15,
          borderRadius: 8,
          marginVertical: 10,
        }}
        onPress={() => router.push("/screens/nasa")} // Navigate to root (app/index.tsx)
      >
        <Text style={{ color: "white", fontSize: 18 }}>
          Go to Home (nasa List)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#007AFF",
          padding: 15,
          borderRadius: 8,
          marginVertical: 10,
        }}
        onPress={() => router.push("/screens/coin")} // Navigate to root (app/index.tsx)
      >
        <Text style={{ color: "white", fontSize: 18 }}>
          Go to Home (coin List)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#007AFF",
          padding: 15,
          borderRadius: 8,
          marginVertical: 10,
        }}
        onPress={() => router.push("/screens/forcast")} // Navigate to root (app/index.tsx)
      >
        <Text style={{ color: "white", fontSize: 18 }}>
          Go to Home (forcast List)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#007AFF",
          padding: 15,
          borderRadius: 8,
          marginVertical: 10,
        }}
        onPress={() => router.push("/screens/createPost")} // Navigate to root (app/index.tsx)
      >
        <Text style={{ color: "white", fontSize: 18 }}>create post</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#007AFF",
          padding: 15,
          borderRadius: 8,
          marginVertical: 10,
        }}
        onPress={() => router.push("/screens/createPost")} // Navigate to root (app/index.tsx)
      >
        <Text style={{ color: "white", fontSize: 18 }}>create post</Text>
      </TouchableOpacity>
    </View>
  );
}
