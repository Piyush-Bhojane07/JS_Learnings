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
  const stds = ["a", "b", "c", "d", "e"];

  return (
    <View style={styles.container}>
      <FlatList
        data={stds}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 50, marginTop: 50 }}>{item}</Text>
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
