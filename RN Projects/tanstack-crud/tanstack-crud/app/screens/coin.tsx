import { useCoins } from "@/hooks/api/useCoins";
import { View, Text, FlatList, Image } from "react-native";

export default function coin() {
  const { data, isLoading } = useCoins();

  if (isLoading) return <Text>Loading</Text>;
  return (
    <View>
      <Text>coins screen, </Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 8,
              margin: 20,
              borderWidth: 1,
              borderRadius: 20,
            }}
          >
            <Text>id : {item.id}</Text>
            <Text>image : {item.image}</Text>
            <Text>market cap : {item.market_cap}</Text>
            <Image 
                source={{uri : item.image}}
                style = {{width : 100, height : 100}}
            />
          </View>
        )}
      />
    </View>
  );
}
