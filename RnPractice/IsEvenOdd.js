import { StyleSheet, TextInput, Text, View, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  const [result, setResult] = useState("");

  const isEven = () => {
    if (input % 2 == 0) {
      setResult("num is even");
    } else {
      setResult("num is odd");
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="pass"
        style={styles.input}
        value={input}
        onChangeText={setInput}
      />

      <Button title="check even odd" onPress={isEven} />
      <Text style={{ fontSize: 25, alignSelf: "center" }}>
        {" "}
        result : {result}
      </Text>
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
    padding: 15,
    // height : ,
    borderWidth: 1,
    borderRadius: 15,
  },
});
