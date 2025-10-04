import { View, FlatList, Text, Image} from "react-native";
import { useNasa } from "@/hooks/api/useNasa";

export default function Nasa() {
  const { data, isLoading } = useNasa();
    if (isLoading) {
      return (
        <View>
          <Text>Loading NASA data...</Text>
        </View>
      );
    }
    
  return (
    <View>
      <Text>Nasa</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={5}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 8,
              borderRadius: 10,
              borderWidth: 1,
              margin: 20,
            }}
          >
            <Text>id : {item.id}</Text>
            <Text>camera : {item.camera.name}</Text>
            <Text>camera FN : {item.camera.full_name}</Text>
            <Text>img_src : {item.img_src}</Text>
            <Image
              source={{ uri: item.img_src }}
              style={{ width: 100, height: 100 }}
            />
            <Text>rover : {item.rover.status}</Text>
          </View>
        )}
      />
    </View>
  );
}
