import { StyleSheet, TextInput, Text, View, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const isEven = () => {
    // Check empty input
    if (input.trim() === "") {
      setResult("Please enter a number");
      return;
    }

    const num = Number(input);

    // Check invalid input
    if (!Number.isFinite(num)) {
      setResult("Please enter a valid number");
      return;
    }

    // Check integer
    if (!Number.isInteger(num)) {
      setResult("Please enter a whole number");
      return;
    }

    // Check even or odd
    if (num % 2 === 0) {
      setResult("Number is even");
    } else {
      setResult("Number is odd");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter a number"
        style={styles.input}
        value={input}
        keyboardType="numeric"
        onChangeText={setInput}
      />

      <View style={styles.button}>
        <Button title="Check Even or Odd" onPress={isEven} />
      </View>

      <Text style={styles.result}>Result: {result}</Text>
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
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 15,
  },

  button: {
    marginBottom: 20,
  },

  result: {
    fontSize: 22,
    alignSelf: "center",
  },
});
