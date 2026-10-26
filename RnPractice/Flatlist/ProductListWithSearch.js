import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");

  const handleSearch = () => {};
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

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        style={styles.input}
        value={search}
        onChangeText={setSearch}
      />

      <Button title="Register" />

      <FlatList
        data={products.productList}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginRight: 10 }}>{item.id}) </Text>
            <Text style={{ marginRight: 10 }}>{item.name}</Text>
            <Text style={{ marginRight: 10 }}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  input: {
    margin: 24,
    fontSize: 18,
    padding: 5,
    // fontWeight: 'bold',
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
  },
});
