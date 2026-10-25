import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.boxOne}></View>

      <Text style={styles.titleTxt}>{count}</Text>
      <View style={styles.boxTwo}></View>

      <Button
        title="login"
        onPress={() => Alert.alert("title", "btn clicked")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "5%",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  titleTxt: {
    fontSize: 50,
  },

  boxOne: {
    width: 50,
    height: 50,
    backgroundColor: "red",
  },

  boxTwo: {
    width: 50,
    height: 50,
    backgroundColor: "green",
  },

  input: {
    fontSize: "40",
  },
});
