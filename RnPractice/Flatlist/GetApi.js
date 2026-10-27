import { useState } from "react";
import { Text, View, Button, FlatList } from "react-native";

export default function App() {
  const [products, setProducts] = useState([]);

  const handleApi = async () => {
    const response = await fetch(
      "https://dummyjson.com/products?utm_source=chatgpt.com",
    );
    const data = await response.json();
    console.log(data.products);

    setProducts(data.products);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        // backgroundColor: 'red',
      }}
    >
      <FlatList
        data={products}
        keyExtrator={(item) => item.id}
        renderItem={({ item, index }) => (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>{index}</Text>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
            <Text>{item.stock}</Text>
          </View>
        )}
      />
      <Button title="hit api" onPress={handleApi} />
    </View>
  );
}
