import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
} from "react-native";
import { useState } from "react";

export default function App() {
  const products = [
    { id: "1", name: "Laptop", price: 45000 },
    { id: "2", name: "Mobile", price: 15000 },
    { id: "3", name: "Headphones", price: 2000 },
    { id: "4", name: "Keyboard", price: 1200 },
    { id: "5", name: "Mouse", price: 500 },

    { id: "6", name: "Laptop", price: 45000 },
    { id: "7", name: "Mobile", price: 15000 },
    { id: "8", name: "Headphones", price: 2000 },
    { id: "9", name: "Keyboard", price: 1200 },
    { id: "10", name: "Mouse", price: 500 },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ fontSize: 50, marginTop: 50, marginRight: 15 }}>
              {item.id})
            </Text>

            <Text style={{ fontSize: 50, marginTop: 50 }}>{item.name} - </Text>

            <Text style={{ fontSize: 50, marginTop: 50 }}>{item.price}</Text>
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
    alignItems: "center",
    padding: 8,
  },
});
