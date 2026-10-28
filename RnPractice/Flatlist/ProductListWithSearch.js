import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");

  const products = {
    productList: [
      {
        id: "1",
        name: "Laptop",
        price: 45000,
        description: "Powerful laptop for work, study, and everyday tasks.",
      },
      {
        id: "2",
        name: "Mobile",
        price: 15000,
        description:
          "Smartphone with a clear display and long-lasting battery.",
      },
      {
        id: "3",
        name: "Headphones",
        price: 2000,
        description: "Comfortable headphones with clear sound quality.",
      },
      {
        id: "4",
        name: "Keyboard",
        price: 1200,
        description: "Durable keyboard suitable for typing and office work.",
      },
      {
        id: "5",
        name: "Mouse",
        price: 500,
        description: "Lightweight mouse for smooth and precise navigation.",
      },
      {
        id: "6",
        name: "Laptop",
        price: 45000,
        description: "Reliable laptop for multitasking and productivity.",
      },
      {
        id: "7",
        name: "Mobile",
        price: 15000,
        description:
          "Affordable smartphone for calls, apps, and entertainment.",
      },
      {
        id: "8",
        name: "Headphones",
        price: 2000,
        description: "Portable headphones for music and video streaming.",
      },
      {
        id: "9",
        name: "Keyboard",
        price: 1200,
        description: "Compact keyboard for comfortable daily typing.",
      },
      {
        id: "10",
        name: "Mouse",
        price: 500,
        description: "Easy-to-use mouse for everyday computer tasks.",
      },
    ],
  };

  // Filter products based on search text
  const filteredProducts = products.productList.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search products..."
        style={styles.input}
        value={search}
        onChangeText={setSearch}
      />

      <Button title="Register" onPress={() => {}} />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No products found.</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text style={styles.text}>{item.id}</Text>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>₹{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    padding: 8,
    paddingTop: 40,
  },
  input: {
    margin: 16,
    fontSize: 18,
    padding: 10,
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#999",
  },
  product: {
    flexDirection: "row",
    padding: 12,
    marginVertical: 4,
    backgroundColor: "white",
    borderRadius: 5,
  },
  text: {
    marginRight: 15,
    fontSize: 16,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});
